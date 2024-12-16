amount = document.getElementById("amount")

//função para capturar o valor do input
amount.oninput = () => {
    //expressão regular para aceitar somente numeros
    let value =  amount.value.replace(/\D/g, "") 

    //transformar o valor em centavos
    value = Number(value) / 100

    //atualiza o valor do input
    amount.value = formatCurrenciBRL(value)
}

function formatCurrenciBRL(value){
    //formata o valor no padrão BRL
    value = value.toLocaleString("pt-BR", {
        style: "currency", 
        currency: "BRL",
    })

    //retorna o valor padrão
    return value
}

