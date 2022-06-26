import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts, getResults } from './areaAPI';

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
  getPostsFailed 
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
    
    // Dispatches action with posts to the Store
    dispatch(getPostsSuccess(posts));
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

// Export reducers
export default areaSlice.reducer;
