# Creating custom classes and objects

# 1 Creating class with the keyword class.
class Attendee:
    "Common base class for all attendees"

# 2 def __init__ is known as a constructor function
    def __init__(self, name, tickets):
        self.name = name
        self.tickets = tickets

# 3 the remaining def statements in my class,
# define motheds that become part of any object that i create, based on that class.

# 4 the first one prints Name and Tickets value for the current object.
    def displayAttendee(self):
        print("Name : {}, Tickets: {}".format(self.name, self.tickets))


# 5 the cecond addTicket alows me to increase the number of tickets by one.
    def addTicket(self):
        self.tickets += 1
        print("{} tickets increased to {}".format(self.name, self.tickets))




# use the Attendee class :

attendeel = Attendee("B. Giles", 2)
attendee2 = Attendee("j. Ortiga", 1)

attendeel.displayAttendee()
attendee2.displayAttendee()

attendeel.addTicket()
attendee2.addTicket()