from phone import Phone

class Android(Phone):
  def __init__(self, phone_number):
    Phone.__init__(self, phone_number)
    self.keyboard = "Default"

  def set_keyboard(self, keyboard):
    self.keyboard = keyboard
