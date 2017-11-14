def merge_lists(a, b):
  """precondition: list a and b are already sorted separately"""
  # start with empty sorted list
  # LOOP (until list a or list b is empty)
    # add smallest from list a or b
  # if list a is not empty
    # add the rest of list a
  # else if list b is not empty
    # add the rest of list b
  # list should be merged/sorted -- return

def merge_sort(unsorted_list):
  # base case: length is 1
    # return list
  # split the list
    # find the midpoint
    # left list = start(0) -> midpoint
    # right list = midpoint -> end(length of list)
    # return merged version of left + right
    return merge_lists(merge_sort(left), merge_sort(right))







