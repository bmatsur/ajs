function add(a, b) {
    return a + b;
}

function printMessage(message) {
    console.log(message);
}

const user = {
    name: "Alice",
    age: 25
};

function getUserInfo(user) {
    return `Name: ${user.name}, Age: ${user.age}`;
}

printMessage(getUserInfo(user));



// ==================================


const products = [
    { id: 1, name: "Apple", price: 1.2 },
    { id: 2, name: "Orange", price: 0.8 },
    { id: 3, name: "Banana", price: 1.0 }
];

function getProductName(product) {
    return product.name;
}

function calculateTotal(products) {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
}

console.log("Product names:");
for (let product of products) {
    console.log(getProductName(product));
}

console.log("Total price:", calculateTotal(products));


// ===================================

const transactions = [
    { id: 1, amount: 100, type: "deposit" },
    { id: 2, amount: 50, type: "withdrawal" },
    { id: 3, amount: 200, type: "deposit" }
];

function calculateBalance(transactions) {
    let balance = 0;
    for (let transaction of transactions) {
        if (transaction.type === "deposit") {
            balance += transaction.amount;
        } else if (transaction.type === "withdrawal") {
            balance -= transaction.amount;
        }
    }
    return balance;
}

function getTransactionSummary(transaction) {
    return `Transaction ${transaction.id}: ${transaction.type} of $${transaction.amount}`;
}

console.log("Transaction summaries:");
for (let transaction of transactions) {
    console.log(getTransactionSummary(transaction));
}

console.log("Final balance:", calculateBalance(transactions));

