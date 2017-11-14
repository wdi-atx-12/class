def bubble_sort(my_list):
  """sort a list in a bubbly way"""
  # do one pass per item in list
  for pass_num in range(len(my_list)):
    # iterate through list from 0 to len-1
    for idx in range(len(my_list)-1):
      # if left is bigger than right
      if my_list[idx] > my_list[idx+1]:
        # swap left/right values
        temp = my_list[idx+1]
        my_list[idx+1] = my_list[idx]
        my_list[idx] = temp
  # return sorted list
  return my_list
