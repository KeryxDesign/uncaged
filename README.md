# UNCAGED

Gioco di memoria per chitarra sul sistema CAGED. Si accende un arpeggio sul manico, tu lo ripeti: toccando i tasti, oppure suonandolo davvero — il microfono riconosce le note.

**Live:** apri `index.html` in un browser. Nessuna build, nessuna dipendenza da installare.

## Cosa c'è dentro

| File | Cosa fa |
|---|---|
| `index.html` | l'app: mazzo introduttivo, profilo, gioco, risultati |
| `support.js` | il runtime che interpreta i template dell'HTML |
| `_ds/…/` | il design system (stili e componenti condivisi) |

## Come si prova in locale

```bash
python3 -m http.server 8000
```

Poi apri `http://localhost:8000/`.

Serve un server: il microfono e il salvataggio non funzionano aprendo il file con doppio clic (`file://`).

## Schermi

L'app riempie sempre la finestra e si ridimensiona da sola.

- **Telefono in verticale** — profilo e menu funzionano; entrando in partita chiede di girare il telefono, perché il manico ha bisogno della larghezza.
- **Telefono in orizzontale, tablet** — a tutto schermo.
- **Computer** — a tutto schermo, con un tetto all'ingrandimento così su un monitor grande il testo non diventa un cartellone.

## Dati

Tutto resta nel browser di chi gioca (`localStorage`): punteggio, giorni di fila, lingua, impostazioni. Niente server, niente account, niente da mandare fuori. I risultati si esportano in un file di testo dal profilo.

## Lingue

Italiano e inglese, si cambia dal profilo.

## Licenza

Tutti i diritti riservati — Keryx Design.
