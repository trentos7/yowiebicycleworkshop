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
        '<section class="section"><div class="container callout"><div><p class="eyebrow">Need help with your bike?</p><h2>Get in touch and we’ll get you rolling.</h2></div><div class="callout-actions"><a class="button" href="contact.html">Contact Yowie</a></div></div></section>';
    });
})();
