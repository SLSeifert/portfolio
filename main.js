emailjs.init('QxTfUG4RCyd6RcON4');

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
e.preventDefault();

const params = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    company: form.company.value,
    email: form.email.value,
    areaCode: form.areaCode.value,
    phone: form.phone.value,
    contact: form.contact.value,
    memo: form.memo.value,
    time: new Date().toLocaleString()
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