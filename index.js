<<<<<<< HEAD

function sendMail(event) {
    event.preventDefault();
  
    var params = {
      name: document.getElementById("inputName").value,
      email: document.getElementById("inputEmail").value,
      message: document.getElementById("inputMessage").value,
    };
  
    const serviceID = "service_qd2mkla";
    const templateID = "template_zfqrbkd";
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("inputName").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputMessage").value = "";
        console.log(res);
        alert("Your message was sent successfully");
      })
      .catch(err => console.log(err));
=======

function sendMail(event) {
    event.preventDefault();
  
    var params = {
      name: document.getElementById("inputName").value,
      email: document.getElementById("inputEmail").value,
      message: document.getElementById("inputMessage").value,
    };
  
    const serviceID = "service_qd2mkla";
    const templateID = "template_zfqrbkd";
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("inputName").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputMessage").value = "";
        console.log(res);
        alert("Your message was sent successfully");
      })
      .catch(err => console.log(err));
>>>>>>> 7d94fbecfe79de8242de31496159e0d0d7cc8ebc
  }