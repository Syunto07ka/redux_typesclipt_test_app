let nextPostId = 0;

// Action Creator
export const addPost = input => ({
    type: 'ADD_POST',
    id: nextPostId++,
    content: input.content,
    name: input.name,
});

export const deletePost = id =>({
    type: 'DELETE_POST',
    id
});

export const editPost = post =>({
    type: 'EDIT_POST',
    id: post.id,
    content: post.content,
    name: post.name,
});

// reducer
const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content,
                    name: action.name,
                }
            ];
        case 'DELETE_POST':
            return state.map(post =>
                post.id === action.id ? {id: post.id} : post,
            );
        case 'EDIT_POST':
            return state.map(post =>
                post.id === action.id ? {content: post.content, name: post.name} : post,
            );
        default:
            return state;
    }
}

export default posts;
