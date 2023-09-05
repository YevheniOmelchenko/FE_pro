/* необходимо создать объект bankAccount(дебет), представляющий банковский счёт со свойствами 

1.accountNumber - для номера счета 
2.accountHolderName - для имени владельца счета
3.balance - для баланса                 для отображения остатка на счету

4.deposit() - для описания действия по добавлению денег на счет
5.withdraw() - для описания действия по снятию денег со счета
6.checkBalance() - для проверки баланса
*/

const bankAccount = {
    accountNumber: "123",
    accountHolderName: "John Smith",
    balance: 10,

    deposit: function (amount) {
        amount > 60000
            ? console.log("Требуется подтверждение легальности доходов")
            : (this.balance += amount);
    },

    withdraw(amount) {
        amount <= this.balance && amount > 0
        ? this.balance -= amount
        : console.log('Недостаточно средств на вашем балансе или вы ввели отрицательную сумму')
    },
    checkBalance() {
        return console.log(`Баланс вашего счёта равен: ${this.balance}`);
    },
};

bankAccount.deposit(1000);
bankAccount.checkBalance();
bankAccount.withdraw(500);
bankAccount.checkBalance();
bankAccount.withdraw(100);
bankAccount.checkBalance();
bankAccount.withdraw(1450);
bankAccount.checkBalance();
