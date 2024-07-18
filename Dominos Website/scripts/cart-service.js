/*
const obj = {
    addInCart : function(){

    },
    removeFromCart:function(){}
}
*/
// ES6 ShortHand Style of Object Creation
const cartOperations = {
    pizzas:[],
addInCart(pizzaId){
    /* 
    Imperative Code
    for (var i = 0; i<this.pizzas.length ; i++){
            if(this.pizzas[i].id == pizzaId){
                return this.pizzas[i];
            }
    } */
    // Declerative Code
    // const pizza = this.pizzas.find(function(currentPizza){
    //     return currentPizza.id == pizzaId;
    // })
    const pizza = this.pizzas.find(currentPizza=>currentPizza.id == pizzaId);
   pizza.isInCart=true;
   console.log(this.pizzas);
},

removeFromCart(){
 
},

viewAll(){
    return  this.pizzas.filter(pizza=>pizza.isInCart);
},

totalCompute(){

}
}
export default cartOperations;
