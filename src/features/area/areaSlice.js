import { createSlice } from '@reduxjs/toolkit';
import { getPosts, getResults, getComments } from './areaAPI';

// Defines Initial State
const initialState = {
  searchTerm: "",
  currentArea: "",
  areaName: "This is Reddit.reduce()",
  firstState: true,
  isLoading: false,
  error: false,
  posts: []
};

// Create main slice
export const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCurrentArea: (state, action) => {
      state.currentArea = action.payload
    },
    setAreaName: (state, action) => {
      state.areaName = action.payload;
    },
    setFirstState: (state, action) => {
      state.firstState = action.payload;
    },
    startGetPosts: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    getPostsSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailed: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    toggleShowingComments: (state, action) => {
      state.posts[action.payload].showingComments = !state.posts[action.payload]
        .showingComments;
    },
    // Dispatched by clicking title of post - payload is the post's index
    startGetComments: (state, action) => {
      // Toggle showingComments status
      state.posts[action.payload].showingComments = !state.posts[action.payload]
        .showingComments;

      // If not showingComments, return
      if (!state.posts[action.payload].showingComments) {
        return;
      }
      // Else, set status to loading, no error
      state.posts[action.payload].loadingComments = true;
      state.posts[action.payload].error = false;
    },
    getCommentsSuccess: (state, action) => {
      state.posts[action.payload.index].loadingComments = false;
      state.posts[action.payload.index].comments = action.payload.comments;
    },
    getCommentsFailed: (state, action) => {
      state.posts[action.payload].loadingComments = false;
      state.posts[action.payload].error = true;
    }
  },
});

// Export actions
export const { 
  setSearchTerm,
  setCurrentArea,
  setFirstState,
  setAreaName,
  startGetPosts,
  getPostsSuccess,
  getPostsFailed,
  toggleShowingComments,
  startGetComments,
  getCommentsSuccess,
  getCommentsFailed 
} = areaSlice.actions;

// Export selectors
export const selectSearchTerm = (state) => state.area.searchTerm;
export const selectCurrentArea = (state) => state.area.currentArea;
export const selectAreaName = (state) => state.area.areaName;
export const selectPosts = (state) => state.area.posts;
export const selectFirstState = (state) => state.area.firstState;
export const selectIsLoading = (state) => state.area.isLoading;
export const selectError = (state) => state.area.error;

// Thunk used to fetch posts via a know patch (either a subreddit or comment url)
export const fetchPosts = (path) => async (dispatch) => {
  try {
    // Sets isLoading to true
    dispatch(startGetPosts());

    // Utilizes API to get json data from Reddit
    const posts = await getPosts(path);

    // Add fields to each post for comments later on
    const postsWithComments = posts.map((post) => ({
      ...post,
      showingComments: false,
      loadingComments: false,
      errorComments: false,
      comments: []
    }))
    
    // Dispatches action with posts to the Store
    dispatch(getPostsSuccess(postsWithComments));
  } catch (error) {
    // Sets error to true
    console.log(error);
    dispatch(getPostsFailed());
  }
};

export const fetchResults = (searchTerm) => async (dispatch) => {
  try {
    // Sets isLoading to true
    dispatch(startGetPosts());

    // Utilizes API to get json data from Reddit
    const posts = await getResults(searchTerm);
    
    // Dispatches action with posts to the Store
    dispatch(getPostsSuccess(posts));
  } catch (error) {
    // Sets error to true
    console.log(error);
    dispatch(getPostsFailed());
  }
};

export const fetchComments = (index, permalink) => async (dispatch) => {
  try {
    // Sets loadingComments to true
    dispatch(startGetComments(index));

    // Utilizes API to get json data from Reddit
    const comments = await getComments(permalink);

    // Dispatches action with comments to the Store, sets loadingComments to false
    dispatch(getCommentsSuccess({ index, comments }));
  } catch (error) {

    // Sets errorComments to true, loadingComments to false
    dispatch(getCommentsFailed(index));
  }
 };
 

// Export reducers
export default areaSlice.reducer;
