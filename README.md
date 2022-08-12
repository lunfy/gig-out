# Gig-Out!
Gig-Out! simulates the basic functionalities of a platform where users can do job postings online with control to edit and remove their own posts. Posts that have been updated will also be higher on the main page to simulate the latest acitivties happening on the site.

## Features

 1. **User Management**
	 - Registration
	 - Login
	 - Account Deletion

2. **Content Creation**
	- Posting Gig Requests
	- Editing own Gig posts
	- Deletion of own Gig posts

3. **Content Display**
	- Index of all Gig Posts by everyone
	- Index of your own posts
	- Showing individual post
	- 3 posts with latest updates will always be features on Main Page

## Technical Details
**Dependencies**
  - CSS Framework: Bulma
  - joi, @joi/date
  - bcrypt
  - commitizen
  - dotenv
  - ejs
  - express
  - express-session
  - method-override
  - mongoose
  - Middlewares: express.urlencoded, express.static, authMiddleware.js

**Routes**
| HTTP | Requests |
|--|--|
| / | GET |
| /register | GET, POST |
| /login | GET, POST |
| /main |  GET |
| /main/logout | POST |
| /profile | GET, DELETE |
| /profile/:id | PUT |
| /gigs | GET |
| /gigs/:id | GET  |
| /gigs/edit | GET |
| /gigs/edit/:id | PUT |
| /newgig | GET |
| /newgig | POST |
| /seed | GET |
<br>

**Validators**
  - gigs.js
  - users.js

**Models**
  - Gig Schema (12 properties)
  - Users Schema (6 properties)

**Views**

**Pages**
  - edit_gig.ejs
  - login.ejs
  - main.ejs
  - newgig.ejs
  - profile.ejs
  - register.ejs
  - show_gig.ejs
  
**Partials**
  - head.ejs
  - header.ejs

**Controllers**
- gig_controller.js
- pages_controller.js
- user_controller.js

## Challenges
1. Realized mid-way that Bulma has no javascript library provided, hence I had to write vanilla javascript in order to use the components and elements they had like a mobile-responsive navbar and tabs. YouTube was my best friend

2. I really suck at UI/UX design. Need to start on basic lessons in that to create visually-pleasing views. Any suggestions?

3.  Learnt that when setting `<input type="date">` values, I really have to follow the formatting of YYYY-MM-DD

## Improvements
1. Overall outlook and design of site
2. Allow profile editing with image upload to database using multer + gridFS
3. Use socket.io for chat/messaging function
4. Need to commit more often
