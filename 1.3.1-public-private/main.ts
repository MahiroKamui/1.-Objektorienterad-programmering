import {BankAccount} from "./bank-account.ts";


const accountOne = new BankAccount("Luna", 1500)
const accountTwo = new BankAccount("Tom", 7500)

accountOne.withdraw(270)
accountOne.deposit(563)
console.log(accountOne.getBalance())
accountOne.showInfo()

accountTwo.withdraw(500)
accountTwo.deposit(563)
console.log(accountTwo.getBalance())
accountTwo.showInfo()

// accountTwo.balance = 200