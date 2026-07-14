type Segment = { type: "text"; value: string } | { type: "link"; value: string; href: string };
const link = (value: string, href: string): Segment => ({ type: "link", value, href });
const text = (value: string): Segment => ({ type: "text", value });

export const supportContent = {
  en: {
    title: "Nurtly Support",
    description: "Support for local-data deletion, privacy choices, and Google Play issues.",
    pageLabel: "Support",
    versionLabel: "Version:",
    updatedLabel: "Effective date:",
    updatedValue: "13 July 2026",
    intro: {
      kind: "rich",
      segments: [text("For help, write to "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(" and include the details below.")],
    },
    sections: [
      {
        heading: "What to include",
        body: {
          kind: "text",
          value: "Please send your device model, Android version, app version, a clear description of the problem, and the steps that lead to the issue.",
        },
      },
      {
        heading: "Do not send sensitive Journal content",
        body: {
          kind: "text",
          value: "Please do not include sensitive Journal entries in support messages. We do not need the full content of your Journal to help with most issues.",
        },
      },
      {
        heading: "Delete all local data",
        body: {
          kind: "text",
          value:
            "Delete all local data removes Journal entries, saved language, and local reviewer-access state. It does not change Google Play purchase history, Premium entitlement, or Google UMP consent state. If the action reports partial completion, you can safely try it again later.",
        },
      },
      {
        heading: "Deleted Journal data",
        body: {
          kind: "text",
          value: "Support cannot recover Journal entries that were deleted locally, and the app does not keep a separate support copy of that content.",
        },
      },
      {
        heading: "Privacy choices",
        body: {
          kind: "text",
          value: "Privacy choices are separate from local deletion. If the app shows the privacy choices action, you can reopen it from Privacy & Data where UMP requires that flow.",
        },
      },
      {
        heading: "Payments and subscriptions",
        body: {
          kind: "text",
          value: "For payment or subscription issues, please check Google Play. Purchase history and subscription records are managed by Google Play.",
        },
      },
      {
        heading: "Response time",
        body: {
          kind: "text",
          value: "We usually reply within a few business days, depending on the queue and the complexity of the issue.",
        },
      },
      {
        heading: "Contact",
        body: { kind: "rich", segments: [text("Email "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] },
      },
    ],
  },
  pl: {
    title: "Wsparcie Nurtly",
    description: "Wsparcie dla usuwania danych lokalnych, ustawień prywatności i problemów z Google Play.",
    pageLabel: "Wsparcie",
    versionLabel: "Wersja:",
    updatedLabel: "Data wejścia w życie:",
    updatedValue: "13 lipca 2026 r.",
    intro: {
      kind: "rich",
      segments: [text("W sprawach pomocy napisz na "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(" i podaj poniższe informacje.")],
    },
    sections: [
      {
        heading: "Co podać",
        body: {
          kind: "text",
          value: "Podaj model urządzenia, wersję Androida, wersję aplikacji, jasny opis problemu oraz kroki prowadzące do usterki.",
        },
      },
      {
        heading: "Nie wysyłaj wrażliwych treści Dziennika",
        body: {
          kind: "text",
          value: "Nie wysyłaj w wiadomościach wsparcia wrażliwych wpisów Dziennika. W większości przypadków nie potrzebujemy pełnej treści Dziennika, aby pomóc.",
        },
      },
      {
        heading: "Usuń wszystkie dane lokalne",
        body: {
          kind: "text",
          value:
            "Opcja Usuń wszystkie dane lokalne usuwa wpisy Dziennika, zapisany język i lokalny stan dostępu recenzenckiego. Nie zmienia historii zakupów Google Play, uprawnień Premium ani stanu zgody Google UMP. Jeżeli operacja zakończy się częściowo, można ją bezpiecznie uruchomić ponownie później.",
        },
      },
      {
        heading: "Usunięte dane Dziennika",
        body: {
          kind: "text",
          value: "Wsparcie nie może odzyskać lokalnie usuniętych wpisów Dziennika, a aplikacja nie przechowuje osobnej kopii wsparcia takiej treści.",
        },
      },
      {
        heading: "Ustawienia prywatności",
        body: {
          kind: "text",
          value: "Ustawienia prywatności są oddzielne od usuwania danych lokalnych. Jeżeli aplikacja pokazuje akcję ustawień prywatności, można ją ponownie otworzyć z ekranu Prywatność i dane, gdy wymaga tego UMP.",
        },
      },
      {
        heading: "Płatności i subskrypcje",
        body: {
          kind: "text",
          value: "W przypadku problemów z płatnościami lub subskrypcją sprawdź Google Play. Historia zakupów i rekordy subskrypcji są zarządzane przez Google Play.",
        },
      },
      {
        heading: "Czas odpowiedzi",
        body: {
          kind: "text",
          value: "Zwykle odpowiadamy w ciągu kilku dni roboczych, zależnie od kolejki i złożoności zgłoszenia.",
        },
      },
      {
        heading: "Kontakt",
        body: { kind: "rich", segments: [text("Napisz na "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] },
      },
    ],
  },
} as const;
