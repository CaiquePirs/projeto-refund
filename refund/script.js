const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

//seleciona os elementos da lista
const expenseList = document.querySelector("ul")
const expenseQuantity = document.querySelector("aside header p span")

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
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }
}

//Adciona um novo elemento na lista
function expenseAdd(newExpense){

    try {
        //Criando o elemento de Li para adicionar o item(Li) na lista(ul)
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        //cria o icone de categoria
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        //cria a info da despesa
        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")

        //cria o nome da despesa
        const expenseName = document.createElement("strong")
        expenseName.textContent = newExpense.expense

        //cria categoria da despesa
        const expenseCategory = document.createElement("span")
        expenseCategory.textContent = newExpense.category_name

        //adiciona nome e categoria na div das informações das despesas
        expenseInfo.append(expenseName, expenseCategory)
        
        // cria o valor da despesa
        const expeneAmout = document.createElement("span")
        expeneAmout.classList.add("expense-amount")
        expeneAmout.innerHTML = `<small>R$</small>${newExpense.amount
            .toUpperCase()
            .replace("R$", "")}`
        
        //cria o icone de remover
        const removeIcon = document.createElement("img")
        removeIcon.classList.add("remove-icon")    
        removeIcon.setAttribute("src", "img/remove.svg")
        removeIcon.setAttribute("alt","remover")

        //adiciona as informações no item
        expenseItem.append(expenseIcon, expenseInfo, expeneAmout, removeIcon)

        //adiciona o item na lista
        expenseList.append(expenseItem)

        //atualiza os totais
        updateTotals()

    } catch {
        console.log(error)
        alert("Não foi possivel atualizar a lista de despesas.")

    }

}

function updateTotals(){
    try{
        //recupera todos os itens (li) da lista (ul)
        const items = expenseList.children

        //atualiza a quantidade de itens na lista expenseQuantity
        expenseQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`

    } catch(error){
        console.log(error)
        alert("Não foi possivel atualizar os totais.")
    }

}


