const externalLinks = {
  privacyPolicy: "https://policies.google.com/privacy?hl=en",
  mobileAds: "https://developers.google.com/admob",
  ump: "https://developers.google.com/admob/ump",
  play: "https://play.google.com/about/",
  billing: "https://developer.android.com/google/play/billing",
} as const;

type Segment = { type: "text"; value: string } | { type: "link"; value: string; href: string };
type RichText = { kind: "rich"; segments: Segment[] } | { kind: "text"; value: string };

const link = (value: string, href: string): Segment => ({ type: "link", value, href });
const text = (value: string): Segment => ({ type: "text", value });

export const privacyContent = {
  en: {
    title: "Nurtly Privacy Policy",
    description: "Nurtly privacy policy for English users.",
    pageLabel: "Privacy policy",
    intro:
      "This Privacy Policy explains how Nurtly handles data in the current MVP. Nurtly is designed to keep journal content on the device and to rely only on the services described below.",
    sections: [
      { heading: "1. Title, version, and effective date", body: { kind: "text", value: "Version 1.0. Effective date: 25 June 2026." } },
      { heading: "2. About the operator", body: { kind: "rich", segments: [text("The operator of Nurtly is GRAY LION ŁUKASZ CHMIEL, Poland, NIP 6272618384, REGON 243494838. Contact: "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] } },
      { heading: "3. Scope", body: { kind: "text", value: "This policy applies to the Nurtly mobile app and the data handling described here. It does not cover services outside the app or terms controlled by third parties." } },
      { heading: "4. Intended audience", body: { kind: "text", value: "Nurtly is intended for adult parents and caregivers. It is not intended for independent use by children." } },
      { heading: "5. Child-related data and limits", body: { kind: "text", value: "Nurtly does not require a child account, a child name, or an exact date of birth. Age ranges shown in activity content are content metadata, not a child profile. The app is not a medical product and does not provide diagnosis, treatment, or guaranteed developmental outcomes." } },
      { heading: "6. Data stored locally", body: { kind: "text", value: "Nurtly has no user account, no sign-in, no registration, and no backend. The journal is stored locally on the device. Journal data may include notes, sleep start and end times, feeding type, optional feeding quantity, diaper type, event timestamp, and an optional internal child identifier. The app language is also stored locally." } },
      { heading: "7. Journal and entry types", body: { kind: "text", value: "Journal entries are created and read on the device to operate the app. They are not sent to Gray Lion." } },
      { heading: "8. No account and no cloud sync", body: { kind: "text", value: "Nurtly does not offer cloud sync and does not maintain an online Nurtly account system." } },
      { heading: "9. Google Mobile Ads", body: { kind: "rich", segments: [text("The free version may show passive Google Mobile Ads banners. Premium does not show ads. Official information: "), link("Google Mobile Ads", externalLinks.mobileAds), text(".")] } },
      { heading: "10. Google UMP and privacy choices", body: { kind: "rich", segments: [text("Google UMP is used where required to manage privacy choices. Ads are not initialized or loaded before the consent flow confirms that ads may be requested. If the app exposes it in Privacy & Data, users can reopen privacy choices. Official information: "), link("Google UMP", externalLinks.ump), text(".")] } },
      { heading: "11. Advertising ID", body: { kind: "text", value: "The merged Android manifest includes com.google.android.gms.permission.AD_ID. This permission comes from Google Play services ads-lite." } },
      { heading: "12. Personalized and non-personalized ads", body: { kind: "text", value: "Google and its partners may process advertising or device identifiers, approximate location inferred from IP, ad interactions, diagnostic data, and consent signals. Personalized ads are not guaranteed for every user and depend on consent, region, configuration, and Google's policies. Limited or non-personalized ads and anti-fraud or security operations may rely on other bases used by the provider, depending on context." } },
      { heading: "13. Purchases and subscriptions", body: { kind: "rich", segments: [text("Google Play Billing handles purchases and subscriptions. Google processes transaction data. Gray Lion does not receive full payment card details. Official information: "), link("Google Play Billing", externalLinks.billing), text(" and "), link("Google Play", externalLinks.play), text(".")] } },
      { heading: "14. Analytics and crash reporting", body: { kind: "text", value: "Nurtly does not use an analytics SDK or a crash-reporting SDK. The journal is not used for analytics, and Nurtly does not collect product telemetry in the current MVP." } },
      { heading: "15. External services", body: { kind: "rich", segments: [text("Nurtly currently relies on Google Privacy Policy, Google Mobile Ads, Google UMP, Google Play, and Google Play Billing. Official Google Privacy Policy: "), link("Google Privacy Policy", externalLinks.privacyPolicy), text(".")] } },
      { heading: "16. Purposes and bases", body: { kind: "text", value: "Local journal processing happens on the device at the user's request so the app can function. Gray Lion does not receive journal content. Billing is used to complete requested purchases or subscriptions and to meet legal obligations. Personalized advertising relies on consent where required. Limited or non-personalized ads and anti-fraud or security processing may rely on other bases used by the provider." } },
      { heading: "17. Data recipients", body: { kind: "text", value: "Recipients may include Google and its service providers for ads, privacy choices, and billing. Gray Lion is the operator, but it does not receive journal content from the app." } },
      { heading: "18. Retention", body: { kind: "text", value: "Journal data and safe local preferences remain on the device until the user deletes them or uninstalls the app, subject to Android backup and restore behavior outside Nurtly's control." } },
      { heading: "19. Deleting data", body: { kind: "text", value: "The app includes Delete all local data, which removes journal entries and safe local preferences. It does not remove Google Play purchase history or subscriptions." } },
      { heading: "20. Security of local storage", body: { kind: "text", value: "Nurtly uses local storage only for the current MVP. Because data stays on the device, users should protect their device with Android security features." } },
      { heading: "21. Android backup and restore", body: { kind: "text", value: "Uninstalling the app usually removes local data, but Android backup or restore mechanisms may preserve some device data outside Nurtly's control." } },
      { heading: "22. International processing by third parties", body: { kind: "text", value: "Google and other providers may process data internationally according to their own infrastructure and privacy terms." } },
      { heading: "23. User rights", body: { kind: "rich", segments: [text("Depending on applicable law, users may have rights to access, correct, delete, restrict, or object to processing, and to withdraw consent where consent is the basis. Requests about Nurtly should be sent to "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] } },
      { heading: "24. Children's privacy", body: { kind: "text", value: "Nurtly is intended for adult parents and caregivers. It is not intended for independent use by children. The app does not ask a child to create an account and does not require the child's name or exact date of birth." } },
      { heading: "25. Changes to this policy", body: { kind: "text", value: "We may update this policy when the app or service setup changes. The version and effective date above show the current release." } },
      { heading: "26. Contact", body: { kind: "rich", segments: [text("For privacy questions, contact "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] } },
    ],
  },
  pl: {
    title: "Polityka prywatności Nurtly",
    description: "Polityka prywatności Nurtly dla użytkowników w języku polskim.",
    pageLabel: "Polityka prywatności",
    intro:
      "Ta Polityka prywatności wyjaśnia, jak Nurtly przetwarza dane w obecnym MVP. Nurtly jest zaprojektowane tak, aby Dziennik pozostawał na urządzeniu i aby opierać się wyłącznie na usługach opisanych poniżej.",
    sections: [
      { heading: "1. Tytuł, wersja i data wejścia w życie", body: { kind: "text", value: "Wersja 1.0. Data wejścia w życie: 25 czerwca 2026 r." } },
      { heading: "2. Informacje o operatorze", body: { kind: "rich", segments: [text("Operatorem Nurtly jest GRAY LION ŁUKASZ CHMIEL, Polska, NIP 6272618384, REGON 243494838. Kontakt: "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] } },
      { heading: "3. Zakres polityki", body: { kind: "text", value: "Niniejsza polityka dotyczy aplikacji mobilnej Nurtly oraz opisanego tutaj przetwarzania danych. Nie obejmuje usług poza aplikacją ani warunków kontrolowanych przez podmioty trzecie." } },
      { heading: "4. Odbiorcy aplikacji", body: { kind: "text", value: "Nurtly jest przeznaczone dla dorosłych rodziców i opiekunów. Nie jest przeznaczone do samodzielnego używania przez dzieci." } },
      { heading: "5. Dane związane z dzieckiem i ograniczenia", body: { kind: "text", value: "Nurtly nie wymaga konta dziecka, imienia dziecka ani dokładnej daty urodzenia. Zakresy wiekowe w treści aktywności są metadanymi treści, a nie profilem dziecka. Aplikacja nie jest produktem medycznym i nie zapewnia diagnozy, leczenia ani gwarantowanych efektów rozwojowych." } },
      { heading: "6. Dane przechowywane lokalnie", body: { kind: "text", value: "Nurtly nie ma konta użytkownika, logowania, rejestracji ani backendu. Dziennik jest przechowywany lokalnie na urządzeniu. Dane Dziennika mogą obejmować notatki, czas rozpoczęcia i zakończenia snu, typ karmienia, opcjonalną ilość karmienia, typ pieluchy, datę i godzinę zdarzenia oraz opcjonalny wewnętrzny identyfikator dziecka. Język aplikacji jest także przechowywany lokalnie." } },
      { heading: "7. Dziennik i typy wpisów", body: { kind: "text", value: "Wpisy Dziennika są tworzone i odczytywane na urządzeniu w celu działania aplikacji. Nie są przesyłane do Gray Lion." } },
      { heading: "8. Brak konta i synchronizacji chmurowej", body: { kind: "text", value: "Nurtly nie oferuje synchronizacji chmurowej ani systemu kont online Nurtly." } },
      { heading: "9. Reklamy Google Mobile Ads", body: { kind: "rich", segments: [text("Darmowa wersja może wyświetlać pasywne banery Google Mobile Ads. Premium nie pokazuje reklam. Oficjalne informacje: "), link("Google Mobile Ads", externalLinks.mobileAds), text(".")] } },
      { heading: "10. Google UMP i ustawienia prywatności reklam", body: { kind: "rich", segments: [text("Google UMP służy do obsługi ustawień prywatności reklam tam, gdzie jest to wymagane. Reklamy nie są inicjalizowane ani ładowane przed potwierdzeniem przez mechanizm zgody, że mogą być żądane. Jeżeli opcja jest dostępna w Prywatność i dane, użytkownik może ponownie otworzyć ustawienia prywatności reklam. Oficjalne informacje: "), link("Google UMP", externalLinks.ump), text(".")] } },
      { heading: "11. Advertising ID", body: { kind: "text", value: "Scalony manifest Android zawiera com.google.android.gms.permission.AD_ID. Uprawnienie pochodzi z Google Play services ads-lite." } },
      { heading: "12. Reklamy personalizowane i niepersonalizowane", body: { kind: "text", value: "Google i partnerzy mogą przetwarzać identyfikatory reklamowe lub urządzenia, przybliżoną lokalizację wywnioskowaną z IP, interakcje z reklamami, dane diagnostyczne oraz sygnały zgody. Reklamy personalizowane nie są gwarantowane każdemu użytkownikowi i zależą od zgody, regionu, konfiguracji oraz zasad Google. Reklamy ograniczone lub niepersonalizowane oraz operacje antyfraudowe lub bezpieczeństwa mogą opierać się na innych podstawach stosowanych przez dostawcę, zależnie od kontekstu." } },
      { heading: "13. Zakupy i subskrypcje", body: { kind: "rich", segments: [text("Google Play Billing obsługuje zakupy i subskrypcje. Google przetwarza dane transakcji. Gray Lion nie otrzymuje pełnych danych karty płatniczej. Oficjalne informacje: "), link("Google Play Billing", externalLinks.billing), text(" i "), link("Google Play", externalLinks.play), text(".")] } },
      { heading: "14. Analityka i raportowanie awarii", body: { kind: "text", value: "Nurtly nie używa SDK analityki ani SDK raportowania awarii. Dziennik nie służy do analityki, a Nurtly nie zbiera telemetryki produktowej w obecnym MVP." } },
      { heading: "15. Usługi zewnętrzne", body: { kind: "rich", segments: [text("Nurtly korzysta obecnie z Google Privacy Policy, Google Mobile Ads, Google UMP, Google Play i Google Play Billing. Oficjalna polityka prywatności Google: "), link("Google Privacy Policy", externalLinks.privacyPolicy), text(".")] } },
      { heading: "16. Cele i podstawy przetwarzania", body: { kind: "text", value: "Lokalne przetwarzanie Dziennika odbywa się na urządzeniu na żądanie użytkownika, aby aplikacja mogła działać. Gray Lion nie otrzymuje treści Dziennika. Obsługa płatności służy realizacji żądanych zakupów lub subskrypcji oraz obowiązków prawnych. Reklamy personalizowane opierają się na zgodzie tam, gdzie jest wymagana. Reklamy ograniczone lub niepersonalizowane oraz przetwarzanie antyfraudowe i bezpieczeństwa mogą opierać się na innych podstawach stosowanych przez dostawcę." } },
      { heading: "17. Odbiorcy danych", body: { kind: "text", value: "Odbiorcami mogą być Google i jego dostawcy usług dla reklam, ustawień prywatności reklam i obsługi płatności. Gray Lion jest operatorem, ale nie otrzymuje treści Dziennika z aplikacji." } },
      { heading: "18. Okres przechowywania", body: { kind: "text", value: "Dane Dziennika i bezpieczne lokalne preferencje pozostają na urządzeniu, dopóki użytkownik ich nie usunie albo nie odinstaluje aplikacji, z zastrzeżeniem mechanizmów kopii zapasowej i przywracania Androida poza kontrolą Nurtly." } },
      { heading: "19. Usuwanie danych", body: { kind: "text", value: "Aplikacja zawiera opcję Usuń wszystkie dane lokalne, która usuwa wpisy Dziennika i bezpieczne lokalne preferencje. Nie usuwa historii zakupów Google Play ani subskrypcji." } },
      { heading: "20. Bezpieczeństwo lokalnego przechowywania", body: { kind: "text", value: "Nurtly w obecnym MVP korzysta wyłącznie z lokalnego przechowywania. Ponieważ dane pozostają na urządzeniu, użytkownik powinien chronić urządzenie przy użyciu zabezpieczeń Androida." } },
      { heading: "21. Kopia zapasowa i przywracanie Android", body: { kind: "text", value: "Odinstalowanie aplikacji zwykle usuwa dane lokalne, ale mechanizmy kopii zapasowej i przywracania Androida mogą zachować część danych urządzenia poza kontrolą Nurtly." } },
      { heading: "22. Przetwarzanie międzynarodowe przez dostawców zewnętrznych", body: { kind: "text", value: "Google i inni dostawcy mogą przetwarzać dane międzynarodowo zgodnie z własną infrastrukturą i zasadami prywatności." } },
      { heading: "23. Prawa użytkownika", body: { kind: "rich", segments: [text("W zależności od prawa użytkownik może mieć prawo do dostępu, sprostowania, usunięcia, ograniczenia lub sprzeciwu wobec przetwarzania oraz do wycofania zgody tam, gdzie zgoda stanowi podstawę. Prośby dotyczące Nurtly należy kierować na "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] } },
      { heading: "24. Prywatność dzieci", body: { kind: "text", value: "Nurtly jest przeznaczone dla dorosłych rodziców i opiekunów. Nie jest przeznaczone do samodzielnego używania przez dzieci. Aplikacja nie prosi dziecka o założenie konta i nie wymaga imienia dziecka ani dokładnej daty urodzenia." } },
      { heading: "25. Zmiany polityki", body: { kind: "text", value: "Możemy aktualizować tę politykę, gdy zmienia się aplikacja lub konfiguracja usług. Wersja i data wejścia w życie wskazują bieżące wydanie." } },
      { heading: "26. Kontakt", body: { kind: "rich", segments: [text("W sprawach prywatności napisz na "), link("nurtly@graylion.pl", "mailto:nurtly@graylion.pl"), text(".")] } },
    ],
  },
} as const;
