emailjs.init('RyZM_-oq9QD8YPYha');
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_tte6rzf", "template_nvduz4t", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(() => {
        showResponseMessage(
          "Ihre Nachricht wurde erfolgreich versendet!",
          "green"
        );
        document.getElementById("contact-form").reset();
      })
      .catch((error) => {
        showResponseMessage(
          "Da ist etwas schief gelaufen... Versuchen Sie es bitte erneut.",
          "red"
        );
        console.error("EmailJS error:", error);
      });
  });

function showResponseMessage(message, color) {
  const existingMessage = document.getElementById("response-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  const responseMessage = document.createElement("p");
  responseMessage.textContent = message;
  responseMessage.style.color = color;
  responseMessage.id = "response-message";
  document.getElementById("contact-form").appendChild(responseMessage);

  setTimeout(() => {
    if (responseMessage) {
      responseMessage.remove();
    }
  }, 5000);
}

