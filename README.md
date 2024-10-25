## Link do produkcyjnej aplikacji

Aplikacja jest dostępna pod adresem: [https://4pza3nbah9.eu-central-1.awsapprunner.com](https://4pza3nbah9.eu-central-1.awsapprunner.com)

## CI/CD

Proces CI/CD jest skonfigurowany w taki sposób, że przy każdym mergu do gałęzi `master` uruchamiane są testy, a następnie aplikacja jest automatycznie wdrażana na AWS.

## Jak uruchomić wersję deweloperską

1. **Sklonuj repozytorium**
2. **Stwórz i uzupełnij plik .env**

```bash
NEXT_PUBLIC_POKEMON_API_URL=
NEXT_PUBLIC_TIME_API_URL=
```

3. **Zainstaluj zależności**

```bash
npm install
```

4. **Uruchom aplikację w trybie deweloperskim**

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem http://localhost:3000.

## Testy

Aby uruchomić testy, wykonaj:

```bash
npm run test
```
