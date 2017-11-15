class CoffeeCup():
  def __init__(self, capacity = 12):
    self.amount = 0
    self.capacity = capacity

  def fill(self):
    print('fillin up da cup') # TODO: remove
    self.amount = self.capacity
    return self.amount

  def empty(self):
    print('emptyin the cup')
    self.amount = 0
    return self.amount

  def drink(self, sip_size):
    print('taking a sip of size: {} ounces'.format(sip_size))
    self.amount -= sip_size
    if (self.amount < 0):
      self.amount = 0
    return self.amount
