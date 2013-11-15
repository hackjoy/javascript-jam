# Assignment:
#============================================================================================================
number   = 42
opposite = true


# If Else Conditions:
#============================================================================================================

# can be written without the use of parentheses and curly brackets

mood = greatlyImproved if singing

if happy and knowsIt
  clapsHands()
  chaChaCha()
else
  showIt()

date = if friday then sue else jill


# Functions:
#============================================================================================================
square = (x) -> x * x
cube   = (x) -> square(x) * x

# if liquid not provided then it is defaulted to 'coffee'
fill = (container, liquid = "coffee") ->
  "Filling the #{container} with #{liquid}..."


# Arrays:
#============================================================================================================

# Single line array
list = [1, 2, 3, 4, 5]
song = ["do", "re", "mi", "fa", "so"]


bitlist = [
  1, 0, 1
  0, 0, 1
  1, 1, 0
]

# Objects:
#============================================================================================================

# Single line objects
singers = {Jagger: "Rock", Elvis: "Roll"}

# Multiline objects
kids =
  brother:
    name: "Max"
    age:  11
  sister:
    name: "Ida"
    age:  9

math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x


# Splats / Variable Number of Arguments
#============================================================================================================
race = (winner, runners...) ->
  print winner, runners


# Array comprehensions:
#============================================================================================================
cubes = (math.cube num for num in list)


# Loops and Comprehensions
#============================================================================================================

# calls eat(food) for each food in list
eat food for food in ['toast', 'cheese', 'wine']

# Fine five course dining.
courses = ['greens', 'caviar', 'truffles', 'roast', 'cake']
menu i + 1, dish for dish, i in courses

# calls eat(food) for each food in list EXCEPT chocolate
foods = ['broccoli', 'spinach', 'chocolate']
eat food for food in foods when food isnt 'chocolate'

# loop with conditional action
shortNames = (name for name in list when name.length < 5)

# range loop
countdown = (num for num in [10..1])
# range loop -- stepped example
evens = (x for x in [0..10] by 2)


# hash loop
yearsOld = max: 10, ida: 9, tim: 11

ages = for child, age of yearsOld
  "#{child} is #{age}"



# Lexical Scoping and Variable Safety
# The CoffeeScript compiler takes care to make sure that all of your variables are properly declared within lexical scope — you never need to write  var yourself.

outer = 1
changeNumbers = ->
  inner = -1
  outer = 10              # amends the outer inside changeNumbers but it's still and outer variable
inner = changeNumbers()










