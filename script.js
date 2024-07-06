function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const myResult = document.querySelector(".my-result")


    if (min >= max) {
        alert("O valor mínimo deve ser MENOR que o valor máximo")
    }
    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        myResult.innerHTML = result
    }
}
