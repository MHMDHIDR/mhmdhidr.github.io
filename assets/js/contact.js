const ContactUs = (form) => {
  form.submitBtn.addEventListener('click', async (e) => {
    // using FormData to send constructed data
    fetch(`https://formsubmit.co/ajax/${form.msg.value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.msg.value
      })
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });
};

export default ContactUs;
