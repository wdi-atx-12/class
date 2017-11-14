# from .FOLDER.FILE import SPECIFIC_FUNCTION_A, SPECIFIC_FUNCTION_B
# from .FOLDER.FILE import * # imports everything from that file
from bubble_sort import bubble_sort
from merge_sort import merge_sort

import time

def test_sort_method(sort_function, num_tests = 10000):
  lists = []
  lists.append({'name': 'random', 'items': [68,33,30,77,81,61,5,0,24,80,51,20,98,49,25,12,66,70,52,8,10,22,65,20,89]})
  lists.append({'name': 'duplicates', 'items': [69,18,82,82,69,16,82,82,82,18,48,18,48,48,16,69,48,18,69,18,18,69,18,69,48]})
  lists.append({'name': 'nearly sorted', 'items': [13,17,96,21,24,31,33,33,35,40,44,46,76,52,19,54,59,95,99,51,9,93,75,53,72]})
  for l in range(len(lists)):
    timestamp = time.time()
    print('Testing list {} ({}):'.format(l+1, lists[l].get('name')))
    print('Unsorted: {}'.format(lists[l].get('items')))
    print('Sorted:   {}'.format(sort_function(lists[l].get('items'))))
    for i in range(num_tests):
      sort_function(lists[l].get('items'))
    print('Sorted {} times in: {}ms'.format(num_tests, 1000*(time.time() - timestamp)) )

print('\n')
print('TESTING BUBBLE SORT!')
print('--------------------')
test_sort_method(bubble_sort)

print('\n')
print('TESTING MERGE SORT!')
print('-------------------')
test_sort_method(merge_sort)
