
const stock = {

    item1 : {
        id:0,
        name: "captor",
        price: 200,
        qty : 1,
        newprice: 0
    },

    item2 : {
        id:0,
        name: "cable",
        price: 2.50,
        qty : 1,
        newprice: 0
    },

    item3: {
        id:0,
        name: "EVH",
        price: 749,
        qty : 1,
        newprice: 0
    },


};




InnitStock(); //on apelle une premiere fois pour charcher tout les stock


function InnitStock(){

    document.getElementById("item1").innerHTML = stock.item1.price + "€"; //charge tout les prix
    document.getElementById("item2").innerHTML = stock.item2.price + "€";
    document.getElementById("item3").innerHTML = stock.item3.price + "€";

    document.getElementById("qty1").innerText = stock.item1.qty;
    document.getElementById("qty2").innerText = stock.item2.qty;
    document.getElementById("qty3").innerText = stock.item3.qty;
     
}


function handleQTY(itemId, change) {
    
    
    const item = stock[itemId]; // Obtenez l'objet de stock correspondant à l'ID de l'article

    const qtyitem = "qty" + itemId.slice(-1); //recupere itemID et prends uniquement le dernier chiffre (string -1)
    const priceitem = itemId;

    document.querySelector(".add").disabled = true; //desactive le bouton le temps que les donnée sont traité

    if (item.qty-1 >= 0) { //est-ce que l'article est positif ?
        console.log(item.qty);
        item.qty += change; // Mettez à jour la quantité en ajoutant ou en soustrayant le changement spécifié
        item.newprice = item.qty * item.price;

        document.getElementById(qtyitem).innerHTML = item.qty;
        item.newprice = item.qty * item.price;
        document.getElementById(priceitem).innerHTML = item.newprice + "€";
        


    }
    else if (item.qty <= 0) { //else le forcer a etre a positif
        item.qty = 1;
        document.getElementById(qtyitem).innerHTML = item.qty;
        item.newprice = item.qty * item.price;
        document.getElementById(priceitem).innerHTML = item.newprice + "€";
        
    }

    document.querySelector(".add").disabled = false;
}

function handleCheckout() {
    let price = 0;
    for(const key in stock) {
       if(Object.hasOwnProperty.call(stock, key)) { //si dans l'object il y a props (stock, key) alors:
        const item = stock[key];

        price = price + item.qty * item.price; //multiplie le total existant + qty * price


       }
           
    }
    document.getElementById("totalPrice").innerHTML = "Total : " + price + "€";
}


function popshow(){
    var popup = document.querySelector(".popup-container");
    var page = document.querySelector(".container");
    popup.style.visibility = "visible"; 
    page.style.filter = "blur(5px)";
}

function handleDeleteAll(erase){
    var popup = document.querySelector(".popup-container");
    var page = document.querySelector(".container");
    if(erase)
    {
        for(const key in stock) {
            if(Object.hasOwnProperty.call(stock, key)) {
                const item = stock[key];
                item.qty = 0;
                InnitStock();
                document.getElementById("totalPrice").innerHTML = "Total : 0€";

                popup.style.visibility = "hidden"; 
                page.style.filter = "blur(0px)";
            }
    
            
        }


    }
    else{

        popup.style.visibility = "hidden"; 
        page.style.filter = "blur(0px)";
    }
    
}