// MENU HAMBURGUESA RESPONSIVE

const hamburger = document.getElementsByClassName("hamburger")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburger.classList.remove("active");
  })
);

// CONTACT FORM

document.querySelector("#email-form").addEventListener("submit", addPost);

const url = "https://jsonplaceholder.typicode.com/comments";

function addPost(preventForm) {
  preventForm.preventDefault();

  // Apuntar a todos los inputs que necesitamos
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#name-2").value;
  let phone = document.querySelector("#name-3").value;
  let message = document.querySelector("#field").value;

  // vamos a usar el metodo fetch, llamamos a la constante url que esta afuera y le pasamos el objeto con 3 propiedades[method, headers, body]

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json, text/plain",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      body: message,
    }),
  })
    .then((response) => response.json())
    .then((dataForm) => console.log(dataForm))
    .then(() => {
      let message = "";
      message += `
		   <div id="message2">
		  <h6>Message Submitted</h6>
	  </div>
		  `;
      document.querySelector("#message3").innerHTML = message;
    })
    .catch(() => {
      let message = "";
      message += `
			 <div id="message2">
			<h6>oh oh, there has been an error with your message!</h6>
		</div>
			`;
      document.querySelector("#message3").innerHTML = message;
    });

  document.querySelector("name").value = "";
  document.querySelector("email").value = "";
  document.querySelector("phone").value = "";
  document.querySelector("message").value = "";
}
