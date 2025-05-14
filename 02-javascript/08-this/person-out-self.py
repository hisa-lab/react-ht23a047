class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Hi, I'm " + self.name)

minky = Person("Mono")
greet(minky)
Person.greet = greet
minky.greet()
