# Creating test case

# to ensure that i', actually testing all of the possible use cases
#  and every line of my code in all of the possible combinations.




def check_temp(temp):
    if temp < 15:
        print("Wear a jacket")
    elif temp > 25 and temp <= 35:
        print("Pack a jacket")
    elif temp > 35:
        print("leave the jacket a home")
    



check_temp(10)
check_temp(32)
check_temp(40)
