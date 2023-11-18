const primero = document.getElementById("primero");
const segundo = document.getElementById("segundo");

primero.addEventListener("click", () => {
    primero.classList.toggle("close");
    segundo.classList.toggle("open");
})
segundo.addEventListener("click", () => {
    primero.classList.remove("close");
    segundo.classList.remove("open");
})

