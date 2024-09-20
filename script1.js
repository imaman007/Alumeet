document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const amount = document.getElementById('amount').value;
    document.getElementById('donation-message').innerText = `Thank you, ${name} from ${company}, for your generous donation of $${amount}!`;
    this.reset(); // Reset the form
});

document.getElementById('track-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('track-message').innerText = `Tracking information will be sent to ${email}.`;
    this.reset(); // Reset the form
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const contactName = document.getElementById('contact-name').value;
    document.getElementById('contact-message').innerText = `Thank you, ${contactName}. We will get back to you shortly!`;
    this.reset(); // Reset the form
});