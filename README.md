# Password Generator

A simple command-line tool for generating random passwords. Defaults to 8 character, lowercase passwords.
Use a combination of characters to mix which character categories can be used together.

## Options
### --[num]
Sets the password length (e.g., --8).

### --a
Includes all character types.

### --l
Includes lowercase letters.

### --u
Includes uppercase letters.

### --n
Includes numbers.

### --s
Includes special characters.

## You can combine flags:
```bash 
--lu (lowercase + uppercase)
--un (uppercase + numbers)
--lsu (lowercase + uppercase + special characters)
--lusn (all character types)
```

## Examples
10-character password with default character set.
```bash
node password-generator --10
```

6-character password with lowercase + uppercase.
```bash
node password-generator --6 --lu
```

Generates an 8-character password with all types.
```bash
node password-generator --a
```