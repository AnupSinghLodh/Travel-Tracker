## Travel Tracker

Travel Tracker is a simple full-stack web app that lets users record the countries they have visited. It uses PostgreSQL for data persistence, Express.js for the backend server, and EJS for rendering the frontend view.

### Features
- Add countries to a visited list
- Remove countries from the list
- View the total number of visited countries
- Prevent duplicate entries
- Display friendly validation messages for invalid actions

### Tech Stack
- Node.js
- Express.js
- PostgreSQL
- EJS
- Body Parser
- pg (PostgreSQL client for Node.js)

### Project Structure
- `index.js` – server setup and routes
- `database.js` – database connection and queries
- `index.ejs` – main UI
- `main.css` – styling
- `package.json` – project dependencies and scripts

### Installation
1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:
   ```bash
   npm install
   ```
4. Make sure PostgreSQL is running and configure your database connection in `database.js`
5. Start the app:
   ```bash
   node index.js
   ```
6. Open:
   ```bash
   http://localhost:3000
   ```

### Usage
- Enter a country name in the input field and submit to add it to your visited list.
- Use the delete option to remove a country.
- The app will update the total count automatically.

### Notes
This project is a practical example of integrating a backend with a database to build a small travel tracking application.

If you want, I can also write a more professional README in GitHub style with:
- badges
- screenshots placeholder
- installation + environment variables
- database schema section
- license section
