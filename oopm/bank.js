class BankAccount {
    
    constructor(balance) {
        this.balance = balance || 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        if( this.balance >= amount){
            this.balance -= amount;
        }else{
            console.log('Insufficient funds');
        }
    }
};


const account = new BankAccount(100);
account.deposit(50);
account.withdraw(90);
console.log(account.getBalance());