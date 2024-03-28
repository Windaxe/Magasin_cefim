//Formulaire
const form = document.getElementById("form");

function formHide() {   // Function pour cacher le formulaire
    form.style.display = 'none';
};

function formDisplay() { // Function pour montrer le formulaire
    form.style.display = 'flex'; 
};


// Boutons (Formulaire et card employé)
const editIcon = document.getElementById("edit-icon");  // Le crayon gris dans les cards équipe
const editIcon2 = document.getElementById("edit-icon-2");
const editIcon3 = document.getElementById("edit-icon-3");

const ctaEdit = document.getElementById("cta-form-edit"); // Le btn "modifier" du formulaire
const ctaCancel = document.getElementById("cta-form-cancel"); // Le btn "annuler" du formulaire


// Formulaire inputs
let nameForm = document.getElementById("name-form");
let posteForm = document.getElementById("poste-form");
let texteAreaForm = document.getElementById("textarea-form");
let imageForm = document.getElementById("image-profil");


let currentCard = 0 


// Fonction permettant de récupérer les données de la cards pour les innsérer dans le formulaire
function showFormWithInfo(n, p, d) {
    
        currentCard = document.getElementById(n).closest('.card'); // Stocke la carte actuellement éditée qui est la plus proche du bouton utilisé

    //Recupération des infos de la card
        const nomEmploye  = document.getElementById(n).textContent;
        const posteEmploye = document.getElementById(p).textContent;
        const descriptionEmploye = document.getElementById(d).textContent;
        const imageEmploye = currentCard.querySelector('.card-img').src;

    // Insertion des valeurs dans le formulaire
        nameForm.value = nomEmploye;
        posteForm.value = posteEmploye;
        imageForm.value = imageEmploye;
        texteAreaForm.value = descriptionEmploye;

    formDisplay();
};



// -------------------------------------



formHide(); //Le formulaire n'est pas visible par defaut


editIcon.addEventListener('click', function(event) {  // ouvre le formulaire au click sur le crayon gris
    event.preventDefault(); // Pour empêcher tout comportement par défaut
    showFormWithInfo("nom1", "poste1", "description1");
});


editIcon2.addEventListener('click', function(event) {  // ouvre le formulaire au click sur le crayon gris
    event.preventDefault(); // Pour empêcher tout comportement par défaut
    showFormWithInfo("nom2", "poste2", "description2");
});


editIcon3.addEventListener('click', function(event) {  // ouvre le formulaire au click sur le crayon gris
    event.preventDefault(); // Pour empêcher tout comportement par défaut
    showFormWithInfo("nom3", "poste3", "description3");
});


ctaCancel.addEventListener('click', function() {
    formHide(); 
}
); 


ctaEdit.addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    if (currentCard) {
        currentCard.querySelector('.nom-employe').textContent = nameForm.value;
        currentCard.querySelector('.poste-employe').textContent = posteForm.value;
        currentCard.querySelector('.description-employe').textContent = texteAreaForm.value;
        currentCard.querySelector('.card-img').src = imageForm.value;
    }
    formHide(); 
});


