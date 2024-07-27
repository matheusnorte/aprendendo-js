const button = document.querySelector("button")
const currencyselect = document.querySelector("select")

function chama() {
    const value = document.querySelector(".input-currency").value
    const cambio = document.querySelector(".cambio")
    const doleta = document.querySelector(".cambio-americano")
    const eurotoday = 6.2
    const dolartoday = 5.6


    if (currencyselect.value == "dolar") {
        doleta.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value / dolartoday)

    }

    if (currencyselect.value == "euro") {
        doleta.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }
        ).format(value / eurotoday)
    }
    cambio.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value)
}

function troca() {
    const currencyname = document.getElementById("currency-name")
    const currencyimg = document.querySelector(".currency-img")

    if (currencyselect.value == "euro") {
        currencyname.innerHTML = "Euro"
        currencyimg.src = "./img/Design sem nome 3 (1).png"
    }

    if (currencyselect.value == "dolar") {
        currencyname.innerHTML = "Dólar americano"
        currencyimg.src = "./img/estados-unidos (1) 1.png"
    }
    chama()
}

currencyselect.addEventListener("change", troca)
button.addEventListener("click", chama)