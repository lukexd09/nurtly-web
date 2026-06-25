type Segment = { type: "text"; value: string } | { type: "link"; value: string; href: string };
type RichText = { kind: "rich"; segments: Segment[] } | { kind: "text"; value: string };
const link = (value: string, href: string): Segment => ({ type: "link", value, href });
const text = (value: string): Segment => ({ type: "text", value });

export const supportContent = {
  en: {
    title: "Nurtly Support",
    description: "Support information for Nurtly.",
    pageLabel: "Support",
    versionLabel: "Version:",
    updatedLabel: "Effective date:",
    updatedValue: "25 June 2026",
    intro: { kind: "rich", segments: [text("For help, write to "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(" and include the details below.")] },
    sections: [
      { heading: "What to include", body: { kind: "text", value: "Please send your device model, Android version, app version, a clear description of the problem, and the steps that lead to the bug." } },
      { heading: "Do not send sensitive journal content", body: { kind: "text", value: "Please do not include sensitive journal entries in support messages. We do not need the full content of your journal to help with most issues." } },
      { heading: "Basic troubleshooting", body: { kind: "text", value: "Try restarting the app, updating the app, restarting the device, and checking your internet connection for ads or payments." } },
      { heading: "Payments and subscriptions", body: { kind: "text", value: "For payment or subscription issues, please check Google Play. Purchase history is managed by Google Play." } },
      { heading: "Where to find privacy controls", body: { kind: "text", value: "Open Privacy & Data in the app to review privacy choices or use Delete all local data. If the option is shown, Privacy choices can be reopened from the Privacy & Data screen." } },
      { heading: "Deleted journal data", body: { kind: "text", value: "Support cannot recover journal data that was deleted locally." } },
      { heading: "Response time", body: { kind: "text", value: "We usually reply within a few business days, depending on the queue and the complexity of the issue." } },
      { heading: "Contact", body: { kind: "rich", segments: [text("Email "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] } },
    ],
  },
  pl: {
    title: "Wsparcie Nurtly",
    description: "Informacje wsparcia dla Nurtly.",
    pageLabel: "Wsparcie",
    versionLabel: "Wersja:",
    updatedLabel: "Data wejścia w życie:",
    updatedValue: "25 czerwca 2026 r.",
    intro: { kind: "rich", segments: [text("W sprawach pomocy napisz na "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(" i podaj poniższe informacje.")] },
    sections: [
      { heading: "Co podać", body: { kind: "text", value: "Podaj model urządzenia, wersję Androida, wersję aplikacji, jasny opis problemu oraz kroki prowadzące do błędu." } },
      { heading: "Nie wysyłaj wrażliwych treści Dziennika", body: { kind: "text", value: "Nie wysyłaj w wiadomościach wsparcia wrażliwych wpisów Dziennika. W większości przypadków nie potrzebujemy pełnej treści Dziennika, aby pomóc." } },
      { heading: "Podstawowe kroki diagnostyczne", body: { kind: "text", value: "Spróbuj ponownie uruchomić aplikację, zaktualizować aplikację, zrestartować urządzenie i sprawdzić połączenie internetowe dla reklam lub płatności." } },
      { heading: "Płatności i subskrypcje", body: { kind: "text", value: "W przypadku problemów z płatnościami lub subskrypcją sprawdź Google Play. Historia zakupów jest zarządzana przez Google Play." } },
      { heading: "Gdzie znaleźć ustawienia prywatności", body: { kind: "text", value: "Otwórz Prywatność i dane w aplikacji, aby przejrzeć ustawienia prywatności reklam lub użyj Usuń wszystkie dane lokalne. Jeżeli opcja jest dostępna, ustawienia prywatności reklam można ponownie otworzyć z ekranu Prywatność i dane." } },
      { heading: "Usunięte dane Dziennika", body: { kind: "text", value: "Wsparcie nie może odzyskać lokalnie usuniętych danych Dziennika." } },
      { heading: "Czas odpowiedzi", body: { kind: "text", value: "Zwykle odpowiadamy w ciągu kilku dni roboczych, zależnie od kolejki i złożoności zgłoszenia." } },
      { heading: "Kontakt", body: { kind: "rich", segments: [text("Napisz na "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] } },
    ],
  },
} as const;
