const YOWIE_PHONE_NUMBERS = {
  personal: "0450956707",
  twilio: "0485022101"
};

const ACTIVE_PHONE_NUMBER = "personal"; // change to "twilio" when ready

window.YOWIE_PHONE_NUMBER = YOWIE_PHONE_NUMBERS[ACTIVE_PHONE_NUMBER];
