import * as redux from 'redux';

//Action

export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
export const GET_VALUES = 'get/values';

const initialValue = {
  count:0,
  userList : [{name:"Arul",age:43},{name:"Venkat", age:38}]
}
//Reducer
const reducer = (state = initialValue,action) => {
  switch(action.type){
    case COUNTER_INCREMENT : {
      return {...state, count:state.count + 1};
      break;
    }

    case COUNTER_DECREMENT: {
      return {...state, count:state.count - 1};
      break;
    }
    case GET_VALUES: {
      return {...state.userList};
      break;
    }
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
export default store;
