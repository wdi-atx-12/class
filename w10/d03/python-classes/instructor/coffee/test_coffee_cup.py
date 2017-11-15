from coffee_cup import CoffeeCup

my_cup = CoffeeCup(8)
my_cup.fill()
my_cup.drink(4)
print('my_cup has {} ounces left'.format(my_cup.amount))

print('\n')
chris_cup = CoffeeCup(20)
chris_cup.fill()
chris_cup.empty()
print('chris\' cup has a capacity of {}'.format(chris_cup.capacity))
