$(".read_more_button").click(function () {
             $(this).siblings(".card-text-collapsed").toggle("slow");
         });

function handleSubmit(event) {
    event.preventDefault();
    //
    contactForm.submit();
}

let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit",handleSubmit);