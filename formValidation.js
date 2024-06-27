const usernameInput = document.getElementById("nome");
const usernameLabel = document.querySelector('label[for="nome"]');
const usernameHelper = document.getElementById("nomehelper");

function addInput(input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    })

    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    })
}
addInput(usernameInput, usernameLabel)

usernameInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    const valorInput = e.target.value;
    if (valorInput.length >= 3) {
        //console.log("Valor válido!")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    } else {
        //console.log("Valor inválido!")
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.classList.add("visible")
        usernameHelper.innerText = `O seu input apresentou apenas ${valorInput.length}, o mínimo requerido são 3 (três)`
    }
})

const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("emailhelper");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputsForms = document.getElementById("form-contato");

addInput(emailInput, emailLabel)

emailInput.addEventListener("change", (e) => {
    const valorInput = e.target.value;
    if (valorInput.includes("@") && valorInput.includes(".com")) {
        emailInput.classList.add("correct")
        emailHelper.classList.remove("visible")
    } else {
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.classList.add("visible")
        emailHelper.innerText = "O endereço de e-mail deve conter '@' e '.com'."
    }
})

inputsForms.addEventListener("submit", (e) => {
    if (!emailRegex.test(emailInput.value)) {
        e.preventDefault();
        window.alert("E-mail inválido!")
    } else {
        return
    }
})

const cellInput = document.getElementById("telefone");
const cellLabel = document.querySelector('label[for="telefone"]');
const cellHelper = document.getElementById("telhelper");

addInput(cellInput, cellLabel)

cellInput.addEventListener("change", (e) => {
    const valorInput = e.target.value;
    if (valorInput.length == 11) {
        cellInput.classList.add("correct")
        cellHelper.classList.remove("visible")
    } else {
        cellInput.classList.remove("correct")
            cellInput.classList.add("error")
            cellHelper.classList.add("visible")
            cellHelper.innerText = "O número de telefone deve conter 11 (onze) dígitos."
    }
})