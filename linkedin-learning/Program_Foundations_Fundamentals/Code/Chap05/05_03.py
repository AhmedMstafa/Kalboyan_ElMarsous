# Add variable in function .
# inside open and close parentheses then include amount_paid.
# this variable has a special name , a parameter.
# parameter allow funciton to change their behavior based on some input.
# arguments as the name we use for the values that we giv to our function.

def wash_car(amount_paid):
    if(amount_paid == 12):
        print("Wash with tri-color foam")
        print("Rinse twice")
        print("Dry with large blow dryer")
    if (amount_paid == 6):
        print("Wash with white foam")
        print("Rinse once")
        print("Air dry") 

wash_car(6)