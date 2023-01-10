# string methods
# referce the string followed by dot and method name.

first_name = 'malala'
last_name = 'yousafzai'
note = 'award: Nobel Peace Prize'

# transfom those names into names with intial caps.
first_name_cap = first_name.capitalize()
last_name_cap = last_name.capitalize()
# print both of those valus
print(first_name_cap)
print(last_name_cap)

# The Find method returns the location of the start 
# of the text i searche for within the string
award_location = note.find('award: ')
print(award_location)


# Slicing => Getting part of a string value 
# in python we dont need method for this 
# we use some thing calle slice notation.
award_text = note[7:]
print(award_text)