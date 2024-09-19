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

class ATM {
    constructor(account) {
        this.account = account;
    }

    displayOptions() {
        console.log("ATM Options:");
        console.log("1. Check Balance");
        console.log("2. Deposit");
        console.log("3. Withdraw");
    }

    performOperation(operation, amount = 0) {
        let result;

        if (operation === 1) {
            result = this.account.checkBalance();
        } else if (operation === 2) {
            result = this.account.deposit(amount);
        } else if (operation === 3) {
            result = this.account.withdraw(amount);
        } else {
            result = "Invalid option selected.";
        }

        document.getElementById('operationResult').innerText = result;
    }
}

const myAccount = new Account('123456', 'John Doe', 1000)
const myATM = new ATM(myAccount)

myATM.displayOptions()

myATM.performOperation(1)
myATM.performOperation(2, 500)
myATM.performOperation(3, 200)
