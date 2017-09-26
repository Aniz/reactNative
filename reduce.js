
const initialState = {
  text: "",
  list: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'addList':
        return [...state.list,action.item];
    
    case 'inputItem':
        return [action.item];
    
    case 'cleanList':
        return [];

    default:
      return state;
  }
}