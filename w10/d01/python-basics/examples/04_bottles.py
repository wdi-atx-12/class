def bottles_of_beer_for_loop(num_bottles = 5):
  for i in range(num_bottles, 0, -1):
    if i != num_bottles:
      print('Take one down, pass it around.\n{0} bottles of beer on the wall!\n'.format(i))
    print('{0} bottles of beer on the wall.\n{0} bottles of beer!'.format(i))
  else:
    print('Take one down, pass it around.\n0 bottles of beer on the wall!\n')
    print('Who\'s up for another round?')

def bottles_of_beer_while_loop(num_bottles = 5):
  while num_bottles > 0:
    print('{0} bottles of beer on the wall.\n{0} bottles of beer!'.format(num_bottles))
    num_bottles -= 1
    print('Take one down, pass it around.\n{0} bottles of beer on the wall!\n'.format(num_bottles))
  else:
    print('Who\'s up for another round?')

print('\n\nWITH A FOR LOOP:\n--------------------\n')
bottles_of_beer_for_loop()

print('\n\nWITH A WHILE LOOP:\n--------------------\n')
bottles_of_beer_while_loop()
