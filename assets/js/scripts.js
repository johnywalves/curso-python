window.__setPreferredTheme = function (newTheme) {
  window.__theme = newTheme;
  preferredTheme = newTheme;
  document.body.className = newTheme;

  const primsTheme = newTheme === "dark" ? "-tomorrow" : "";
  const primsFile = `/assets/css/prism${primsTheme}.css`;
  document.getElementById("prismsheet").href = primsFile;

  window && localStorage && localStorage.setItem("theme", newTheme);

  /*document.querySelector("body").style.transition =
    "color 0.25s, background-color 0.25s";*/
};

window.__setPreferredTheme(
  localStorage ? localStorage.getItem("theme") : "light"
);

document.getElementById("astro").addEventListener("click", function () {
  window.__setPreferredTheme(
    localStorage.getItem("theme") === "dark" ? "light" : "dark"
  );
});
