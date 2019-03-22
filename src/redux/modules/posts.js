let nextPostId = 0;

// Action Creator
export const addPost = text => ({
    type: 'ADD_POST',
    id: nextPostId++,
    text
});

export const deletePost = id =>({
    type: 'DELETE_POST',
    id
});

const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case 'DELETE_POST':
            return state.map(post =>
                post.id === action.id ? {} : post,
            );
        default:
            return state;
    }
}

export default posts;
