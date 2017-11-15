
class BankAccount():
  def __init__(self, account_type = 'checking'):
    self.type = account_type
    self.balance = 0
    self.overdraft_fees = 0

  def deposit(self, amount):
    print('Adding ${} to your {} account'.format(amount, self.type))
    self.balance += amount
    return self.balance

  def withdraw(self, amount):
    print('Withdrawing ${} from your {} account'.format(amount, self.type))
    self.balance -= amount
    if self.balance < 0:
      self.overdraft_fees += 20
      print('UH OH! You overdrew. You bad bad poor person. You now have {} in overdraft fees on your {} account'.format(self.overdraft_fees, self.type))
    return amount



########################################

my_checking = BankAccount('checking')
my_savings = BankAccount('savings')

my_checking.deposit(1000)
my_savings.deposit(1000)

my_wallet_cash = 10
my_wallet_cash += my_checking.withdraw(100)

my_savings.withdraw(2000)
