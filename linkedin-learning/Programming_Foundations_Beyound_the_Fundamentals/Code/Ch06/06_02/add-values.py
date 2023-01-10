# program reads input from an external file performs some processing,
# and then writes output to another file.


# open() to open file in the same folder as the program file,
# when a file doesn't exist, python will create it.
infile = open('values.txt', 'rt')
outfile = open('values-totaled.txt', 'wt')
print('Processing input')
sum = 0

# the for loop taking one line of the input file at a time (one number)as string.
for line in infile:
    # converting that to an integer and then adding it to the sum variable,
    # in the end the sum variable contain the total of all the numbers.
    sum += int(line)


# printing the current line with any line ending character stripped out in outfile.
# returns a copy of the string with trailing characters removed,
# (based on the string argument passed). If no argument is passed, it removes trailing spaces.
    print(line.rstrip(), file=outfile)


print('\nTotal: ' + str(sum), file=outfile)



# .close()  indicates that the program is finished writing
outfile.close()
print('Output complete')
