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
const initalState = {
  posts: [],
  post: {
    title: '',
    message: '',
    creator: '',
    file: '',
  }
};

const reducer = (state = initalState, action) => {
  console.log('reducer ', state, action);  
  switch(action.type) {
    case 'GET_POSTS':
      return { 
        ...state,
        posts: action.payload,
      };
    case 'CREATE_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
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
    case 'CHANGE_FILE':
      return {
        ...state,
        post: {
          ...state.post,
          file: action.payload
        }
      }  
    default:
      return state;  
  }
};

export default reducer;