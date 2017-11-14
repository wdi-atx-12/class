def howdy(iteration_count = 100):
  if iteration_count <= 0:
    return
  else:
    print('Howdy!', iteration_count)
    howdy(iteration_count - 1)

def factorial(n):
  if (n <= 1):
    return 1
  return n * factorial(n-1)

def factorial_iterative(n):
  result = 1
  for i in range(1, n+1):
    result *= i
  return result

def fibonacci(n):
  if n <= 2:
    return 1
  return fibonacci(n-1) + fibonacci(n-2)
