(function () {
  function replaceElasticLogo() {
    const logos = document.querySelectorAll(
      'svg[data-euiicon-type="logoElastic"]'
    );

    logos.forEach(el => {
      const img = document.createElement("img");
      img.src = "https://raw.githubusercontent.com/muhamadfaishal/RRI-Integrated-Dashboard/main/LogoRRI.svg";
      img.style.width = "140px";
      img.style.height = "auto";
      el.replaceWith(img);
    });
  }

  // Observe DOM changes (React re-render)
  const observer = new MutationObserver(replaceElasticLogo);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  replaceElasticLogo();
})();
