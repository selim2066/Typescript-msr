// access >> modify

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // private addBalance(balance: number) {
  //   this._userBalance = this._userBalance + balance;
  // }

    addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
   // this.userBalance; // cz its private
  }
}

const selimAccount = new BankAccount(111, "Mezba", 20);

selimAccount.addBalance(100);
selimAccount.addBalance(50);

console.log(selimAccount);