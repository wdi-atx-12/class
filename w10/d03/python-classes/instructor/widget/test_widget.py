from widget import Widget

# create instances
a = Widget()
b = Widget()
c = Widget()
d = Widget()

# call instance methods
a.say_hi() # "I'm widget number 1"
c.say_hi() # "I'm widget number 3"

# access class methods/properties
Widget.say_num_items() # "There are 4 Widget instances"
print(Widget.count) # 4
