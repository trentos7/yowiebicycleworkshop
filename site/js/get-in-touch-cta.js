/**
 * Injects the shared “Get in touch” CTA from partials/get-in-touch-cta.html
 * into the element with id="get-in-touch-cta-include".
 */
(function () {
  var mount = document.getElementById("get-in-touch-cta-include");
  if (!mount) return;

  fetch("partials/get-in-touch-cta.html", { credentials: "same-origin" })
    .then(function (res) {
      if (!res.ok) throw new Error("CTA partial not found");
      return res.text();
    })
    .then(function (html) {
      var wrap = document.createElement("div");
      wrap.innerHTML = html.trim();
      var section = wrap.firstElementChild;
      if (!section) throw new Error("CTA partial empty");
      mount.replaceWith(section);
    })
    .catch(function () {
      mount.outerHTML =
        '<section class="section"><div class="container callout"><div><p class="eyebrow">Need help with your bike?</p><h2>Get in touch and we’ll get you rolling.</h2></div><div class="callout-actions"><a class="button button-sms" href="sms:+61485022101?body=Hi%20Yowie%2C%20I%E2%80%99d%20like%20help%20with%20my%20bike." aria-label="Text Yowie Bicycle Workshop">Text us</a><a class="button button-secondary" href="tel:+61485022101" aria-label="Call Yowie Bicycle Workshop">Call</a></div></div></section>';
    });
})();
