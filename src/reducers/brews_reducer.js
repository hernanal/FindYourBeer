import _ from 'lodash';
import { GET_BREWS, ADD_BREW } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_BREWS:
            // Refactor data from the server so that each brew object has a key that 
            // corresponds to its ID
            return _.mapKeys(action.payload.data, 'id');
        case ADD_BREW:
            return [ ...state, action.payload ];
        default: 
            return state;
    }
}

