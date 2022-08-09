const initalState = {
  posts: {
    title: '',
    story: '',
  },
};

const reducer = (state = initalState, action) => {
  console.log('reducer ', state, action);
  switch(action.type){
    case 'ADD_POST':
      return {
        ...state,
        posts: {
          ...state.posts,
          title: action.payload,
          story: action.payload
        }
      }
    default:
      return state;  
  }
};

export default reducer;