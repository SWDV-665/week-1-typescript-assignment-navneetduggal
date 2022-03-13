class Grocery{
    itemName: String;
    itemQuantity: number;
    itemCost: number;

    constructor(name: String, quantity: number, cost: number) {
        this.itemName = name;
        this.itemQuantity = quantity;
        this.itemCost = cost;
      }
}

function buildTable(){
    console.log("hello");
    var t = new Grocery('Eggs', 100, 2);
    var arrayOfGroceries = [];
    // var arrayOfGroceries = [new Grocery('Eggs', 100, 2),
    //                         new Grocery('Bread', 200, 3),
    //                         new Grocery('Milk', 50, 5)];

    var table = document.getElementById('groceryTable');

    for (var i = 0; i < arrayOfGroceries.length; i++){
        var row = `<tr>
                        <td>${arrayOfGroceries[i].itemName}</td>
                        <td>${arrayOfGroceries[i].itemQuantity}</td>
                        <td>${arrayOfGroceries[i].itemCost}</td>
                  </tr>`;
        table.innerHTML += row;


    }  
    
    
}

buildTable();