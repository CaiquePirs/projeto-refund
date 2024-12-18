const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("expense")

//função para capturar o valor do input
amount.oninput = () => {
    //expressão regular para aceitar somente numeros
    let value =  amount.value.replace(/\D/g, "") 

    //transformar o valor em centavos
    value = Number(value) / 100

    //atualiza o valor do input
    amount.value = formatCurrenciBRL(value)
}

//função para formatar o valor inserido no input automaticamente
function formatCurrenciBRL(value){
    //formata o valor no padrão BRL
    value = value.toLocaleString("pt-BR", {
        style: "currency", 
        currency: "BRL",
    })

    //retorna o valor padrão
    return value
}

// capturando evento de submit do formulario
form.onsubmit = (event)=>{
    //previne o comportamento de fazer rload
    event.preventDefault()

    //objeto com os detalhes da despesa do usuário
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value, 
        category_name: category.options[category.selecIndex].text,
        amount: amount.value, 
        created_at: new Date(),

    }

}
