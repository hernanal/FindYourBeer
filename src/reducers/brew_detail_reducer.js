import { GET_BREW_DETAIL } from '../actions';

export default function(state = {}, action) {
    debugger;
    switch(action.type) {
        case GET_BREW_DETAIL:
            return action.payload.data;
        default: 
            return state;
    }
}

