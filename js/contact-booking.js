(function () {
  var SERVICE_MESSAGES = {
    "basic-tune-up": "Hi Yowie, I'd like to book my bike in for a Basic Tune-Up (Bike: [insert bike type]). I am hoping to get it done within the next days/weeks/ASAP. thanks",
    "standard-service": "Hi Yowie, I'd like to book my bike in for a Standard Workshop Service (Bike: [insert bike type]). I am hoping to get it done within the next days/weeks/ASAP. thanks",
    "ultimate-rebuild": "Hi Yowie, I'd like to book my bike in for an Ultimate Service & Custom Rebuild (Bike: [insert bike type]). I am hoping to get it done within the next days/weeks/ASAP. thanks",
    "mobile-concierge": "Hi Yowie, I'd like to book my bike in for Mobile Pick-Up & Delivery (Bike: [insert bike type]). I am hoping to get it done within the next days/weeks/ASAP. thanks",
    "fork-service": "Hi Yowie, I'd like to book my bike in for a Fork Lower Leg Service (Bike: [insert bike type]). I am hoping to get it done within the next days/weeks/ASAP. thanks",
    "shock-service": "Hi Yowie, I'd like to book my bike in for a Rear Shock Air Can Service (Bike: [insert bike type]). I am hoping to get it done within the next days/weeks/ASAP. thanks"
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
