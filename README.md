# GROUP-8 SILENT AUCTION

- Name: Silent Auction Web App in MERN Stack
- Course: CSIS 3380-002
- Assignment: Final Group Project
- Group: 8
- Members: Alisha Alisha, Efe Awowede, Arda Kafali


DETAILS:
-----------------------------------------
- All user can enter the site and see all the items in auction.
- The auction items are recorded in Mongo database.
- In order to bid in auction, user has to sign up / login
- In order to add or delete items, user has to be ADMIN.
- Backend has various controls and validation for sign up and login procedures
- When a logged in user bids, backend checks if the bid is proper or not (bigger than last bid etc...). If confirmed, the new bid will be registered to the bidding history of that specific item.
- All items have their own bidding history in the database.
- The total amount of all bids is shown in the header of the web page.
- The /item urls are related to items API.
- The /user urls are related to authentication, sign up, login API.


API ENDPOINTS:
-----------------------------------------
GET /items --> gives all items in auction<br>
POST /items --> add a new item<br>
GET /items/:id --> gives a specific item with more details<br>
PATCH /items/:id --> adds a new bid to a specific item<br>
DELETE /items/:id --> delete an item<br>
POST /user --> sign up new account<br>
GET /user --> login


TO-DO (07.07.2024):
-----------------------------------------
- Actual authentication / sign up / login procedure to be implemented.
- try to add bidding deadline
- Finalize frontend design
- Implement frontend with React


PROGRESS (07.07.2024):
-----------------------------------------
- Create folder structure as "server" and "frontend" inside main app folder.

- SERVER (EXPRESS)
- initiate node app, install express, dotenv
- add {"dev": "node --watch server.js"} script to 'package.json'
- create '.env' file
- add PORT data into .env for express server
- create 'server.js', write the code in it and run express server
- create 'routes' folder.
- create 'itemsRouter.js' in routes folder and implement routes related to items to this file.
- import items router to 'server.js' and implement it.
- create a new project and a new cluster in mongodb.com
- install mongoose in server folder // or 'mongodb' but bit more complicated to use
- add Mongo credential details in .env file and use them in server.js where needed
- implement database connection with mongoose into server.js
- create 'models' folder
- create 'itemModel.js' file in models folder and implement the item model in it.
- create 'controllers' folder.
- create 'itemControllers.js' in controller folder and implement CRUD operations into it.
- to get rid of CORS problem,install cors and import&implement it to the server.js

- FRONTEND (REACT)
- create new react project by vite under name 'frontend'
- clean the default vite files and code
- install 'react-router-dom' in frontend folder
- do the css file (here we prefered 'styles.css' that is being imported to 'main.jsx')
- create 'pages' folder
- create the page templates and put them into pages folder
- create 'components' folder
- create components to be used in page templates into components folder
- create 'useEffect' functions in page files to fetch data from backend

PROGRESS (14.07.2024):
-----------------------------------------
- Implemented frontend with React

TO-DO (14.07.2024):
-----------------------------------------
- Implement Progress Bar Target and Goal
- Add Team Member Images
- Improve frontend design and UX

