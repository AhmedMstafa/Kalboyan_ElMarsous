# Create a loop using the for keyword in Python.
# Loops are handy, if you want to run the same code over and over again, each time with a different value
# Often this is the case when working with arrays or list in python 

spices = [
    'salt',
    'pepper',
    'cumin',
    'turmeric',
]
# the varibel name can be anything like "spice"
# "in" indicates that what follows is the set of values that we to iterate through

for spice in spices:
    print(spice)
# indentation makes that statemet patr of the for loop.

# remove indentation to takes the statement out of the loop.
print('No more boring omelettes!')