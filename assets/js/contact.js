document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const formStatus = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inquiry = {
      toEmail: CONFIG.CONTACT_EMAIL,
      fullName: document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      eventType: document.getElementById("eventType").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${inquiry.toEmail}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inquiry.fullName,
          email: inquiry.email,
          phone: inquiry.phone || "Not provided",
          event_type: inquiry.eventType || "Not specified",
          message: inquiry.message,
          _subject: "New inquiry from Golden Event Hours by KC",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(details || `Request failed (${response.status})`);
      }

      formStatus.textContent =
        "Thank you! Your message has been sent. We'll get back to you soon.";
      formStatus.classList.add("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      formStatus.textContent =
        `Sorry, we couldn't send your message. Please email us directly at ${CONFIG.CONTACT_EMAIL}.`;
      formStatus.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Inquiry";
    }
  });
});
