//XsAqV6LvDep34i9wH
emailjs.init("XsAqV6LvDep34i9wH");

document.getElementsById("forms").addEventListener("submit",function(event){
    event.preventDefault();
    const form = document.getElementById("forms");
    const data = {
        from_name: "Ofensas Alheias",
        from_link: "LegiaoUrbana.com",
        user_email: form.email.value,
        to_name: form.name.value,
        message: form.adjetivo.value,
    };
    emailjs.send("defaultEmail","OfensasAlheias",data).then(
        function (response) {
          alert("E-mail enviado com sucesso!");
        },
        function (error) {
          alert("Ocorreu um erro ao enviar o e-mail, tente novamente mais tarde.");
        }
    );
});