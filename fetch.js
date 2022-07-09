const getRequest = async (URL) => {
    const response = await fetch(URL);
    return response;
}

const url = "https://reddit.com";
const result = getRequest(url);

// should return a promise when using a 'fetch' function on a url

//JSON always in caps
