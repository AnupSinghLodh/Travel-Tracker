import express from "express";
import bodyParser from "body-parser";
import { getAllCountriesDetails, getVisitedCountriesDetails, modifyVisitedCountriesDetails } from './database.js'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited() {
  let countries = [];
  const visitedCountriesData = await getVisitedCountriesDetails();

  visitedCountriesData.forEach(country => {
    countries.push(country.country_code)
  });

  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisited();
  res.render("index.ejs", { countries: countries, total: countries.length});
});

app.post("/add", async(req, res) => {
  const input = req.body["country"];
  
  try {
    const countriesData = await getAllCountriesDetails();
    const input_country = countriesData.find((country) => country.country_name === input);
    
    if(input_country){
      const queryText = "INSERT INTO visited_countries(country_code) VALUES($1)";
      await modifyVisitedCountriesDetails(queryText, [input_country.country_code]);
    }
    res.redirect("/");
  } catch (error) {
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: `${input} has already been added, try for different country name.`
    })
  }
})

app.post("/delete", async(req, res) => {
  const input = req.body["country"];

  try {
    const countriesData = await getAllCountriesDetails();

    const input_country = countriesData.find((country) => country.country_name === input);
    if(input_country){
      const countries = await checkVisited();

      const countryExist = countries.includes(input_country.country_code);
      
      if(countryExist) {
        const queryText = "DELETE FROM visited_countries WHERE country_code = $1"
        await modifyVisitedCountriesDetails(queryText, [input_country.country_code]);
      } else {
        throw err;
      }
    }
    res.redirect("/");
  } catch (error) {
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: `${input} does not exist in Your visited list, try for different country name.`
    })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
