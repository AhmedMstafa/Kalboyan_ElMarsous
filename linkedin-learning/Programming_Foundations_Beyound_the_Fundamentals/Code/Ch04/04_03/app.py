# Regular Expression (Regex)
# can be made up of letters, numbers , special characters
# but within a regular expression each character has a specific meaning
# and you can put them to gether to describe exactly what you need.

# inmport re module,
# for creating and working with regular expressions.
import re


five_digit_zip = '98101'
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'

# write regular expression that will identify whether variable contains five digits in a row
# which is the minimum for a us zip code.
five_digit_expression = r'\d{5}'

# compare with strings
print(re.search(five_digit_expression, five_digit_zip))
print(re.search(five_digit_expression, nine_digit_zip))
print(re.search(five_digit_expression, phone_number))