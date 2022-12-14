const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 1, message: "Hellow its my first post", likesCount: 17},
        {id: 2, message: 'Hello wi all dieng', likesCount: 21},
        {id: 3, message: 'In this fucking world war', likesCount: 11},
        {id: 4, message: 'Russia come', likesCount: 44},
        {id: 5, message: 'Run', likesCount: 98},
        {id: 6, message: 'Away', likesCount: 113}
    ],
    newPostText: 'new post from state',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_POST, newText: text})

export default profileReducer;