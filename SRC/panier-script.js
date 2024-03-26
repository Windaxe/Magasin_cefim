const stock = {

    item1 : {
        id:0,
        name: "captor",
        price: 200,
        qty : 1
    },

    item2 : {
        id:0,
        name: "cable",
        price: 2.50,
        qty : 1
    },

    item3: {
        id:0,
        name: "EVH",
        price: 749,
        qty : 1
    },


};
    
document.getElementById("item1").innerHTML = stock.item1.price + "€"; //charge tout les prix, inutile pour l'exo mais pratique dans d'autre cas
document.getElementById("item2").innerHTML = stock.item2.price + "€";
document.getElementById("item3").innerHTML = stock.item3.price + "€";


handleStock(); //on apelle une premiere fois pour charcher tout les stock


function handleStock(){
    document.getElementById("qty1").innerText = stock.item1.qty;
    document.getElementById("qty2").innerText = stock.item2.qty;
    document.getElementById("qty3").innerText = stock.item3.qty;
     
}


function handleQTY(itemId, change) {
    const item = stock[itemId]; // Obtenez l'objet de stock correspondant à l'ID de l'article
    if (item) {
        item.qty += change; // Mettez à jour la quantité en ajoutant ou en soustrayant le changement spécifié
        document.getElementById("qty" + itemId.slice(-1)).innerHTML = item.qty; // modifie l'element qty, prends le mot et ajoute le slice du dernier characters de itemid créant par ex qty1
    }
}