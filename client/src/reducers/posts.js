const initalState = {
  posts: [],
  post: {
    title: '',
    message: '',
    creator: '',
  }
};


/*title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
  */

const reducer = (state = initalState, action) => {
  console.log('reducer ', state, action);

  switch(action.type){
    case 'ADD_POST':
      return {
        ...state, 
        posts: [...state.posts, state.post],
      };
    case 'CHANGE_TITLE':
      return {
        ...state,
        post: {
          ...state.post,
          title: action.payload
        }
      }  
    case 'CHANGE_MESSAGE':
      return {
        ...state,
        post: {
          ...state.post,
          message: action.payload
        }
      }  
    case 'CHANGE_CREATOR':
      return {
        ...state,
        post: {
          ...state.post,
          creator: action.payload
        }
      }  
    default:
      return state;  
  }
};

export default reducer;