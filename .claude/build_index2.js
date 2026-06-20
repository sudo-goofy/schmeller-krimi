const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
let s = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

function spliceBetween(src, startMarker, endMarker, replacement) {
  const i = src.indexOf(startMarker);
  if (i < 0) throw new Error('start not found: ' + startMarker);
  const j = src.indexOf(endMarker, i + startMarker.length);
  if (j < 0) throw new Error('end not found after start: ' + startMarker);
  const end = j + endMarker.length;
  return src.slice(0, i) + replacement + src.slice(end);
}

// --- small text swaps ---
s = s.replace('<title>Mord in der Schmellerstraße 80337</title>', '<title>Mord im Schrebergarten</title>');
s = s.replace('Mord in der<br/>Schmellerstr.', 'Mord im<br/>Schrebergarten');
s = s.replace('Ein Indie-Krimi // München 80337', 'Ein Garten-Krimi // K.G.V. Goldene Scholle');

// --- CHARACTERS ---
const newChars = `const CHARACTERS = [
            {
                id: 'brigitte',
                name: 'Brigitte Knoll',
                role: 'Witwe & Festausschuss-Chefin, 66',
                color: 'bg-blease-pink',
                password: 'streusel',
                public: 'Die perfekte Vereinsgattin. Organisiert seit 40 Jahren das Sommerfest, bäckt den legendären Streuselkuchen und lächelt, bis die Kiefermuskeln zittern. Eine Säule der Goldenen Scholle.',
                alibi: 'Deine Alibi-Lüge: "Ich stand den ganzen Abend in der Vereinsheim-Küche und habe 200 Stück Streuselkuchen vorbereitet. Ich war keine Sekunde draußen!"',
                secret: 'Vierzig Jahre unter Reinhards Paragrafen-Terror. Heute Nacht sollte Schluss sein: Im Geräteschuppen steht ein gepackter Koffer, im Morgengrauen wolltest du ihn endlich verlassen. Du hast ihn nicht getötet – aber deine letzten Worte an ihn waren der Wunsch, er möge "einfach vom Erdboden verschwinden". Vor Wochen fandst du das Bündel Festkassen-Geld in seiner Schublade und hast geschwiegen. Jetzt ist er weg. Du fühlst dich frei. Und das macht dir furchtbar Angst.',
                goal: 'Überspiele deine Erleichterung mit der Routine der perfekten Gastgeberin. Versteck den Koffer. Lenke auf die Unruhestifter Jonas und Kevin.'
            },
            {
                id: 'detlef',
                name: 'Detlef Wurm',
                role: 'Schriftführer & ewiger Zweiter, 58',
                color: 'bg-blease-blue',
                password: 'paragraf',
                public: 'Der Hüter der Gartenordnung. Misst Heckenhöhen mit dem Zollstock auf den Millimeter und führt Protokoll über jede Zuwiderhandlung. Wartet seit zwanzig Jahren auf den Vorsitz.',
                alibi: 'Deine Alibi-Lüge: "Ich saß im Vereinsheim und habe das Protokoll der Mitgliederversammlung nachgetragen. Ordnungsgemäß. Wie immer."',
                secret: 'Zwanzig Jahre lang warst du sein loyaler Zweiter. Heute Abend, betrunken, lachte Reinhard dich vor allen aus: Den Vorsitz bekämst du "nie im Leben", er gäbe ihn lieber dem Influencer-Bengel. Etwas in dir zerriss. Du bist nicht zum Komposter gegangen – du bist zu seinem heiß geliebten Oldtimer-Hollandrad gestürmt und hast es vor Wut zerkratzt. Eine erbärmliche Tat. Und nun hast du Todesangst, dass man sie für Mord hält. Jemand stand am Komposthaufen. Aber du sahst nur das Fahrrad.',
                goal: 'Beharre darauf, dass "die Ordnung eingehalten werden muss", selbst jetzt. Verberge das zerkratzte Fahrrad. Lenke ab.'
            },
            {
                id: 'jonas',
                name: 'Jonas "Sunny"',
                role: 'Permakultur-Guerilla-Gärtner, 32',
                color: 'bg-blease-green',
                password: 'kompost',
                public: 'Pflanzt "wild", lehnt die Gartenordnung als "Spießer-Diktatur" ab, betreibt ein Kompostklo und sammelt mehr Abmahnungen als Ernte. Riecht nach Patschuli und Mist.',
                alibi: 'Deine Alibi-Lüge: "Ich saß bei einer Mondphasen-Meditation in meiner Laube, völlig offline, im Einklang mit dem Boden. Ich habe nichts gehört."',
                secret: 'Hinter deiner Laube wächst etwas streng gegen die Gartenordnung – kein Rauschgift, sondern eine illegale geschützte Wildblumenwiese und deine verbotene Saatgut-Tauschbörse. Du hast Panik, dass alle das Schlimmste denken. In der Nacht schlichst du zum Komposthaufen – dem besten der Kolonie –, um dir im Dunkeln Kompost zu "befreien". Da sahst du Reinhard im Laternenlicht mit jemandem streiten. Du warst zu bekifft und zu feige, um zu erkennen, mit wem.',
                goal: 'Wettere gegen den Paragrafen-Terror des Vereins. Beschütze deine Geheim-Wiese. Du bist Zeuge – aber rede dich um Kopf und Kragen.'
            },
            {
                id: 'hannelore',
                name: 'Hannelore Specht',
                role: 'Rosenzüchterin & Wettbewerbs-Legende, 71',
                color: 'bg-blease-yellow',
                password: 'rose',
                public: 'Die Grande Dame der Beete. Neunfache Gewinnerin des Wettbewerbs "Schönster Garten". Lächelt zuckersüß und kämpft mit der Gnadenlosigkeit einer Generälin um die Goldene Kelle.',
                alibi: 'Deine Alibi-Lüge: "Ich habe bis zur Dämmerung meine Rosen ausgeputzt und lag um neun im Bett. Mein Schönheitsschlaf ist heilig."',
                secret: 'Letztes Jahr, da bist du dir sicher, hat Reinhard deine Rosen sabotiert, damit sein Kumpel gewinnt. Diesen Sommer hast du dich gerächt: Heimlich hast du seine prämierten Tomaten mit genau jenem Unkrautvernichter besprüht, der jetzt am Tatort liegt. Pflanzenmord, kein Menschenmord! Aber du bist außer dir vor Angst, dass man dir das Gift anhängt. Das wäre das Ende deiner makellosen Legende.',
                goal: 'Gewinne die Goldene Kelle um jeden Preis. Verberge die vergifteten Tomaten. Lenke den Verdacht auf den Mann mit dem Geld.'
            },
            {
                id: 'kevin',
                name: 'Kevin Pflug',
                role: 'Urban-Gardening-Influencer, 29',
                color: 'bg-gray-200',
                password: 'reichweite',
                public: 'Kaufte die Parzelle als Instagram-Kulisse. Filmt "authentisches Landleben" mit Ringlicht und Drohne und will aus der Kolonie eine Content-Marke machen. Trägt Gummistiefel, die nie Erde sehen.',
                alibi: 'Deine Alibi-Lüge: "Ich habe in meiner Laube mit Kopfhörern ein Reel geschnitten. Voll im Flow, nichts mitbekommen."',
                secret: 'Dein "Urban-Gardening-Imperium" ist pleite – eine Fassade aus geliehenen Requisiten. Du hast einen Sponsorendeal für ein "virales Sommerfest-Reveal" angenommen, doch Reinhard verbot dir gnadenlos jeden Livestream ("kein Zirkus in meinem Verein"). Du hast trotzdem heimlich gefilmt – und dein Handy hat vielleicht etwas am Komposter eingefangen. Als der Streit eskalierte, bist du in Panik geflohen und hast dein Ringlicht zertrümmert im Gras zurückgelassen.',
                goal: 'Schütze dein bankrottes Image und dein geheimes Filmmaterial. Du bist der zweite Zeuge. Lenke auf "die Boomer".'
            },
            {
                id: 'gerd',
                name: 'Gerd Möller',
                role: 'Kassenwart & Vereins-Institution, 61',
                color: 'bg-white',
                password: 'kasse',
                public: 'Der grundsolide Kassenwart. Seit 25 Jahren verwaltet er treu jeden Cent der Vereinskasse. Unauffällig, zuverlässig, über jeden Zweifel erhaben – das stille Rückgrat der Goldenen Scholle.',
                alibi: 'Deine Alibi-Lüge: "Ich habe im Vereinsbüro allein die Festkasse gezählt. Pflichtbewusst, wie eh und je. Bezeugen kann es niemand, aber so bin ich nun mal."',
                secret: 'Du bist der MÖRDER – und es ist eine erbärmliche Tragödie. Seit Jahren zweigst du heimlich die Vereins- und Festkasse ab, um die Schulden deiner gescheiterten Koi-Karpfen-Import-Firma zu stopfen. Reinhard fand das Loch in den Büchern. Am Komposter stellte er dich, betrunken und gnadenlos: Morgen bei der Ehrung würde er alles verkünden. Du hast gefleht. Er lachte nur. In Panik stießt du ihn – er fiel gegen den gusseisernen Wanderpokal und die Betonkante des Komposters. Tot. Du wischtest den Pokal ab, risst die belastenden Seiten aus dem Kassenbuch und stopftest sie in den Kompost. Dann stelltest du einen Gartenzwerg auf, als sei er nur gestolpert.',
                goal: 'Spiele den fassungslosen, treuen Kassenwart. Lenke alle auf die offensichtlichen Unruhestifter. Was auch geschieht: Die Bücher dürfen NIEMALS geöffnet werden.'
            }
        ];`;
s = spliceBetween(s, 'const CHARACTERS = [', '\n        ];', newChars);

// --- STORY_PHASES ---
const newSP = `const STORY_PHASES = [
            {
                title: 'Szene 1: Die Idylle der Gartenordnung',
                regie_music: 'Spielt fröhliche, leicht schiefe Blasmusik / Polka (Tipp: eine schwitzende Dorf-Blaskapelle).',
                regie_act: 'Lächelt verkrampft. Prostet euch mit lauwarmer Apfelschorle zu. Ihr liebt diesen Verein. Ihr hasst einander.',
                content: 'Ein gnadenlos heißer Samstag im Juli. Der Kleingartenverein "Zur Goldenen Scholle" feiert sein Sommerfest. Wimpelketten hängen schlaff in der Hitze, Bratwurstrauch kriecht über akkurat gestutzte Hecken, und auf jedem Klapptisch liegen die Bewertungsbögen für den "Schönster-Garten-Wettbewerb".\\n\\nAm Kopf der Bierzeltgarnitur thront leer der Stuhl des 1. Vorsitzenden. Reinhard Knoll – genannt "Der Paragraf" – fehlt. Vierzig Jahre lang regierte er die Kolonie mit der Gartenordnung in der einen und dem Abmahnblock in der anderen Hand. Sein leerer Platz brummt lauter als die Blaskapelle. Die Apfelschorle wird warm. Ihr werdet nervös. Lächelt. Stellt euch vor. In eurer ganzen kleingärtnerischen Pracht.'
            },
            {
                title: 'Szene 2: Der Fund im Kompost',
                regie_music: 'Schnitt! Die Blaskapelle bricht ab. Eine einzelne, schiefe Tuba. Dann Stille.',
                regie_act: 'Erhebt euch. Geht langsam zum unsichtbaren Komposthaufen. Schlagt die Hand vor den Mund.',
                content: 'Ein Schrei vom hinteren Ende der Anlage. Brigittes Tablett mit Streuselkuchen zerschellt auf dem Plattenweg.\\n\\nDort, im prämierten Komposthaufen – dem Stolz des Vereins –, liegt er. Reinhard. Mit dem Gesicht nach unten in der dampfenden Erde, das gute Sakko über und über mit Kompost beschmiert. Daneben, umgekippt, sein eigener Lieblings-Gartenzwerg mit der Schubkarre. Und im Gras blitzt der schwere gusseiserne Wanderpokal. Detlef flüstert tonlos: "Das... das verstößt gegen mindestens vier Paragrafen." Ein kollektives Schlucken in der flirrenden Hitze.'
            },
            {
                title: 'Szene 3: Paragraf gegen Panik',
                regie_music: 'Lasst eine nervöse Geräuschkulisse aus Grillenzirpen und einer tickenden Uhr laufen.',
                regie_act: 'Werdet nervös. LEST DIE INDIZIEN LAUT VOR. Die Gartenzwerg-Masken sitzen noch – aber der Angstschweiß tropft auf die Gartenordnung.',
                content: 'Die Kirchturmuhr schlägt. Irgendwo heult schon eine Sirene. Ihr starrt euch an, und in jedem Blick liegt derselbe Abgrund aus Neid, Kränkung und jahrzehntelangem Beet-Grenzstreit.\\n\\nKonstrukte müssen her. Reihum müsst ihr nun erklären, wo ihr zwischen Einbruch der Dämmerung und dem schrecklichen Fund wart. Baut eure Alibis. Werdet kleinlich. Kläfft euch an über diesem dampfenden Komposthaufen aus Heuchelei.',
                clues: [
                    'Indiz 1: Am Komposter liegt eine umgekippte Flasche Unkrautvernichter – es stinkt beißend nach Gift.',
                    'Indiz 2: Im Beet daneben steckt eine blutverschmierte, prämierte Rosenschere.',
                    'Indiz 3: Eine Spur frisch "befreiten" Komposts führt zu einem umgestürzten Kompostklo an der hinteren Parzelle.',
                    'Indiz 4: Ein zertrümmertes Ringlicht und ein zertretener Selfie-Stick liegen im Gras.',
                    'Indiz 5: Aus dem Komposthaufen ragen hastig herausgerissene Seiten eines Kassenbuchs.'
                ]
            },
            {
                title: 'Szene 4: Wo der Rasen am tiefsten ist',
                regie_music: 'Musik aus. Nur das Summen einer einzelnen, fetten Hummel. Unangenehme Stille.',
                regie_act: 'Die Gartenzwerg-Masken fallen! Lest eure dunklen Geheimnisse vor. Zeigt, was unter dem gepflegten Rasen verscharrt liegt.',
                content: 'Der Tatort. Der Komposthaufen ist kein Stolz mehr, sondern der Seziertisch eurer kleinen Seelen. Es riecht nach Verwesung, warmer Erde und kaltem Grillfett.\\n\\nAuf dem Boden: der gusseiserne Wanderpokal, an einer Kante dunkel verklebt. Die herausgerissenen Seiten des Kassenbuchs. Der umgestürzte Gartenzwerg. Die leere Giftflasche. Die Indizien brüllen. Packt eure dunkelsten Geheimnisse auf den Gartentisch! Wer von euch hat die Idylle zerbrochen?'
            },
            {
                title: 'Szene 5: Das Standgericht der Laubenpieper',
                regie_music: 'Spielt ein treibendes, viel zu episches Orchesterstück für einen Kleingartenverein. Die Zeit läuft ab!',
                regie_act: 'Ein letztes, chaotisches Aufbäumen. Durcheinanderreden. Dann zeigt mit dem Gartenhandschuh auf den Schuldigen.',
                content: 'Crescendo. Blaulicht zuckt über die Lauben und zersägt die Wimpelketten. Die Sirenen verkünden das Ende der Idylle.\\n\\nDas Standgericht tagt. Fünf Minuten. Ihr habt noch exakt fünf Minuten, um ein Bauernopfer auf den Altar der Gartenordnung zu zerren und den eigenen, gepflegten Rasen zu retten. Wer ist das Opferlamm? Zählt auf drei – und richtet eure Gartenhandschuhe wie Anklagen auf den Mörder. Klickt dann auf die Auflösung.'
            }
        ];`;
s = spliceBetween(s, 'const STORY_PHASES = [', '\n        ];', newSP);

// --- ICONS ---
const newIcon1 = `const IconSkullCoffee = () => (
            <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-6">
                {/* Zipfelmütze */}
                <path d="M25 52 Q50 -8 75 52 Z" className="line-art" fill="#EF476F" />
                {/* Gesicht */}
                <circle cx="50" cy="60" r="20" className="line-art" fill="white" />
                {/* Tote X-Augen */}
                <path d="M39 55 l7 7 M46 55 l-7 7" className="line-art" />
                <path d="M54 55 l7 7 M61 55 l-7 7" className="line-art" />
                {/* Knollennase */}
                <circle cx="50" cy="66" r="4" fill="#EF476F" />
                {/* Bart */}
                <path d="M34 68 q16 26 32 0" className="line-art" fill="#F4F4EB" />
            </svg>
        );`;
s = spliceBetween(s, 'const IconSkullCoffee = () => (', '\n        );', newIcon1);

const newIcon2 = `const IconDiscoKran = () => (
            <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-4 bg-white rounded-full border-4 border-black p-2">
                {/* Pokal-Schale */}
                <path d="M30 26 H70 V40 A20 18 0 0 1 30 40 Z" className="line-art" />
                {/* Henkel */}
                <path d="M30 30 H18 A8 8 0 0 0 28 42" className="line-art" />
                <path d="M70 30 H82 A8 8 0 0 1 72 42" className="line-art" />
                {/* Stiel und Fuß */}
                <path d="M50 58 V72 M38 80 H62 M43 72 H57" className="line-art" />
                {/* Stern */}
                <path d="M50 31 l2.5 5 5.5 .8 -4 4 1 5.5 -5 -2.8 -5 2.8 1 -5.5 -4 -4 5.5 -.8 z" className="line-art" fill="#FFD166" stroke="none" />
            </svg>
        );`;
s = spliceBetween(s, 'const IconDiscoKran = () => (', '\n        );', newIcon2);

// --- RESOLUTION (new prose + murderer id) ---
const newRes = `const renderResolution = () => {
                const accused = CHARACTERS.find(c => c.id === accusedId);
                const correct = accusedId === 'gerd';
                let oscarId = null, oscarN = 0;
                CHARACTERS.forEach(c => { const n = oscarVotes[c.id] || 0; if (n > oscarN) { oscarN = n; oscarId = c.id; } });
                const oscar = oscarN > 0 ? CHARACTERS.find(c => c.id === oscarId) : null;

                return (
                <div className="max-w-2xl mx-auto mt-8 text-center">
                    <div className={\`border-4 border-black p-4 mb-8 shadow-[6px_6px_0_0_#0A0A0A] \${correct ? 'bg-blease-green' : 'bg-blease-pink text-white'}\`}>
                        <p className="font-black uppercase tracking-widest text-sm">{correct ? '✅ Schuldspruch' : '⚖️ Justizirrtum'}</p>
                        <p className="font-black uppercase text-3xl leading-none mt-1">{accused ? \`Angeklagt: \${accused.name}\` : 'Kein Urteil'}</p>
                    </div>

                    <h2 className="text-5xl font-black uppercase mb-8 text-blease-pink" style={{ textShadow: '4px 4px 0px #0A0A0A' }}>Das Ende der Idylle</h2>

                    <div className="blease-box bg-white p-8 text-left">
                        {correct ? (
                        <>
                        <h3 className="text-3xl font-black uppercase mb-4 border-b-4 border-black pb-2">Ihr habt ihn entlarvt.</h3>

                        <p className="text-xl font-script font-bold mb-6">
                            Der graue Mann hinter den Büchern war <span className="bg-blease-yellow px-2 border-2 border-black font-sans font-black uppercase text-2xl ml-1 shadow-[2px_2px_0_0_#0A0A0A]">Gerd!</span> Und ihr habt mit dem Gartenhandschuh auf ihn gezeigt.
                        </p>
                        <p className="font-script font-bold mb-4">
                            Es ist die banale Tragik der Vereinsmeierei. Fünfundzwanzig Jahre lang zählte Gerd treu jeden Cent – und zweigte heimlich jeden zweiten ab, um die Schulden seiner gescheiterten Koi-Karpfen-Firma zu stopfen. Als Reinhard am Komposter das Loch in den Büchern aufdeckte und mit der großen Enthüllung bei der Ehrung drohte, zerbrach Gerds einzige Währung: seine Ehrbarkeit. Ein Flehen. Ein Lachen. Ein Stoß. Und der gusseiserne Wanderpokal tat den Rest.
                        </p>
                        <p className="font-script font-bold mb-4">
                            Und dann? Die Pedanterie der Vertuschung. Mit zitternden Händen wischte er den Pokal blank, riss die belastenden Seiten aus dem Kassenbuch und vergrub sie im prämierten Kompost. Zum Schluss stellte er einen Gartenzwerg auf – als sei der eiserne Vorsitzende bloß über die eigene Idylle gestolpert. Kein kaltblütiger Killer. Nur ein kleiner Mann, dessen Bilanz nicht mehr aufging.
                        </p>
                        </>
                        ) : (
                        <>
                        <h3 className="text-3xl font-black uppercase mb-4 border-b-4 border-black pb-2">Das Bauernopfer</h3>

                        <p className="text-xl font-script font-bold mb-6">
                            Ihr habt <span className="bg-blease-pink text-white px-2 border-2 border-black font-sans font-black uppercase text-2xl ml-1 shadow-[2px_2px_0_0_#0A0A0A]">{accused ? accused.name : '—'}</span> der Gartenordnung zum Fraß vorgeworfen.
                        </p>
                        <p className="font-script font-bold mb-4">
                            {accused ? accused.name : 'Diese Person'}s Geheimnis war kleinlich, peinlich, voller Schuld – aber es war <strong>kein Mord</strong>. Ihr habt euch ein bequemes Bauernopfer gesucht, um den eigenen, gepflegten Rasen rein zu halten. Genau davor warnte das Standgericht. Die Kolonie frisst ihre Sonderlinge zuerst.
                        </p>
                        <p className="font-script font-bold mb-4">
                            Denn während ihr mit dem Gartenhandschuh auf eine bequeme Lüge zeigtet, zählte der wahre Täter längst wieder seelenruhig die Kasse: <strong>Gerd, der Kassenwart.</strong> Reinhard hatte die veruntreuten Tausende in den Büchern entdeckt; am Komposter stieß Gerd ihn in Panik gegen den gusseisernen Wanderpokal, vergrub die Kassenbuch-Seiten im Kompost und stellte einen Gartenzwerg als Stolperfalle auf. Und jetzt? Unbehelligt. Die Bücher bleiben geschlossen, und nächste Woche zählt er wieder treu jeden Cent.
                        </p>
                        </>
                        )}

                        <div className="bg-[#0A0A0A] text-white p-4 mt-8 border-4 border-blease-pink shadow-[6px_6px_0_0_#EF476F]">
                            <p className="font-black uppercase text-center text-blease-yellow mb-2 tracking-widest">Director's Cut (Alternativ, ohne Gerd):</p>
                            <p className="font-script font-bold text-sm text-center">
                                Es war niemand. Reinhard, sturzbetrunken vom selbstgebrannten Mirabellenschnaps, stolperte über seinen eigenen Lieblings-Gartenzwerg und stürzte in den Kompost. Die Gartenordnung kennt keinen Paragrafen gegen die Schwerkraft. Doch ein Verein braucht einen Schuldigen – denn einen Unfall kann man nicht abmahnen.
                            </p>
                        </div>
                    </div>

                    {oscar && (
                        <div className="blease-box bg-blease-yellow p-4 mt-8 inline-block transform -rotate-1">
                            <p className="font-black uppercase text-sm">🏆 Goldene Kelle – Bester Lügner</p>
                            <p className="font-black uppercase text-3xl">{oscar.name}</p>
                        </div>
                    )}

                    <button onClick={() => { setView('home'); setGmPhase(0); setVotes({}); setOscarVotes({}); setAccusedId(null); }} className="blease-btn bg-blease-blue text-white mt-12 px-10 py-5 text-xl block mx-auto">Applaus & Abspann</button>
                </div>
                );
            };`;
s = spliceBetween(s, 'const renderResolution = () => {', '\n            };', newRes);

// --- rename the award everywhere (film clapper -> golden trowel) ---
s = s.split('Goldene Klappe').join('Goldene Kelle');

fs.writeFileSync(path.join(ROOT, 'index2.html'), s);
console.log('index2.html written, ' + s.length + ' bytes');
