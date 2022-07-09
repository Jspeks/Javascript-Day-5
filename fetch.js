const getRequest = async (URL) => {
    const response = await fetch(URL);
    return response;
}

const url = "https://reddit.com";
const result = getRequest(url);

// should return a promise when using a 'fetch' function on a url

//JSON always in caps

// example
async function getPets(){
    let response = await response.json()
    let result = await response.json()
    console.log(result)
}

// •GET: Retrieves data
// •POST: Adds new data
// •PATCH: Updates data
// •PUT: Replaces data
// •DELETE: Removes data