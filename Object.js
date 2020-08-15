var mList={
    firstName:"First Name",
    lastName:"Last Name",
    gender:"Male/Female",
    contact: 1234567890,
    email:"email@email.com",
    productList:[],
    product  : function (productName){
         this.productList.push(productName); 
    },
    productCount : function () {
        return `${this.firstName} brought total product ${this.productList.length}`   
    }
}
// console.log(mList.firstName); //one way of getting value of key from object
// console.log(mList["lastName"]); //another way of getting value of key from object (key should be in String)
// console.table(mList); //Tabulate the key and value
mList.product("Apple"); // Sending value apple function product in oblect mList to post it in Product List

console.log(mList.productList);
console.log(mList.productCount());