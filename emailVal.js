function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "render_to_arjun_gm";
  const templetID = "template_zqk1ot8";
  emailjs
    .send(serviceID, templetID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Your message is successfully sent.");
    })
    .catch((err) => console.log(err));
}
