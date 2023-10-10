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

