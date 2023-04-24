export const API = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API}${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
};

export const getSubbreddits = async () => {
    const response = await fetch (`${API}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
};

export const getComments = async (link) => {
    const response = await fetch (`${API}${link}.json`);
    const json = await response.json();
    return json[1].data.children.map((subreddit) => subreddit.data);
}