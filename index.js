// Write your solution in this file!
var customerName = `bob`
// customerName.toUpperCase()
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase() // declearing variable on global scope
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = `maybe bob`
}

const leastFavoriteCustomer = `if bob`

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'what bob'
}