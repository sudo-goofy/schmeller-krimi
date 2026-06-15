# 🎬 Mord in der Schmellerstraße 80337

Ein satirisches Indie-Krimidinner-Erlebnis für 6 Personen, direkt im Browser spielbar. Keine App-Installation, kein Papierkram, 100% Münchner Gentrifizierungs-Wahnsinn.

![Ein Indie-Krimi // München 80337](https://img.shields.io/badge/Setting-M%C3%BCnchen_Isarvorstadt-EF476F?style=for-the-badge) ![Tech](https://img.shields.io/badge/Tech-React_|_Tailwind-118AB2?style=for-the-badge)

## 📖 Worum geht's?
München, 5. Juni 2026. Die Schmellerstraße im Schlachthofviertel erstickt in ihrer eigenen, krampfhaft inszenierten Lebensfreude. Naturwein, Lastenräder, Techno-Bässe vom Bahnwärter Thiel und sehr teure Mieten. 
Doch dann: Ein Mord. Hilde, die alte Besitzerin der *Mode Kaffeeschnaderei Mokka*, hängt plötzlich in einem blutroten Paillettenkleid tot am Kran über dem Bahnwärter Thiel.

Es gibt 6 Verdächtige. Alle haben ein Motiv. Alle haben ein dunkles Geheimnis. Jeder versucht sich in den bourgeoisen Wahnsinn zu retten. Wer war es?

## 🎭 Die Rollen

* **Claudia (65)** - Ex-BR Journalistin, "woke" und redselig.
* **Herr Taaks (71)** - Melancholischer Rentner und Kryptograph.
* **Frau Anette von Horst** - Die neurotische Eso-Host, zelebriert Aura-Reinigung.
* **Prof. Michael Hell (60er)** - Elitärer Ex-Solocellist in Rente.
* **Frau Elisabeth Hell (60er)** - Chefin einer kleinen, etablierten Immobilienfirma und berechnende Society-Gattin ohne Empathie.
* **Justus (30)** - Der Inbegriff der Gentrifizierung: Ein Lastenrad-Hipster.
* **Leo** - Taaks' mysteriöser Sohn, im Darknet zuhause.

 *(Hinweis: Leo und Taaks hängen storytechnisch zusammen. Das Spiel ist optimal für 6 Personen + 1 Person als neutrale Regie, oder einer der Spieler übernimmt die Regie auf einem Zweitgerät.)*

## 📱 Wie man spielt

Das gesamte Spiel läuft über eine einzige, lokale `index.html` Datei. Es wird keine Datenbank oder Backend benötigt!

1. Schicke die `index.html` (oder hoste sie per Github Pages / Vercel) an alle deine Gäste.
2. Jeder Spieler öffnet die Seite auf seinem **hauseigenen Smartphone**, wählt seine Rolle, gibt das Passwort ein (Tipp: Die Passwörter stehen in den Rollenbeschreibungen der `index.html`) und studiert sein **Charakterblatt**.
3. **WICHTIG:** Das Charakterblatt zeigt jedem Spieler seine **Alibi-Lüge** an (die er ab Szene 1 den anderen erzählen soll) und sein **Wahres Geheimnis**, das er um jeden Preis beschützen muss, bis das Skript etwas anderes sagt.
4. Ein zentrales Gerät (z.B. ein **Tablet oder Laptop in der Mitte des Tisches**) wird als **"🎬 Das Skript (Regie)"** gestartet.
5. Die Regie (oder die Spieler im Wechsel) klickt Szene für Szene weiter, spielt optional die passenden Lieder ab, liest die Regieanweisungen vor und wirft in Szene 3 die konkreten Beweismittel (Indizien) auf den Tisch.
6. Am Ende der 5 Szenen muss die Gruppe abstimmen: Wer wird geopfert? 

## 🛠 Tech Stack
Das Projekt ist extrem simpel und serverless aufgebaut (Single-File Application):
* **React 18** (via CDN geladen, kein Node/NPM nötig)
* **Tailwind CSS** (via CDN)
* **Babel** (via CDN, um JSX im Browser zu kompilieren)
* Schriften: *Space Grotesk* (Fließtext) & *Courier Prime* (Skript) von Google Fonts.
* Custom SVG Line-Art Icons im "Matt Blease"-Comic-Design.

Dieses Projekt läuft komplett im Client-Browser. Keine Daten verlassen die Session.

## 🪩 Ausführen
Einfach die `index.html` in einem beliebigen modernen Browser doppelklicken. Das war's.

## 🎵 Empfohlener Soundtrack (Regie-Anweisungen)
* Szene 1: Paul Kalkbrenner (Wummernder Back-Beat)
* Szene 2: "On the Nature of Daylight" von Max Richter (Dramatisches Cello)
* Szene 5: "Time" von Hans Zimmer (Epischer Orchestral-CountDown)

***

*Inspiriert von der unerträglichen Leichtigkeit des Münchner Glockenbachviertels.*