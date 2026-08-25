

export class BankAccount {
    accountHolder: string;
    balance: number;


    deposit(amount: number) {
        if (amount <= 0) {
            console.log("You can not deposit 0 or less, please enter a value larger than 0")
            return
        }
        this.balance += amount;
    }
    withdraw(amount: number) {
        const currentBalance = this.balance;
        if (currentBalance-amount < 0 || amount == 0) {
            console.log(`You entered an invalid amount: ${amount}`)
            console.log("Please check that the requested amount is larger than 0 and doesnt exceed your current balance")
            console.log(`current balance: ${this.balance}`)
            return
        }
        this.balance -= amount;
    }
    constructor(name: string, balance: number) {
        this.accountHolder = name;
        this.balance = balance;
    }
}