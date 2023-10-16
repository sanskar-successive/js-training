
// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().
class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }

  deposit(depositedAmount) {
    this.balance += depositedAmount;
  }
  withdraw(withdrawnAmount) {
    this.balance -= withdrawnAmount;
  }
  displayBalance() {
    return `Balance Amount in ${this.owner} account is ${this.balance}`;
  }
}

const acc1 = new BankAccount(100, "Sanskar");

acc1.deposit(100);

acc1.withdraw(50);

