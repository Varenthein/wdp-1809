# WDP Projekt Zespołowy

## Opis projektu

DO UZUPEŁNIENIA

## Demo

[Demo projektu jest dostępne pod tym linkiem ](https://wizardly-shaw-41deb1.netlify.com/)

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

Dodatkowym skryptem jest komenda:

- `format`: formatuje pliki HTML,CSS i JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

Projekt tworzony w oparciu o standardy lintera ES Lint w jego standardowych ustawieniach.

W projekcie jest wykorzystany preprocesor SASS(SCSS) dla większej czytelności styli. Poprawia to też jakość i szybkość pracy przy projekcie.

Kolejne deklaracje w SASS są oddzielone linią przerwy dla zwiększenia czytelności.

Kolejne sekcje strony są w oddzielnych modułach (folder partials).

Przy dodaniu kolejnej sekcji do strony dbamy o kolejność liczbową sekcji:

- jeśli sekcja , którą chcemy dodać jest pomiędzy partialami 20 i 30 (zajrzyj do folderu `partials`), nasza sekcja powinna mieć numer 25.

Style dla poszczególnych sekcji zostały rozbite na oddzielne pliki scss.

Dla powtarzających się styli zostały użyte zmienne zawarte w pliku `_variables.scss`

W przypadku nadpisania styli Bootstrapa została utworzona dodatkowa klasa i w niej zostały zadeklarowane zmiany wyglądu komponentu.

W zależności od sekcji wykorzystane zostały GRID (Bootstrap) i Flexbox.

Do obsługi karuzel wykorzystana jest biblioteka Flickity.

Staramy się stosować do zasady DRY.

Stosujemy metodologię BEM.

Dla każdego taska tworzymy nowy branch

- wyjątek może stanowić sytuacja kiedy bierzemy pod siebie taski dotyczące jednej sekcji (zadania z zakresu HTML, CSS, JS), wtedy wszystkie taski robimy na jednym branchu.

Branch ma mieć taką samą nazwę jak task, który sobie przydzieliliśmy.

## Rozwiązywanie problemów

W przypadku pracy na Windowsie w edytorze kodu odpalenie task runnera może nie działać. W takim wypadku należy odpalić task runner w Git Bashu.

Jeśli modyfikujemy którąś z sekcji z folderu `partials` (pliki html), po zapisaniu zmian możliwe ,że będzie konieczne dokonanie zmian w pliku `index.html` (dodanie spacji lub wolnej linii).

Jeśli do ostylowania elementu (np div) stosujemy `background-image: url();` edytor wymusi na nas użycie ściezki `../../images/folder/zdjęcie.png`, żeby ta ścieżka działała usuwamy jedno z `../`.
