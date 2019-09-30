## SWBATs
- Understand, theoretically how authentication works
- Understand theoretically how authorization work
- Implement Sign in vs sign up
- Review sessions, cookies
- Implement log in, and log out

## Authentication && Authorization
1. What is authentication?
  - verifying something is what you think it is
  - paintings -> forgery vs OG
  - MONEY
  - CERTIFICATES
  - Thomas Crown Affair -> Movie recommendation
  - The Emperors Soul -> Book recommendation
  - IS the teacher( username) who they say they are.

2. What is authorization?
  - what am I allowed to do
  - boolean -> you do or you don't
  - status of yes or no
  - partial authorization
  - levels of authorization
  - multiple booleans
  - POWER

## User Stories
1. As a registered teacher, I should be able to sign up by providing my username.
  - need a new page that will render new form
  - create to add that teacher to by DB
  - add a teacher model to my website
  - verify that the email is a unique email.

2. As a registered teacher, I should be able to log in by providing my username.
  - view
  - form
  - validation, that their email address and username matches the file(DB).
  - Yo, You don't exist if not.
  - Students don't care about teacher, nor does cohort.
  - Maybe teacher doesn't care either.
  - user login class to login user.
  - create a new auth controller to manage a login for a teacher.
        -> Authentication
        -> login action
        -> verification action
  - create a login path

3. As an un-authenticated teacher, I should not be able to see a list of students and information about an individual student.

4. As an authenticated teacher I should be able see a list of students and information about an individual student plus create a new student.

5. If an un-authenticated teacher tries to see the new student form, they should be redirected to the login page.

6. I should be able to add a password   to my site and validate teacher.
  - Discuss different encryption and  hashing schemes
  - For Example : `Digest::SHA256.base64digest`
    - deterministic: same input => same   output
    - introduce `bcrypt`
    - `BCrypt::Password.create`
    - `has_secure_password` macro
    - Augment a teacher model in rails using   `bcrypt`

## Resources
##### Password Authentication Guidelines

- install gem `bcrpyt`
- you don't store passwords as plain text
  - add a password_digest column.
  - add `has_secure_password` to the model with the password.
- at signin use the bcrypt authenticate method to confirm that the password matches
- password hashing is one-way encryption (we never decrypt it)

- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
"README.md" 41L, 1628C
