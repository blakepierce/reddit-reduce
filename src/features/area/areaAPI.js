const baseURL = "https://www.reddit.com"

// Async function for fetching posts using a subreddit's' url path
export const getPosts = async (URLPath) =>  {
    // defines url using path parameter and baseURL
    const url = `${baseURL}/${URLPath}.json?limit=25&include_over_18=off&sort=relevance`;
    
    // Fetches response and converts to JSON
    const response = await fetch(url);
    const json = await response.json();

    // Extracts the part of the data that contains the posts and returns as an array
    return json.data.children.map((post) => post.data);
};

export const getResults = async (searchTerm) =>  {
    // defines url using path parameter and baseURL
    searchTerm = searchTerm.replace(/ /g,"%20");
    const url = `${baseURL}/search.json?q=${searchTerm}&limit=25&include_over_18=off&sort=relevance`;
    
    // Fetches response and converts to JSON
    const response = await fetch(url);
    const json = await response.json();

    // Extracts the part of the data that contains the posts and returns as an array
    return json.data.children.map((post) => post.data);
};

// Async function for fetching a post's comments using a post's permalink
export const getComments = async (permalink) =>  {
    // defines url using path parameter and baseURL
    const url = `${baseURL}${permalink}.json?limit=25&include_over_18=off&sort=relevance`;
    
    // Fetches response and converts to JSON
    const response = await fetch(url);
    const json = await response.json();

    // Selects comments section of json
    const commentsArray = json[1].data.children.map((post) => post.data);

    // Removes last item in commentsArray (not a comment)
    commentsArray.pop();
    // Returns array of Comments
    return commentsArray;
};