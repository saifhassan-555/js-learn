// Reduce Method this use accumalator or items built in values
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);    // with reyurn {}
//     return acc + currval
// }, 0) // this is accumalator value 


const myTotal = myNums.reduce (  (acc, curr) => acc+curr, 0 ) // with parenthesis  
 

console.log(myTotal);


const shoppingCart = [
    {
    itemName: "js Course",
    price: 2999
    },
    {
        itemName: "Py course",
        price: 999
        },
        {
            itemName: "mobile dev course",
            price: 5999
            },
        {
            itemName: "data science Course",
            price: 12999
            },

]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(
    priceToPay
);