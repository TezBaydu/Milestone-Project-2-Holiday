// emailJS contact form handling

function sendMail(contactForm) {
    emailjs.send("service_8tumlwn", "template_5ad99dg", {
        "from_user_name": contactForm.name.value, 
        "from_user_email": contactForm.email.value, 
        "staycation_message": contactForm.message.value,
    }, "user_jtbYcTDIFOX4Z8NAmbqq3")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
