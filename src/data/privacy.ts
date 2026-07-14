const externalLinks = {
  privacyPolicy: "https://policies.google.com/privacy?hl=en",
  ump: "https://developers.google.com/admob/ump",
  play: "https://play.google.com/about/",
  billing: "https://developer.android.com/google/play/billing",
} as const;

type Segment = { type: "text"; value: string } | { type: "link"; value: string; href: string };

const link = (value: string, href: string): Segment => ({ type: "link", value, href });
const text = (value: string): Segment => ({ type: "text", value });

export const privacyContent = {
  en: {
    title: "Nurtly Privacy Policy",
    description: "Nurtly privacy policy, version 1.1, effective 13 July 2026.",
    pageLabel: "Privacy policy",
    versionLabel: "Version:",
    updatedLabel: "Effective date:",
    updatedValue: "13 July 2026",
    intro:
      "This Privacy Policy explains how Nurtly handles data in the current MVP. Nurtly is designed for adults who are parents or caregivers, keeps core journal data on the device, and relies only on the services described below.",
    sections: [
      { heading: "1. Title, version, and effective date", body: { kind: "text", value: "Version 1.1. Effective date: 13 July 2026." } },
      {
        heading: "2. About the operator",
        body: {
          kind: "rich",
          segments: [
            text("The operator of Nurtly is GRAY LION ŁUKASZ CHMIEL, Poland, NIP 6272618384, REGON 243494838. Contact: "),
            link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"),
            text("."),
          ],
        },
      },
      {
        heading: "3. Intended audience",
        body: {
          kind: "text",
          value:
            "Nurtly is intended for adults aged 18 or older, especially parents and caregivers. It is not child-directed and is not intended for independent use by children.",
        },
      },
      {
        heading: "4. Local data and storage",
        body: {
          kind: "text",
          value:
            "Nurtly has no user account, no sign-in, no backend, no cloud sync, and no Nurtly cloud-backup service. Journal entries, saved language, and local reviewer-access state are stored on the device. Journal content is not sent to Gray Lion, ads, billing, analytics, crash reporting, or a Nurtly backend.",
        },
      },
      {
        heading: "5. Android backup and device transfer",
        body: {
          kind: "text",
          value:
            "The Android app is configured to exclude Nurtly-owned local app data from Android cloud backup and device-to-device transfer. Nurtly does not intentionally copy Journal data between devices.",
        },
      },
      {
        heading: "6. Journal deletion",
        body: {
          kind: "text",
          value:
            "Deleting a Journal entry removes it from the active app state and from local storage. Older soft-deleted entries are cleaned up during a compatibility migration when the app loads.",
        },
      },
      {
        heading: "7. Delete all local data",
        body: {
          kind: "text",
          value:
            "Delete all local data removes all Journal entries, saved language, and local reviewer-access state. It does not remove Google Play purchase history, Google Play subscriptions, Premium entitlement, Google UMP consent state, or Google-managed advertising and billing records. Privacy choices remain available through the separate privacy-choices flow where required. When part of the deletion fails, the app reports partial completion and allows a safe retry.",
        },
      },
      {
        heading: "8. Ads and UMP",
        body: {
          kind: "rich",
          segments: [
            text("The MVP uses banner ads only, Premium remains ad-free, and ads are requested only after the UMP flow confirms that ads may be requested. Privacy choices can be reopened where UMP requires it. Nurtly does not use Journal content for advertising. Official information: "),
            link("Google UMP", externalLinks.ump),
            text("."),
          ],
        },
      },
      {
        heading: "9. Advertising identifiers",
        body: {
          kind: "text",
          value:
            "Google Mobile Ads may process advertising or device identifiers according to the final Android build, device settings, consent state, and Google's terms. Nurtly does not use Journal content for advertising.",
        },
      },
      {
        heading: "10. Purchases and subscriptions",
        body: {
          kind: "rich",
          segments: [
            text("Google Play Billing handles purchases and subscriptions. Google processes transaction data. Gray Lion does not receive full payment card details. Official information: "),
            link("Google Play Billing", externalLinks.billing),
            text(" and "),
            link("Google Play", externalLinks.play),
            text("."),
          ],
        },
      },
      {
        heading: "11. Analytics and crash reporting",
        body: {
          kind: "text",
          value:
            "Nurtly does not use a product analytics SDK or a crash-reporting SDK. The app does not send Journal telemetry or Journal content to analytics services.",
        },
      },
      {
        heading: "12. External services",
        body: {
          kind: "rich",
          segments: [
            text("Nurtly currently relies on Google Privacy Policy, Google Mobile Ads, Google UMP, Google Play, and Google Play Billing. Official Google Privacy Policy: "),
            link("Google Privacy Policy", externalLinks.privacyPolicy),
            text("."),
          ],
        },
      },
      {
        heading: "13. Retention",
        body: {
          kind: "text",
          value:
            "Journal data and saved local preferences remain on the device until the user deletes them or uninstalls the app. Nurtly does not provide cloud backup or cloud sync.",
        },
      },
      {
        heading: "14. Changes to this policy",
        body: {
          kind: "text",
          value:
            "We may update this policy when the app or service setup changes. The version and effective date above show the current release.",
        },
      },
      {
        heading: "15. Contact",
        body: {
          kind: "rich",
          segments: [
            text("For privacy questions, contact "),
            link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"),
            text("."),
          ],
        },
      },
    ],
  },
  pl: {
    title: "Polityka prywatności Nurtly",
    description: "Polityka prywatności Nurtly, wersja 1.1, obowiązuje od 13 lipca 2026 r.",
    pageLabel: "Polityka prywatności",
    versionLabel: "Wersja:",
    updatedLabel: "Data wejścia w życie:",
    updatedValue: "13 lipca 2026 r.",
    intro:
      "Ta Polityka prywatności wyjaśnia, jak Nurtly przetwarza dane w obecnym MVP. Nurtly jest przeznaczone dla dorosłych rodziców i opiekunów, przechowuje podstawowe dane Dziennika na urządzeniu i korzysta wyłącznie z usług opisanych poniżej.",
    sections: [
      {
        heading: "1. Tytuł, wersja i data wejścia w życie",
        body: { kind: "text", value: "Wersja 1.1. Data wejścia w życie: 13 lipca 2026 r." },
      },
      {
        heading: "2. Informacje o operatorze",
        body: {
          kind: "rich",
          segments: [
            text("Operatorem Nurtly jest GRAY LION ŁUKASZ CHMIEL, Polska, NIP 6272618384, REGON 243494838. Kontakt: "),
            link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"),
            text("."),
          ],
        },
      },
      {
        heading: "3. Odbiorcy aplikacji",
        body: {
          kind: "text",
          value:
            "Nurtly jest przeznaczone dla osób dorosłych w wieku 18 lat lub starszych, zwłaszcza rodziców i opiekunów. Nie jest kierowane do dzieci i nie jest przeznaczone do samodzielnego używania przez dzieci.",
        },
      },
      {
        heading: "4. Dane lokalne i przechowywanie",
        body: {
          kind: "text",
          value:
            "Nurtly nie ma konta użytkownika, logowania, backendu, synchronizacji chmurowej ani usługi kopii zapasowej w chmurze Nurtly. Wpisy Dziennika, zapisany język i lokalny stan dostępu recenzenckiego są przechowywane na urządzeniu. Treść Dziennika nie jest wysyłana do Gray Lion, reklam, płatności, analityki, raportowania awarii ani backendu Nurtly.",
        },
      },
      {
        heading: "5. Kopia zapasowa Android i transfer między urządzeniami",
        body: {
          kind: "text",
          value:
            "Aplikacja Android jest skonfigurowana tak, aby wykluczać lokalne dane należące do Nurtly z kopii zapasowej Android w chmurze oraz z transferu między urządzeniami. Nurtly nie kopiuje celowo danych Dziennika między urządzeniami.",
        },
      },
      {
        heading: "6. Usuwanie pojedynczego wpisu Dziennika",
        body: {
          kind: "text",
          value:
            "Usunięcie wpisu Dziennika usuwa go z aktywnego stanu aplikacji i z lokalnego przechowywania. Starsze usunięte wpisy są porządkowane podczas migracji zgodności przy uruchomieniu aplikacji.",
        },
      },
      {
        heading: "7. Usuń wszystkie dane lokalne",
        body: {
          kind: "text",
          value:
            "Opcja Usuń wszystkie dane lokalne usuwa wszystkie wpisy Dziennika, zapisany język i lokalny stan dostępu recenzenckiego. Nie usuwa historii zakupów Google Play, subskrypcji Google Play, uprawnień Premium, stanu zgody Google UMP ani danych reklamowych i rozliczeniowych zarządzanych przez Google. Ustawienia prywatności pozostają dostępne w osobnym przepływie ustawień prywatności, gdy jest to wymagane. Gdy część operacji się nie powiedzie, aplikacja zgłasza częściowe zakończenie i pozwala bezpiecznie ponowić próbę.",
        },
      },
      {
        heading: "8. Reklamy i UMP",
        body: {
          kind: "rich",
          segments: [
            text("MVP używa wyłącznie banerów reklamowych, Premium pozostaje bez reklam, a reklamy są żądane dopiero po tym, jak przepływ UMP potwierdzi możliwość ich pobrania. Ustawienia prywatności reklam można ponownie otworzyć tam, gdzie wymaga tego UMP. Nurtly nie używa treści Dziennika do reklam. Oficjalne informacje: "),
            link("Google UMP", externalLinks.ump),
            text("."),
          ],
        },
      },
      {
        heading: "9. Identyfikatory reklamowe",
        body: {
          kind: "text",
          value:
            "Google Mobile Ads może przetwarzać identyfikatory reklamowe lub identyfikatory urządzenia zgodnie z finalną kompilacją Android, ustawieniami urządzenia, stanem zgody i zasadami Google. Nurtly nie używa treści Dziennika do reklam.",
        },
      },
      {
        heading: "10. Zakupy i subskrypcje",
        body: {
          kind: "rich",
          segments: [
            text("Google Play Billing obsługuje zakupy i subskrypcje. Google przetwarza dane transakcji. Gray Lion nie otrzymuje pełnych danych karty płatniczej. Oficjalne informacje: "),
            link("Google Play Billing", externalLinks.billing),
            text(" i "),
            link("Google Play", externalLinks.play),
            text("."),
          ],
        },
      },
      {
        heading: "11. Analityka i raportowanie awarii",
        body: {
          kind: "text",
          value:
            "Nurtly nie używa SDK analityki produktu ani SDK raportowania awarii. Aplikacja nie wysyła telemetryki Dziennika ani treści Dziennika do usług analitycznych.",
        },
      },
      {
        heading: "12. Usługi zewnętrzne",
        body: {
          kind: "rich",
          segments: [
            text("Nurtly korzysta obecnie z Google Privacy Policy, Google Mobile Ads, Google UMP, Google Play i Google Play Billing. Oficjalna polityka prywatności Google: "),
            link("Google Privacy Policy", externalLinks.privacyPolicy),
            text("."),
          ],
        },
      },
      {
        heading: "13. Retencja",
        body: {
          kind: "text",
          value:
            "Dane Dziennika i zapisane lokalne preferencje pozostają na urządzeniu, dopóki użytkownik ich nie usunie albo nie odinstaluje aplikacji. Nurtly nie zapewnia kopii zapasowej w chmurze ani synchronizacji chmurowej.",
        },
      },
      {
        heading: "14. Zmiany polityki",
        body: {
          kind: "text",
          value: "Możemy aktualizować tę politykę, gdy zmienia się aplikacja lub konfiguracja usług. Wersja i data wejścia w życie wskazują bieżące wydanie.",
        },
      },
      {
        heading: "15. Kontakt",
        body: {
          kind: "rich",
          segments: [
            text("W sprawach prywatności napisz na "),
            link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"),
            text("."),
          ],
        },
      },
    ],
  },
} as const;
