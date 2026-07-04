const CONFIG = {
  // Change this when deploying (e.g. "https://your-api.onrender.com")
  API_BASE_URL:
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "http://localhost:3000"
      : "",

  EMAILJS: {
    PUBLIC_KEY: "jcXiPaXYj5_yXBrk2",
    SERVICE_ID: "service_2uoyv9v",
    OTP_TEMPLATE_ID: "template_s90z2wg",
    CONTACT_TEMPLATE_ID: "template_contact_inquiry",
  },

  ADMIN_EMAIL: "jacquesnikko@gmail.com",
  ADMIN_API_TOKEN: "goldenhourmoments",

  // Contact form recipient. For launch, change this back to:
  // CONTACT_EMAIL: "goldeneventhours@gmail.com",
  CONTACT_EMAIL: "jacquesnikko@gmail.com",
};
