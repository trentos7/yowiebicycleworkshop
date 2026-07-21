(function () {
  var SERVICE_MESSAGES = {
    "basic-tune-up": "Hi Yowie, I'd like to book a Basic Tune-Up.",
    "standard-service": "Hi Yowie, I'd like to book a Standard Workshop Service.",
    "ultimate-rebuild": "Hi Yowie, I'd like to book an Ultimate Service & Custom Rebuild.",
    "mobile-concierge": "Hi Yowie, I'd like to book Mobile Pick-Up & Delivery."
  };

  var params = new URLSearchParams(window.location.search);
  var service = params.get("service");
  if (!service || !SERVICE_MESSAGES[service]) return;

  var message = SERVICE_MESSAGES[service];
  var smsBody = encodeURIComponent(message);
  var mailSubject = encodeURIComponent("Bike Service Enquiry — " + message.replace("Hi Yowie, I'd like to book ", "").replace(".", ""));
  var mailBody = encodeURIComponent(message + "\n\nBike type:\nIssue:\n");

  document.querySelectorAll('a[href^="sms:+61485022101"]').forEach(function (link) {
    link.href = "sms:+61485022101?body=" + smsBody;
  });

  document.querySelectorAll('a[href^="mailto:yowiebicycleworkshop@gmail.com"]').forEach(function (link) {
    link.href = "mailto:yowiebicycleworkshop@gmail.com?subject=" + mailSubject + "&body=" + mailBody;
  });
})();
