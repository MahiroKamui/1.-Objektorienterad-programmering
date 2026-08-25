import {BankAccount} from "./bank-account";


const denisa = new BankAccount("vadsomhelst", 1500)
denisa.withdraw(1501)


console.log(denisa);