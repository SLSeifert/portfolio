emailjs.init("QxTfUG4RCyd6RcON4");

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Grab the selected radio value
  const contactMethod = document.querySelector(
    'input[name="contact"]:checked',
  )?.value;

  if (!contactMethod) {
    alert("Please select a contact preference!");
    return;
  }

  const params = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    company: form.company.value,
    email: form.email.value,
    areaCode: form.areaCode.value,
    phone: form.phone.value,
    contact: contactMethod, // <- now guaranteed
    memo: form.memo.value,
    time: new Date().toLocaleString(),
  };

  try {
    await emailjs.send("service_quqp8kl", "template_5t24thp", params);
    alert("Message sent!");
    form.reset();
  } catch (err) {
    console.error(err);
    alert("There was an error sending your message.");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const firstAccordionBtn = document.querySelector(".accordion-button");
  firstAccordionBtn.focus();
});