# Keryx Design System

Sistema per landing e pagine di progetto: **la struttura sta nei componenti, la grafica nei token**.
Ogni blocco accetta `tema` e `forma`; cambiando quei due valori lo stesso blocco cambia aspetto senza toccare il markup.

## Componenti

- **Hero** — apertura pagina: occhiello, titolo, testo, due CTA, immagine o segnaposto. `allineamento` sinistra/centro.
- **GrigliaFeature** — griglia di card testuali (`voci`), colonne automatiche o fisse.
- **NumeriChiave** — fila di numeri con etichetta, pensata per il tema scuro.
- **CtaFinale** — chiusura pagina, layout affiancato o centrato.

## Temi

`chiaro` (default), `scuro`, `oro`, `sky`. Forme: `morbida` (16px), `squadrata` (0px).

## Template

- **Landing** (`templates/landing`) — Hero + GrigliaFeature + NumeriChiave + CtaFinale già assemblati.

## Aggiungere un blocco

1. `componenti/blocchi/<Nome>.jsx` + `<Nome>.d.ts` (interface + `export declare function`).
2. Usa le classi base di `styles.css` (`k-blocco`, `k-wrap`, `k-titolo`, `k-card`, `k-btn`) e i token `--k-*`; niente colori scritti a mano.
3. Accetta `tema` e `forma` e mettili come `data-tema` / `data-forma` sulla `<section>` radice.
4. Aggiungilo alla card `componenti/blocchi/blocchi.html` e a questo elenco.
