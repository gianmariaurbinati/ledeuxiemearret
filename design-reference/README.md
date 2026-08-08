# Handoff: Le deuxième arrêt — Sito web

## Overview
Sito per "Le deuxième arrêt", servizio di rivalutazione di film di valore falliti in distribuzione. Il pacchetto contiene la Hero + Home page, la pagina "Passeggeri" (in attesa/a bordo) e le due schede film ("Comandante" e la relativa recensione approfondita "Comandante Film").

## About the Design Files
I file HTML in questo pacchetto (`*.dc.html`) sono **riferimenti di design** creati come prototipi ad alta fedeltà — non sono codice di produzione da copiare direttamente. Il compito è **ricreare questi design nell'ambiente di destinazione** del progetto Astro (repo `pellicola`, deploy GitHub→Vercel), usando componenti `.astro`, gli stessi asset e la stessa struttura di cartelle già impostata (`src/components/Hero.astro`, `src/pages/index.astro`, `src/styles/global.css`, ecc.).

## Fidelity
**Alta fedeltà (hifi)**: colori, font, spaziature e testo definitivi. Il layout, la tipografia e le interazioni vanno riprodotte pixel per pixel.

## Screens / Views

### 1. Hero + Home (`Le deuxieme arret.dc.html`)
- **Hero**: full-screen, video Manet ("Le Chemin de fer") in loop, senza audio, velocità ridotta del 50%. Titolo "Le deuxième arrêt" in **Parisienne** (Google Fonts), corpo ~72px desktop. Sottotitolo "Everyone deserves a second chance." in Cormorant Garamond, letter-spacing 4px. Cartellino data/ora in alto a destra, sfondo celeste opaco (`rgba(74,144,196,0.4)`), bordo `rgba(200,232,255,0.35)`, border-radius 8px. Link "Menu" centrato in basso.
- **Sezione Mission** (tra hero e citazione, gap 48px): testo centrato, Cormorant Garamond, tre paragrafi corpo intermedio (18-26px, #2b2620) — "Ogni anno in Italia si finiscono film che non vedrà nessuno." / "Non film sbagliati. Film compiuti, pagati, premiati dentro sale da duecento posti — e poi fermi." / "Noi torniamo a guardarli. E facciamo in modo che li guardino gli altri."; sotto, staccata, riga grigio-chiaro corsivo più piccola (14-17px, #7a7266): "Per gli autori e i produttori che hanno un'opera ferma."
- **Home**: sfondo Monet pastello (`img/monet-bg.jpg`). Striscia di fusione tra hero e home (gradiente di sfumatura, non troppo marcata). Citazione centrata: *"La pittura è silenziosa, il cinema ha una voce che viene dal colore e dalla luce."* — Michelangelo Antonioni, font Cormorant corsivo, `text-wrap:pretty`, max-width 900px, centrata, va a capo se necessario. Sotto: rubriche (Il Treno · Consigliati · News · Autori Emergenti · Passeggeri) orizzontali su desktop/tablet, verticali su mobile.

### 2. Rubriche (`Rubriche.dc.html`) — NUOVA
- Sfondo Monet al 15% di opacità + gradiente scuro sopra.
- Header: titolo "Rubriche" (Parisienne, 48-84px, #f7f1e4), sottotitolo "Film compiuti che meritano una seconda lettura" (Cormorant Garamond corsivo, 16-22px, #d4af37).
- Grid responsiva `repeat(auto-fit, minmax(280px,1fr))`, gap 28px. Ogni card: hero 240px con border 1px rgba(212,175,55,0.3), tag in alto a destra "[REGISTA, ANNO]" (pill, 10px, #d4af37), titolo film (Cinzel 18-26px #f7f1e4), descrizione 14px #b8a88a, CTA "Leggi la rubrica →" 12px #d4af37.
- Card attuali: **Comandante** (Enrico Maisto, 2014) LIVE → `Comandante Film.dc.html`, descrizione "Il giudice e il militante. Un'amicizia attraverso gli anni di piombo."; **Arianna** (Arianna Lavagna, 2015) placeholder "In preparazione"; **Kripton** (Francesco Munzi, 2024) placeholder "In preparazione".

### 3. Passeggeri (`Passeggeri.dc.html`)
- Sfondo dipinto a tutta pagina. Due testi sullo stesso rigo orizzontale, centro pagina: "Passeggeri in Attesa" (sinistra) e "Passeggeri a Bordo" (destra) — allineati dinamicamente sullo stesso rigo di base sia a riposo che dopo il click (misurazione runtime della posizione, non un offset fisso).
- Sopra "Passeggeri in Attesa": icona pennello cliccabile (da `img/pennello-click.png`), ruota 180° al click.
- Click su "Passeggeri in Attesa" rivela sotto, allineato a sinistra, Cormorant Garamond, colore #241f19, corpo 17-24px: "Prossimamente" (corsivo), poi "Una rubrica per i registi che hanno un'opera ferma." e "Scriviamo di film che il mercato ha dimenticato."

### 4. Comandante (`Comandante.dc.html`)
- Sfondo immagine fornita dall'utente (officina/comandante), testo "Comandante" rimosso.
- Titolo "Enrico Maisto" (Cormorant Garamond 32-52px, #f7f3e8) con eyebrow "Biografia"; corpo 19-23px, line-height 1.8, colonna max 980px; ritratto in float right (max 260px) con mask sfumata in basso.
- Cartellino in basso a destra: "Vai al film 'Comandante'" con freccia rossa lampeggiante (ciclo 3.2s), link a `Comandante Film.dc.html`.

### 5. Comandante Film — scheda recensione (`Comandante Film.dc.html`)
Redesign in stile editoriale "Century Eye" (design system del progetto):
- Sfondo: gradiente viola scuro (`--purple` → `--purple-deep` → `--purple-darkest`).
- Card crema (`--card-bg: #fbfaf7`, border-radius 20px, shadow) con foto in testata (Ninfee di Monet), barra d'accento bordeaux→oro→viola, bollino rotondo "Autori Italiani" (non un giudizio/recensione con stelle — rimosso).
- Badge "Documentario" (bordeaux), stamp "Enrico Maisto · 2014".
- Titolo "Comandante" in Cinzel (font display del design system).
- Citazione con filo dorato a sinistra: "Un profilo dignitoso per l'esordio al lungometraggio."
- Corpo articolo: testo integrale della recensione (fedele all'originale, incluse le righe su budget e disponibilità), font Cormorant Garamond, tre cartelline fotografiche stile polaroid intervallate al testo (mosca sul muro, sentiero Parco delle Groane, corteo MAGA).
- Due cartellini rettangolari uguali (180×64px) orizzontali ed equidistanti — CG Collection e Prime Video — contornati da cornice fosforescente multicolore animata; testo "ISCRIVITI" al centro che lampeggia.
- Bio finale del regista in corsivo.

## Interactions & Behavior
- Hero video: loop senza scatti (ultimo frame = primo frame), autoplay, muted, playbackRate 0.5.
- Passeggeri: toggle click-based con misurazione DOM runtime per l'allineamento testo (vedi logica React nel file).
- Animazioni CSS: blink su freccia CTA (`cta-blink`, 3.2s), blink su testo "Iscriviti" (`subscribe-blink`, 1.6s), cornice neon (`neon-shift` + `neon-pulse`).

## Design Tokens
- **Font titolo (script)**: Parisienne (Google Fonts)
- **Font menu/corpo**: Cormorant Garamond
- **Font display editoriale (scheda Comandante Film)**: Cinzel
- **Colori base sito**: crema/nero caldo su sfondi pittorici (Monet)
- **Palette editoriale (Comandante Film, da design system Century Eye)**: `--gold:#d4af37`, `--gold-hover:#edcd63`, `--bordeaux:#6d1f2f`, `--purple:#4a2b7a`, `--purple-deep:#2c1a4d`, `--purple-darkest:#1a0f30`, `--cream:#e2d5be`, `--card-bg:#fbfaf7`, `--text-body:#4f4d47`, `--text-meta:#9a978f`

## Assets
- `img/monet-bg.jpg` — sfondo Monet Home (placeholder, sostituire con HD pulito senza testo)
- `img/comandante-film-bg.jpg` — Ninfee, Claude Monet 1915 (Wikimedia Commons)
- `img/cg-collection-logo.png`, `img/prime-video-badge.png` — loghi/badge sponsor, sfondo rimosso
- `img/mosca-sul-muro.jpg`, `img/parco-groane-illustrazione.png`, `img/maga-illustrazione.png` — foto cartelline scheda Comandante Film
- Video hero (`hero_desktop.mp4`, `hero_mobile.mp4`) — ancora PLACEHOLDER, da rigenerare con Higgsfield (bambina con pizza di pellicola in mano, crop meno stretto)

## Files
- `Le deuxieme arret.dc.html` — Hero + Home
- `Passeggeri.dc.html` — pagina categorie Passeggeri
- `Rubriche.dc.html` — indice rubriche con grid di card
- `Sito Completo.dc.html` — pagina di panoramica con anteprime iframe di tutte le pagine (solo strumento interno, non da portare in produzione)
- `Comandante.dc.html` — scheda film con bio regista
- `Comandante Film.dc.html` — scheda recensione completa
- Cartella `img/` con tutti gli asset referenziati sopra
