def welcome():
  print('Welcome to the Caesar Cipher')
  print('This program encrypts and decrypts text with the Caesar Cipher')

welcome()

def enter_message():
  while True:
    # Prompt user to select a mode
    mode = input("Would you like to encrypt (e) or decrypt (d): ")
    if mode !='e' and mode!='d':
      print('Invalid mode')
      continue

    if mode =='e':
      message=input("What message would you like to encrypt:")
      #To convert the entered message into uppercase
      message=message.upper()
      
    elif mode =='d':
      message=input("What message would you like to decrypt:")
      #To convert the entered message into uppercase
      message=message.upper()

    return mode, message

def encrypt(message, shift):
  
  # Encrypt the message 
  output = ""
  for letter in message:
    if letter.isalpha():
      # Get the ASCII code of the letter
      alphabhet = ord(letter)

      # Shift the ASCII code
      alphabhet += shift

      # Handle the encryption if letter becomes greater tha Z
      #if letter.isupper():
      if alphabhet > ord('Z'):
        alphabhet -= 26

      # Add the encrypted letter to the output
      output += chr(alphabhet)
    else:
      # Add non-letter characters to the output unchanged
      output += letter

  return output

def decrypt(message, shift):
  # Decrypt the message using Caesar cipher
  output = ""
  for letter in message:
    if letter.isalpha():
      # Get the ASCII code of the letter
      alphabhet = ord(letter)

      # Shift the ASCII code
      alphabhet -= shift

      # Handle the decryption if letter becomes lesser than A
      if alphabhet < ord('A'):
        alphabhet += 26

      # Add the decrypted letter to the output
      output += chr(alphabhet)
    else:
      # Add non-letter characters to the output unchanged
      output += letter

  return output

def main():
  while True:
    # Get the mode and message from the user
    mode, message = enter_message()

    # Prompt user for shift number
    shift = int(input("Enter the shift number: "))

    # Encrypt or decrypt the message
    if mode == 'e':
      output = encrypt(message, shift)
    else:
      output = decrypt(message, shift)

    # Print the output
    print("Output:", output)

    # Prompt user to go again
    again = input("Encrypt or decrypt another message? (y/n) ")

    # Check if the user wants to go again
    if again != 'y':
      break
  print('Thanks for using the program, goodbye!')

main()
