const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=30c81c6d5afd4b2297cea209487b0a4b";

const resultContainer = document.querySelector (".results")

function createHTML (content) {
    console.log (content);
    resultContainer.innerHTML="";
    for (let i=0; i< content.length; i++){
        if (i===8) {
            break
        }
        resultContainer.innerHTML+= `<div class="result">
         Name: ${content[i].name} <br>
         Rating: ${content[i].rating} <br>
         Number of tags: ${content[i].tags.length}
        </div>`
    }
}

async function getUsers () {
    try {
        const response = await fetch (url);
    const results= await response.json();
    const content= results.results;
    createHTML (content);
    }
    catch (error) {
        resultContainer.innerHTML = displayError("An error occurred");
    }
}

getUsers();

function displayError (message= "Unkonwn error") {
    return `<div class="eroor"> ${message}</div>`
}