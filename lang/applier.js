/* THIS JAVASCRIPT CODE MAY NOT WORK FOR OLDER BROWSERS */
(() => {
  if (typeof supportedLangs === "undefined" || typeof localizationMaps === "undefined") {
    return alert("dictionary.js is not loaded! Try refresh your browser");
  }
  let lang = localStorage.getItem("lang") ?? "id";

  if (!supportedLangs.includes(lang)) {
    lang = "id";
  }

  Object.entries(localizationMaps[lang]).forEach(([k, v]) => {
    let a = document.getElementById(k);
    if (a) a.textContent = v;
  });
})();
