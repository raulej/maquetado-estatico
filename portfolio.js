const elemLogin = document.getElementById('login');
const elemLogoff = document.getElementById('logoff');

var editar = false;

//Cada vez que se presione un boton, se deshabilitará al otro
//Nota: modificar el código para que se ejecute solo cuando se valide con el form de login
elemLogin.addEventListener("click",() =>{
    elemLogin.style.display = "none";
    elemLogoff.style.display = "block";
});

elemLogoff.addEventListener("click",() =>{
    elemLogoff.style.display ="none";
    elemLogin.style.display = "block";
});

//agrega dinamicamente el footer con el boton para editar a todas las cards
function addCardsFooter(){
    let i = 0;//para agregarle un id de la forma 'editar-section-i'
    let idModal = ""; //para indicar cual es el modal que se ejecutara

    const cards = document.querySelectorAll('section > .card');//selecciona la primera .card hija de cada section
    cards.forEach((card) => {
        //crea un div con las clases requeridas
        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer', 'text-end');//agrega las clases al elemento

        // crea y fija los valores del elemento <a>
        const link = document.createElement('a');
        link.classList.add('btn','btn-outline-secondary');
        link.href = '#';
        link.setAttribute('role','button');
        link.setAttribute('id','edit-section-' + i);
        switch (i) {
            case 1:
                idModal = '#edit-aboutModal';
                break;
                
            default:
                idModal = "";
                break;
            };
            if(idModal){
                link.setAttribute('data-bs-toggle','modal');
                link.setAttribute('data-bs-target','#edit-aboutModal');}
            else{link.addEventListener('click',() => {alert('Editar sección. EN CONSTRUCCION...');});}
        
        // Agrega el icono al enlace <a>
        link.innerHTML = '<svg class="bi" width="16" height="16"><use xlink:href="#bi-pencil-square"></use></svg>';
        
        cardFooter.appendChild(link);//Agrega el <a> al footer de la card
        card.appendChild(cardFooter);//Agrega el card-footer a la card
        i++;//incrementamos para saber que seccion
    });
};

//remueve, si los hubiere, el footer con los botones agregados dinamicamente a las cards
function remCardsFooter(){
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        const cardFooter = document.querySelector('.card-footer');
        if(cardFooter){
            cardFooter.remove();
        }
    });
};