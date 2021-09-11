const ContactUs = async (form) => {
  // using FormData to send constructed data
  const myEmailToken = '85ece13a15bb17a66a1d10bd8593f134';

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${myEmailToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      })
    });

    const { ok } = response;
    if (!ok) {
      alert("Sorry Your Message hasn't been sent! Try again Later!");
      return;
    }

    //if OK :D
    window.location.assign('thanksForReachingOut.html');
  } catch (err) {
    console.error(err);
  }
};

export default ContactUs;
