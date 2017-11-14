def merge_lists(left, right):
  """precondition: list a and b are already sorted separately"""
  sorted_list = []
  l = 0
  r = 0
  while l < len(left) and r < len(right):
    if left[l] < right[r]:
      sorted_list.append(left[l])
      l += 1
    else:
      sorted_list.append(right[r])
      r += 1
  # add the rest
  sorted_list += left[l:] + right[r:]
  return sorted_list

def merge_sort(unsorted_list):
  """splits list into chunks until lists are length one, then merges pieces together, using merge_lists func"""
  if len(unsorted_list) <= 1:
    return unsorted_list
  mid = len(unsorted_list) // 2
  left = merge_sort(unsorted_list[:mid])
  right = merge_sort(unsorted_list[mid:])
  return merge_lists(left, right)
