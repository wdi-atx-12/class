class Phone:
  def __init__(self, phone_number):
    self.number = phone_number

  def call(self, other_number):
    print("Calling {} from {}.".format(other_number, self.number))

  def text(self, other_number, msg):
    print("Sending text from {} to {}:".format(self.number, other_number))
    print(msg);
