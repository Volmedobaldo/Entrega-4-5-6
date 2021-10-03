  const URLGET = "https://jsonplaceholder.typicode.com/posts";

    $("#btn1").click(() => {
      let emailDato = document.getElementById("Email").value
      const infoPost = { email: `${emailDato}` };
      $.post(URLGET, infoPost, (respuesta, estado) => {
        if (estado === "success") {
          //este console.log muestra los correos que fueron subcriptos
          //console.log(emailDato);
          window.alert("¡Gracias por subcribirse!");
        }
      });
    })

