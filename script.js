
const list = document.querySelector('ul')
const btnMostrarTudo = document.getElementById('mostar-tudo')
const btnMaperTudo = document.getElementById('maper-tudo')
const btnSomarValue = document.getElementById('somar-value')

//Apresentar os itens na tela.
function mostrarTudo(myArrayProduct) {
    let myLi = '' //Variavel li começa vazia. E permanece quando for trocar um dado
    myArrayProduct.forEach(product => { //Guardar as li
        myLi = myLi + `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="price-product">R$ ${product.price}</p>
            </li>
        `
    })
    
    list.innerHTML = myLi // Moastra na tela, todos os produtos.
}

//Colocar 10% de desconto em cado produto, mapeado.
function maperTudo() {
    const newPrice = menuOptions.map((product) =>({
        ...product, // Operador Spread, pega todos que esta em product e coloca dentro da variavel. Mantendo os orginais e alterado o price.  
        price: product.price * 0.9, //10% de desconto en cada produto
    }))

    mostrarTudo(newPrice) //Função para mostar na tela
}

function somarValue(){
    const valueTotal = menuOptions.reduce((acc, curr) => {
        return acc + curr.price
    }, 0)
    
    //Apresentar valores na tela
    list.innerHTML = `
        <li>
            <p> Valor total dos Produtos: R$ ${valueTotal.toFixed(2)}</p>
        </li>
    `

    //acc - Acumulador
    //curr - Valor corrente / Atual
}

//Evendo, quando clicar no botão chamas as funções
btnMostrarTudo.addEventListener("click", () => mostrarTudo(menuOptions)) //Todo vez que precisar passar um dado detro do addEventListener é preciso colocar a função anonina na frente'() =>'.
btnMaperTudo.addEventListener("click", maperTudo)
btnSomarValue.addEventListener("click", somarValue)