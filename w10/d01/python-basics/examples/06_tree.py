import sys

def print_tree(tree_height = 4):
  for i in range(tree_height): # main tree body
    line_output = ''
    for j in range(i, tree_height): # spaces
      line_output += ' '
    for j in range(i*2 + 1):
      line_output += '*' # body fill
    print(line_output)
  if tree_height >= 4:
    for i in range(tree_height//2): # tree trunk
      line_output = ''
      for j in range(tree_height - 1): # spaces
        line_output += ' '
      line_output += '| |' # trunk content
      print(line_output)

print('\n\n')
print_tree(int(sys.argv[1]) if (len(sys.argv) > 1) else 4)
