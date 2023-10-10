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

console.log(acc1.displayBalance());

acc1.deposit(100);

console.log(acc1.displayBalance());

acc1.withdraw(50);

console.log(acc1.displayBalance());
