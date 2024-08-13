
const list = document.querySelector('ul')
const btnMostrarTudo = document.querySelector('#mostar-tudo')
let myLi = '' //Variavel li começa vazia. 

function mostrarTudo() {
    menuOptions.forEach(product => { //Guardar as li
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

//Clicar no botão, chamar a função mostarTudo
btnMostrarTudo.addEventListener("click", mostrarTudo)