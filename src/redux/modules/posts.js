export default posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
          return [
              ...state,
              {
                  id: action.id
              }
          ];
        case '':
          return [

          ];
        default:
          return state;
    }
}