# zadanie_rekrutacyjne
app.js
Aplikacja do Przetwarzania Artykułów na HTML 

Ta aplikacja pobiera artykuł z zewnętrznego źródła, przetwarza jego treść przy użyciu OpenAI API na format HTML i zapisuje wynikowy plik artykul.html. Wygenerowany kod HTML zawiera odpowiednie struktury, takie jak nagłówki, paragrafy oraz elementy graficzne z podpisami.

> Funkcjonalności

Pobieranie artykułu z zewnętrznego źródła.
Przetwarzanie treści artykułu przy użyciu OpenAI API na format HTML.
Dodanie grafik w odpowiednich miejscach w formacie <figure> z podpisami <figcaption>.
Zapis wynikowego kodu HTML w pliku artykul.html.

> Wymagania

Node.js
NPM
Moduł axios do obsługi HTTP (instalacja opisana poniżej).
Klucz API OpenAI w pliku aplikacji (potrzebny do przetworzenia tekstu na HTML).
Instrukcja uruchomienia

> Klonowanie repozytorium

Najpierw sklonuj repozytorium:
git clone <adres_repozytorium>
cd <nazwa_repozytorium>

> Instalacja zależności

Zainstaluj wymagane moduły:
npm install axios
Uruchomienie aplikacji

Aby uruchomić aplikację, wpisz w terminalu:
node app.js
Po uruchomieniu aplikacja:
Pobierze treść artykułu z adresu https://cdn.oxido.pl/hr/Zadanie%20dla%20JJunior%20AI%20Developera%20-%20tresc%20artykulu.txt.
Przetworzy artykuł do formatu HTML przy użyciu OpenAI API.
Zapisze wynikowy plik artykul.html w katalogu głównym projektu.

> Struktura kodu

fetchArticle: Funkcja pobierająca treść artykułu z podanego URL.
processArticleWithAI: Funkcja przetwarzająca treść artykułu na HTML przy użyciu OpenAI API.
saveToFile: Funkcja zapisująca wynikowy kod HTML do pliku artykul.html.
main: Główna funkcja zarządzająca procesem aplikacji.
Uwagi

Aby aplikacja działała, klucz API OpenAI powinien być prawidłowy i aktywny.
Aplikacja zapisuje kod HTML w pliku artykul.html w katalogu głównym repozytorium.
Kod wynikowy HTML nie zawiera pełnego szablonu HTML (np. <html>, <head>), jedynie zawartość do umieszczenia wewnątrz <body>.

________________________________________________________________________________________________

podglad.html
Ten plik HTML jest stroną internetową, która pobiera zawartość z pliku artykul.html i wyświetla ją w przeglądarce. Zawiera następujące elementy:

> Nagłówki i style:

Użyto fontu Lato z Google Fonts.
Plik korzysta z resetu CSS, aby usunąć domyślne marginesy i odstępy.
Strona jest dostosowana do wyświetlania artykułu w czytelnym formacie, z maksymalną szerokością 800px oraz wyśrodkowanym układem.
Zdefiniowano style dla nagłówków (h1, h2), obrazów oraz sekcji (section), a także dla elementu <figure>, który wyśrodkowuje obrazy.

> Elementy stylizacji i animacji:

fade-in: Efekt płynnego pojawiania się (opacity) dla głównej sekcji article-content, który jest aktywowany po załadowaniu artykułu.
JavaScript:

Skrypt JavaScript asynchronicznie pobiera zawartość pliku artykul.html po załadowaniu strony, korzystając z funkcji fetch.
Po pomyślnym załadowaniu zawartości artykul.html, treść artykułu jest umieszczana w elemencie o ID article-content, co wywołuje efekt fade-in.
Jeśli wystąpi błąd podczas ładowania artykułu, wyświetlany jest komunikat „Nie udało się załadować artykułu”.


Aby uruchomić ten plik HTML i poprawnie załadować treść z artykul.html, potrzebujesz lokalnego serwera HTTP, ponieważ przeglądarka blokuje odwołania do plików lokalnych (CORS) w przypadku bezpośredniego otwierania pliku HTML (np. file://).

Można użyć narzędzia http-server, które jest proste do skonfigurowania i pozwala szybko uruchomić serwer lokalny.

> Instrukcja uruchomienia pliku HTML

Zainstaluj http-server (jeśli nie jest jeszcze zainstalowany): W terminalu uruchom poniższe polecenie, aby globalnie zainstalować http-server:

npm install -g http-server
Uruchom serwer w katalogu z plikami HTML: Przejdź do katalogu zawierającego plik index.html oraz artykul.html, a następnie uruchom serwer:

npx http-server .
To polecenie uruchomi serwer HTTP w bieżącym katalogu.

Otwórz stronę w przeglądarce: 
Po uruchomieniu serwera zobaczysz w terminalu adres URL, np. http://127.0.0.1:8080. Skopiuj ten adres i otwórz go w przeglądarce.

Po wykonaniu powyższych kroków strona HTML pobierze zawartość z artykul.html i wyświetli ją zgodnie z przygotowanymi stylami i strukturą.

________________________________________________________________________________________________

szablon.html
Plik HTML zawierający szablon do ręcznego wklejenia zawartości artykul.html do sekcji <body>.

