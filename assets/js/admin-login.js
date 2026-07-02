document.addEventListener("DOMContentLoaded", () => {
  const settingsLink = document.getElementById("settingsLink");
  const settingsModal = document.getElementById("settingsModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const sendCodeBtn = document.getElementById("sendCodeBtn");
  const loginAdminBtn = document.getElementById("loginAdminBtn");
  const accessCodeInput = document.getElementById("accessCodeInput");

  let generatedCode = null;
  const adminEmail = "lloydhanzluilam@gmail.com";

  // 1. Open Pop-up
  if (settingsLink) {
    settingsLink.addEventListener("click", (e) => {
      e.preventDefault();
      settingsModal.style.display = "block";
    });
  }

  // 2. Close Pop-up
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      settingsModal.style.display = "none";
      accessCodeInput.value = "";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsModal.style.display = "none";
      accessCodeInput.value = "";
    }
  });

  // 3. Generate and SEND the real email
  if (sendCodeBtn) {
    sendCodeBtn.addEventListener("click", () => {
      generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      sendCodeBtn.textContent = "Sending...";
      sendCodeBtn.disabled = true;

      const templateParams = {
        to_email: adminEmail,
        access_code: generatedCode,
      };

      // Connected with your specific Service and Template IDs
      emailjs
        .send("service_2uoyv9v", "template_s90z2wg", templateParams)
        .then(() => {
          alert(`A secure access code has been sent to ${adminEmail}!`);
          sendCodeBtn.textContent = "Code Sent ✓";

          setTimeout(() => {
            sendCodeBtn.textContent = "Send a code";
            sendCodeBtn.disabled = false;
          }, 5000);
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert(
            "Failed to send the code. Please check your console for errors.",
          );
          sendCodeBtn.textContent = "Send a code";
          sendCodeBtn.disabled = false;
        });
    });
  }

  // 4. Validate and Login
  if (loginAdminBtn) {
    loginAdminBtn.addEventListener("click", () => {
      const enteredCode = accessCodeInput.value.trim();

      if (!generatedCode) {
        alert("Please request an access code first by clicking 'Send a code'.");
        return;
      }

      if (enteredCode === generatedCode) {
        generatedCode = null;
        alert("Login successful! Redirecting to admin dashboard...");
        // Redirects to your admin folder
        window.location.href = "admin/admin-calendar.html";
      } else {
        alert("Incorrect Access Code. Please try again.");
        accessCodeInput.value = "";
      }
    });
  }
});
