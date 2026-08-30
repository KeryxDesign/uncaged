/* @ds-bundle: {"format":4,"namespace":"KeryxDesignSystem_1e4ff7","components":[{"name":"CtaFinale","sourcePath":"componenti/blocchi/CtaFinale.jsx"},{"name":"GrigliaFeature","sourcePath":"componenti/blocchi/GrigliaFeature.jsx"},{"name":"Hero","sourcePath":"componenti/blocchi/Hero.jsx"},{"name":"NumeriChiave","sourcePath":"componenti/blocchi/NumeriChiave.jsx"}],"sourceHashes":{"componenti/blocchi/CtaFinale.jsx":"f4dcef88a0c9","componenti/blocchi/GrigliaFeature.jsx":"501ededb7645","componenti/blocchi/Hero.jsx":"298ed1290a03","componenti/blocchi/NumeriChiave.jsx":"dbe30f8b641a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KeryxDesignSystem_1e4ff7 = window.KeryxDesignSystem_1e4ff7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// componenti/blocchi/CtaFinale.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CtaFinale({
  tema = "oro",
  forma = "",
  titolo = "Titolo della chiamata finale",
  testo = "Una riga che dice cosa succede dopo il clic.",
  cta = "Manda il materiale",
  ctaHref = "#",
  immagine = "",
  didascaliaSlot = "immagine CTA",
  layout = "affiancato",
  ...rest
}) {
  const affiancato = layout === "affiancato";
  const testoBlocco = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "k-titolo",
    style: {
      fontSize: "clamp(28px,3vw,40px)"
    }
  }, titolo), testo && /*#__PURE__*/React.createElement("p", {
    className: "k-sottotitolo"
  }, testo), /*#__PURE__*/React.createElement("div", {
    className: "k-azioni",
    style: affiancato ? undefined : {
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "k-btn k-btn--primario",
    href: ctaHref
  }, cta)));
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "k-blocco",
    "data-tema": tema,
    "data-forma": forma || undefined
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "k-wrap",
    style: affiancato ? {
      display: "grid",
      gap: "48px",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      alignItems: "center"
    } : {
      textAlign: "center"
    }
  }, testoBlocco, affiancato && (immagine ? /*#__PURE__*/React.createElement("img", {
    className: "k-media",
    src: immagine,
    alt: "",
    style: {
      minHeight: "260px"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "k-slot",
    style: {
      minHeight: "260px"
    }
  }, didascaliaSlot))));
}
Object.assign(__ds_scope, { CtaFinale });
})(); } catch (e) { __ds_ns.__errors.push({ path: "componenti/blocchi/CtaFinale.jsx", error: String((e && e.message) || e) }); }

// componenti/blocchi/GrigliaFeature.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GrigliaFeature({
  tema = "chiaro",
  forma = "",
  occhiello = "",
  titolo = "Cosa include",
  testo = "",
  voci = [{
    titolo: "Prima voce",
    testo: "Una riga che spiega il beneficio."
  }, {
    titolo: "Seconda voce",
    testo: "Una riga che spiega il beneficio."
  }, {
    titolo: "Terza voce",
    testo: "Una riga che spiega il beneficio."
  }],
  colonne = 0,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "k-blocco",
    "data-tema": tema,
    "data-forma": forma || undefined
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "k-wrap"
  }, occhiello && /*#__PURE__*/React.createElement("div", {
    className: "k-occhiello"
  }, occhiello), /*#__PURE__*/React.createElement("h2", {
    className: "k-titolo",
    style: {
      fontSize: "clamp(28px,3vw,40px)"
    }
  }, titolo), testo && /*#__PURE__*/React.createElement("p", {
    className: "k-sottotitolo"
  }, testo), /*#__PURE__*/React.createElement("div", {
    className: "k-griglia",
    style: colonne ? {
      gridTemplateColumns: `repeat(${colonne},minmax(0,1fr))`
    } : undefined
  }, voci.map((v, i) => /*#__PURE__*/React.createElement("div", {
    className: "k-card",
    key: i
  }, /*#__PURE__*/React.createElement("h3", null, v.titolo), /*#__PURE__*/React.createElement("p", null, v.testo))))));
}
Object.assign(__ds_scope, { GrigliaFeature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "componenti/blocchi/GrigliaFeature.jsx", error: String((e && e.message) || e) }); }

// componenti/blocchi/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero({
  tema = "chiaro",
  forma = "",
  occhiello = "",
  titolo = "Titolo del blocco hero",
  testo = "",
  ctaPrimaria = "",
  ctaPrimariaHref = "#",
  ctaSecondaria = "",
  ctaSecondariaHref = "#",
  immagine = "",
  didascaliaSlot = "immagine hero 16:10",
  allineamento = "sinistra",
  ...rest
}) {
  const centrato = allineamento === "centro";
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "k-blocco",
    "data-tema": tema,
    "data-forma": forma || undefined
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "k-wrap",
    style: centrato ? {
      textAlign: "center"
    } : {
      display: "grid",
      gap: "48px",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, occhiello && /*#__PURE__*/React.createElement("div", {
    className: "k-occhiello"
  }, occhiello), /*#__PURE__*/React.createElement("h1", {
    className: "k-titolo"
  }, titolo), testo && /*#__PURE__*/React.createElement("p", {
    className: "k-sottotitolo",
    style: centrato ? {
      marginInline: "auto"
    } : undefined
  }, testo), (ctaPrimaria || ctaSecondaria) && /*#__PURE__*/React.createElement("div", {
    className: "k-azioni",
    style: centrato ? {
      justifyContent: "center"
    } : undefined
  }, ctaPrimaria && /*#__PURE__*/React.createElement("a", {
    className: "k-btn k-btn--primario",
    href: ctaPrimariaHref
  }, ctaPrimaria), ctaSecondaria && /*#__PURE__*/React.createElement("a", {
    className: "k-btn k-btn--secondario",
    href: ctaSecondariaHref
  }, ctaSecondaria))), !centrato && (immagine ? /*#__PURE__*/React.createElement("img", {
    className: "k-media",
    src: immagine,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "k-slot"
  }, didascaliaSlot))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "componenti/blocchi/Hero.jsx", error: String((e && e.message) || e) }); }

// componenti/blocchi/NumeriChiave.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NumeriChiave({
  tema = "scuro",
  forma = "",
  titolo = "",
  voci = [{
    numero: "14",
    etichetta: "progetti consegnati"
  }, {
    numero: "3 sett.",
    etichetta: "tempo medio"
  }, {
    numero: "98%",
    etichetta: "rinnovi"
  }],
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "k-blocco",
    "data-tema": tema,
    "data-forma": forma || undefined
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "k-wrap"
  }, titolo && /*#__PURE__*/React.createElement("h2", {
    className: "k-titolo",
    style: {
      fontSize: "clamp(28px,3vw,40px)",
      textAlign: "center"
    }
  }, titolo), /*#__PURE__*/React.createElement("div", {
    className: "k-griglia",
    style: {
      marginTop: titolo ? "48px" : 0,
      gridTemplateColumns: `repeat(auto-fit,minmax(200px,1fr))`
    }
  }, voci.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--k-font-display)",
      fontWeight: 800,
      fontSize: "clamp(44px,5vw,68px)",
      lineHeight: 1,
      color: "var(--k-accento)"
    }
  }, v.numero), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "10px",
      fontSize: "16px",
      color: "var(--k-inchiostro-tenue)"
    }
  }, v.etichetta))))));
}
Object.assign(__ds_scope, { NumeriChiave });
})(); } catch (e) { __ds_ns.__errors.push({ path: "componenti/blocchi/NumeriChiave.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CtaFinale = __ds_scope.CtaFinale;

__ds_ns.GrigliaFeature = __ds_scope.GrigliaFeature;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.NumeriChiave = __ds_scope.NumeriChiave;

})();
