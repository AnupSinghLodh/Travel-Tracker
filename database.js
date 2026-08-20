import { Client } from 'pg'

const db = new Client({
    host: 'ep-frosty-mountain-axmtt43r-pooler.c-4.us-east-2.aws.neon.tech',
    database: 'neondb',
    user: 'neondb_owner',
    password: 'npg_ScbA3nNC1lkw',
    ssl: {
        rejectUnauthorized: false // Tells Node to accept Neon's cloud certificate
    }
});

db.connect();

async function getAllCountriesDetails() {
  try {
    const countries = await db.query("SELECT * FROM countries");
    return countries.rows;

  } catch (error) {
    console.error("Error in executing the query in getAllCountriesDetails !", error.detail);
  } 
}
async function getVisitedCountriesDetails() {
  try {
    const visitedCountries = await db.query("SELECT * FROM visited_countries");
    return visitedCountries.rows;
  } catch (error) {
    console.error("Error in executing the query in getVisitedCountriesDetails !", error.detail);
  } 
}

async function modifyVisitedCountriesDetails(queryText, values = []) {
    await db.query(queryText, values);
}

 
export {
  getAllCountriesDetails, 
  getVisitedCountriesDetails,
  modifyVisitedCountriesDetails
};




