from phone import Phone

class IPhone(Phone):
  def __init__(self, phone_number):
    Phone.__init__(self, phone_number)
    self.fingerprint = None

  def set_fingerprint(self, fingerprint):
    self.fingerprint = fingerprint

  def unlock(self, fingerprint=None):
    if (self.fingerprint == None):
      print("Phone unlocked because no fingerprint has not been set.")
    elif (self.fingerprint == fingerprint):
      print("Phone unlocked. Fingerprint matches.")
    else:
      print("Phone locked. Fingerprint doesn't match.")
