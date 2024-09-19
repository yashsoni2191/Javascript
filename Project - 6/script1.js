class Account {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }

    checkBalance() {
        return `The current balance is: ${this.balance}`
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount
            return `Deposit successful! New balance is: ${this.balance}`
        } else {
            return `Invalid deposit amount.`
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount
            return `Withdrawal successful! New balance is: ${this.balance}`
        } else if (amount > this.balance) {
            return `Insufficient funds.`
        } else {
            return `Invalid withdrawal amount.`
        }
    }
}

const myAccount = new Account('123456', 'John Doe', 700)

document.getElementById('balance').innerText = myAccount.checkBalance()
document.getElementById('depositResult').innerText = myAccount.deposit(200)
document.getElementById('withdrawResult').innerText = myAccount.withdraw(300)