// Inside script.js
// Initialization for ES Users

function sendEmail() {
    var params={
    from_name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
}

const serviceID="service_8m68wu5";
const templateID="template_p1e2tmo";

  emailjs.send(serviceID, templateID, params).then(
      function(response) {
        document.getElementById("firstName").value="";
        document.getElementById("lastName").value="";
        document.getElementById("email_id").value="";
        document.getElementById("message").value="";
        
          console.log("Email sent successfully:");
          alert("Email sent successfully!" );
      },
      function(error) {
          console.log("Email failed to send:", error);
          alert("Failed to send email. Please try again later.");
      }
  );
}

