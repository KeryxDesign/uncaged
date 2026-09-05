#!/bin/bash
# Dice se il repo e il progetto Claude Design sono la stessa cosa.
#
# Il file di Claude Design NON si scarica da qui: si legge dentro una sessione,
# con list_files e read_file del suo MCP, e si salva in un file. Questo script
# riceve quel file e da' il verdetto.
#
#   bash sync/verifica.sh <file-scaricato-da-claude-design>
#
# Senza argomento fa solo la meta' del controllo: verifica che il repo sia
# ancora la ricostruzione registrata.

set -u
cd "$(dirname "$0")/.." || exit 1
S=sync/stato.json
leggi(){ python3 -c "import json,sys;print(json.load(open('$S'))['$1'])"; }

ATTESO_DESIGN=$(leggi design_sha256)
ATTESO_REPO=$(leggi repo_sha256)
ORA_REPO=$(shasum -a 256 index.html | cut -d' ' -f1)

echo "atteso design : $ATTESO_DESIGN"
echo "atteso repo   : $ATTESO_REPO"
echo "repo adesso   : $ORA_REPO"

REPO_MOSSO=0
[ "$ORA_REPO" != "$ATTESO_REPO" ] && REPO_MOSSO=1

if [ $# -lt 1 ]; then
  [ $REPO_MOSSO -eq 1 ] && { echo; echo "REPO AVANTI - index.html e' cambiato dopo l'ultimo allineamento."; echo "Le modifiche vanno riportate nella patch, o dentro Claude Design."; exit 2; }
  echo; echo "REPO FERMO all'ultimo allineamento. Il lato Claude Design non e' stato controllato."; exit 0
fi

D="$1"
[ -f "$D" ] || { echo "file non trovato: $D"; exit 1; }
ORA_DESIGN=$(shasum -a 256 "$D" | cut -d' ' -f1)
echo "design adesso : $ORA_DESIGN"
DESIGN_MOSSO=0
[ "$ORA_DESIGN" != "$ATTESO_DESIGN" ] && DESIGN_MOSSO=1

echo
if [ $DESIGN_MOSSO -eq 0 ] && [ $REPO_MOSSO -eq 0 ]; then
  echo "ALLINEATI - stai lavorando sulla stessa cosa."; exit 0
fi
if [ $DESIGN_MOSSO -eq 1 ] && [ $REPO_MOSSO -eq 1 ]; then
  echo "BIFORCATI - si sono mossi tutti e due. FERMARSI e decidere quale vince."; exit 3
fi
if [ $REPO_MOSSO -eq 1 ]; then
  echo "REPO AVANTI - il repo ha modifiche che in Claude Design non ci sono."; exit 2
fi

# solo il design si e' mosso: si prova a ricostruire il repo da lui
echo "DESIGN AVANTI - provo a ricostruire il repo dal file nuovo."
T=$(mktemp); cp "$D" "$T"
if patch -s "$T" < sync/riparazioni-mobile.patch 2>/dev/null; then
  echo "Le riparazioni mobile si applicano ancora. Nuovo index.html pronto in: $T"
  echo "Controllalo, poi copialo su index.html e aggiorna sync/stato.json."
  exit 2
fi
rm -f "$T" "$T".rej "$T".orig 2>/dev/null
echo "⛔ Le riparazioni mobile NON si applicano piu': il design ha toccato le stesse righe."
echo "Si riapplicano a mano, una per una, guardando sync/riparazioni-mobile.patch."
exit 3
