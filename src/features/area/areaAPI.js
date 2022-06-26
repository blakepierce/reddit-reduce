const baseURL = "https://www.reddit.com"

// Async function for fetching posts using a subreddit or comment's url path
export const getPosts = async (URLPath) =>  {
    // defines url using path parameter and baseURL
    const url = `${baseURL}/${URLPath}.json?limit=25`;
    
    // Fetches response and converts to JSON
    const response = await fetch(url);
    const json = await response.json();

    // Extracts the part of the data that contains the posts and returns as an array
    return json.data.children.map((post) => post.data);
};