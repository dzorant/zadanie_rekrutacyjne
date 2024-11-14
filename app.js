const axios = require('axios');
const fs = require('fs');

// Funkcja do pobrania artykułu
async function fetchArticle() {
    const url = 'https://cdn.oxido.pl/hr/Zadanie%20dla%20JJunior%20AI%20Developera%20-%20tresc%20artykulu.txt';
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Błąd podczas pobierania artykułu:", error);
    }
}

// Funkcja do przetwarzania artykułu przez API OpenAI
async function processArticleWithAI(articleContent) {
    const apiKey = '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';  // klucz API OpenAI
    const prompt = `Przekształć ten artykuł na kod HTML, który ma być umieszczony wewnątrz <body>. 
    Wymagania:
    - Użyj odpowiednich tagów HTML tj. h1, h2, h3, paragraph, section, container, dobierz odpowiednie.
    - Dodaj tag <img src="image_placeholder.jpg" alt="opis grafiki"> w miejscach, gdzie warto wstawić grafikę, wraz z podpisem.
    - Podpis i alt grafiki muszą być dopasowane do treści.
    - Grafiki dodawaj w sekcji <figure>.
    - Upewnij się, że dodajesz odpowiedni podpis pod każdym tagiem <img>, np. <figcaption>Podpis grafiki</figcaption>.
    - Nie twórz pełnego szablonu HTML. Zwróć jedynie zawartość do umieszczenia między tagami <body> i </body>.
    - Zadbaj o to, aby żadna część artykułu nie została pominięta. Na końcu treści powinno znaleźć się zdanie: "*Tekst opracowany przez AI. W Oxido nie mamy aż tak cukierkowego spojrzenia na sztuczną inteligencję... ;)".`;;

    

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an AI that formats content into structured HTML." },
                { role: "user", content: prompt + "\n\n" + articleContent }
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

              // Usunięcie zbędnych znaczników z odpowiedzi
        const content = response.data.choices[0].message.content.replace(/^```html\n|```$/g, '');
        return content;
    } catch (error) {
        console.error("Błąd podczas przetwarzania artykułu przez OpenAI:", error);
    }
}

// Funkcja zapisująca wynikowy kod HTML do pliku
function saveToFile(content) {
    fs.writeFileSync('artykul.html', content, 'utf8', (err) => {
        if (err) {
            console.error("Błąd podczas zapisywania pliku:", err);
        } else {
            console.log("Plik artykul.html został zapisany pomyślnie.");
        }
    });
}

// Główna funkcja aplikacji
async function main() {
    const articleContent = await fetchArticle();
    if (articleContent) {
        const processedContent = await processArticleWithAI(articleContent);
        if (processedContent) {
            saveToFile(processedContent);
        }
    }
}

// Uruchomienie aplikacji
main();