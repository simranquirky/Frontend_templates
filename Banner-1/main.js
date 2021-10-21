
const arr = [
    {
        flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
        country : "Germany",
        population : "81,770,990",
        region : "Europe",
        capital : "Berlin"
    },
    {
        flag : "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
        country : "Italy",
        population : "66,525,470",
        region : "Europe",
        capital : "Rome"
    },
    {
        flag : "https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png",
        country : "France",
        population : "53,272,110",
        region : "Europe",
        capital : "Paaris"
    },
    {
        flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/2560px-Flag_of_Malaysia.svg.png",
        country : "Malaysia",
        population : "827,090",
        region : "Asia",
        capital : "Kuala Lampur"
    }
]


for(let item of arr){

const countryName = document.createElement("div");
countryName.innerText = item.country;
countryName.setAttribute("style", "font-weight:bold;margin-bottom:1.1rem;");

const population = document.createElement("div");
population.innerText = "Population: "+item.population;
population.setAttribute("style", "margin-bottom:.2rem;");

const region = document.createElement("div");
region.innerText = "Region: "+item.region;
region.setAttribute("style", "margin-bottom:.2rem;");

const capital = document.createElement("div");
capital.innerText = "Capital: "+item.capital;
capital.setAttribute("style", "margin-bottom:.2rem;");

const container = document.createElement("img");
container.setAttribute(
  "src",
  item.flag
);

const infoContainer = document.createElement("div");
infoContainer.append(countryName, population, region, capital);

const parentContainer = document.createElement("div");

container.setAttribute("style", "height:10rem;");

parentContainer.setAttribute(
  "style",
  "background:white;width:15rem;border-radius:5px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;overflow:hidden;margin-bottom:2rem;"
);

infoContainer.setAttribute("style", "padding:1rem;");

parentContainer.append(container, infoContainer);
document.body.append(parentContainer);

parentContainer.style.background = "white";
document.body.style.background = "whitesmoke";

}
