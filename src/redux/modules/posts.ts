export default posts = (state = [], action: any) => {
    switch (action.type) {
        case '':
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