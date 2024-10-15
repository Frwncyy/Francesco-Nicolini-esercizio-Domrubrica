//nomi input
let nameInput = document.querySelector('#nameInput')
let numberInput = document.querySelector('#numberInput');

// bottoni
let showBtn = document.querySelector('#showBtn');
let addBtn = document.querySelector('#addBtn');
let removeBtn = document.querySelector('#removeBtn');


// container contatti
let containerContacts = document.querySelector('#containerContacts');

let rubrica = {
    listaContatti: [
        {name: 'Mario', number: 1234567890}, //contatto
        {name: 'Giacomo', number: 1234567345}, //contatto
        {name: 'Rosa', number: 1234560987}, //contatto
        {name: 'Francesco', number: 1234567658}, //contatto
    
    ],

    showContact: function() {
        this.listaContatti.forEach(contatto=> {
            let singleContact = document.createElement('div')
            singleContact.innerHTML = `<span class ="fw bold">${contatto.name}</span>: <span>${contatto.number}</span>`
            containerContacts.appendChild(singleContact)
        })
    },

    addContact: function(newName, newNumber){
        if(newNumber.length == 10){
            this.listaContatti.push({name: newName, number: newNumber});
        }else{
            alert('il numero inserito non è valido');
        }
       
    },

    // addContact: function(newName, newNumber){
    //     if(newNumber.lenght == 10){
    //         this.listaContatti.push({name: newName, number: newNumber})
    //     }else if(newNumber.lenght < 10){
    //         alert(`il numero e' troppo corto`)
    //     }else if(newNumber.lenght > 10){
    //         alert(`il numero e' troppo lungo`)
    //     }
    // },

    removeContact: function(removeName){
        let names = this.listaContatti.filter(contatto => contatto.name != removeName)
        this.listaContatti = names
    }

}

let check = false;

showBtn.addEventListener('click', ()=>{
    if(check == false){
        rubrica.showContact()
        check = true 
        console.log(containerContacts);
    }else if(check == true){
        containerContacts.innerHTML = ``
        check = false
        console.log(containerContacts);
    }
})

addBtn.addEventListener('click', ()=>{
    if(nameInput != `` && numberInput != ``)
    rubrica.addContact(nameInput.value, numberInput.value)
    nameInput.value = ``;
    numberInput.value = ``;
})

removeBtn.addEventListener('click', ()=>{
    if(nameInput != ``){
        rubrica.removeContact(nameInput.value)
        nameInput.value = ``
    }
    if(check == true){
        containerContacts.innerHTML = ``
        check = false
    }
})