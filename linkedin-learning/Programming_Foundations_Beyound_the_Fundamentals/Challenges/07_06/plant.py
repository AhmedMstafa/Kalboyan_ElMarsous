# Challenge: Debugging

# def plant_recommendation(care):
#     if care = "low":        # 1 syntax error
#         print("aloe")
#     elif care == "medium":
#         print("medium")
#     elif care == "medium":  # 2 loigc error
#         print("orchid")


# plant_rec("low")            # 3 runtime error
# plant_recommendation("medium")
# plant_recommendation("high")

################################################

def plant_recommendation(care):
    if care == "low":
        print("aloe")
    elif care == "medium":
        print("pothos")
    elif care == "high":
        print("orchid")


plant_recommendation("low")
plant_recommendation("medium")
plant_recommendation("high")

