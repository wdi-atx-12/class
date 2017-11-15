class Widget():
  count = 0

  def __init__(self):
    Widget.count += 1
    self.num = Widget.count

  def say_hi(self):
    print('I\'m widget number {}'.format(self.num))

  @classmethod
  def say_num_items(cls):
    print('There are {} Widget instances'.format(cls.count))
