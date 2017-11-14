def binary_search(my_list, search_item):
  """find the location of the search item within the provided list
returns -1 if not found
PRE: list must be sorted"""
  low = 0
  high = len(my_list) - 1
  while low <= high:
    mid = (low + high) // 2
    if my_list[mid] > search_item:
      high = mid - 1
    elif my_list[mid] < search_item:
      low = mid + 1
    else:
      return mid
  else:
    return -1

test_list = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]
print('my list: ', test_list)
print('searching for 5: ',binary_search(test_list, 5))
print('searching for 40: ',binary_search(test_list, 40))
print('searching for 10: ',binary_search(test_list, 10))
print('searching for 19: ',binary_search(test_list, 19))
