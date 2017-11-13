def check_admission(has_ticket = False, is_vip = False, money_available = 0.0):
  if has_ticket:
    if is_vip:
      print('We\'ve been expecting you. Follow me to the VIP lounge.')
    else:
      print('Welcome. Enjoy the concert.')
  elif money_available > 20.0: # tickets cost $20
    print('I can\'t let you in without a ticket. You can buy a ticket for $20.')
  else:
    print('You can\'t come in without a ticket. Now get lost before I call security!')

print('\n\nPerson A: (VIP ticket, has money)')
check_admission(True, True, 40.0)
print('\n\nPerson B: (no ticket, has money)')
check_admission(False, False, 50.0)
print('\n\nPerson C: (regular ticket, no money)')
check_admission(True, False, 10.0)
print('\n\nPerson D: (no ticket, no money)')
check_admission(False, True, 0.0)
