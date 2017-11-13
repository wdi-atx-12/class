my_fruits = ['apples', 'oranges', 'kiwis', 'watermelons', 'mangos', 'bananas', 'strawberries']

def say_like_fruits(fruits_list):
  for fruit in fruits_list:
    print('I like to eat {}!'.format(fruit))

def list_favorite_fruits(fruits_list):
  for i in range(len(fruits_list)):
    print('My number {} favorite fruit is {}.'.format(i+1, fruits_list[i]))

print('\n')
say_like_fruits(my_fruits)
print('\n')
list_favorite_fruits(my_fruits)
