import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case FETCH_POST:
      // AND ALL OF THIS CAN BE JUST TRANSFORMED IN:
      return { ...state, [action.payload.data.id]: action.payload.data.id };
    // this is not an array, it is interpolation , whatever is id, create a key with that
    default:
      return state;
  }
}
