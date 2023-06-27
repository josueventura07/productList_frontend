class Producto {
    constructor(name, price, category){
        this.name = name,
        this.price = price,
        this.category = category 
    }
}

class UI {
    addProduct(product){
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.innerHTML = `
        <strong>Nombre de Producto</strong>: ${product.name}
        <strong>Precio</strong>: ${product.price}
        <strong>Categoria</strong>: ${product.category}
        <a href="#" class="btn_delete" name="delete">Borrar</a>
        `
        cardList.appendChild(card)

    }

    deleteProduct(element){
        if(element.name === 'delete') {
            element.parentElement.remove()
        }
    }

    showMessage(message, style){
        const msgCard = document.createElement('div');
        msgCard.className = `msg_card msg-${style}`;
        msgCard.appendChild(document.createTextNode(message))
        document.querySelector('.main_title').insertAdjacentElement('afterend', msgCard)

        setTimeout(() => {
            document.querySelector('.msg_card').remove()
        }, 1500);
    }

    
}

//Variables globales
const formulario = document.querySelector('.form');
const cardList = document.querySelector('.cards_container')


//Events
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const category = document.getElementById('category').value
    
    const product = new Producto(name, price, category)

    const ui = new UI()
    ui.addProduct(product)
    formulario.reset()
    ui.showMessage('Producto creado satisfactoriamente!', 'add')
})

cardList.addEventListener('click', e => {
    
    const ui = new UI()
    ui.deleteProduct(e.target)
    ui.showMessage('Producto eliminado satisfactoriamente!', 'delete')
})