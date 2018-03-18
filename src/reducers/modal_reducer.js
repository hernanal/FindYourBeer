import { SHOW_MODAL, CLOSE_MODAL } from '../actions';

export default function(state = false, action) {
    debugger;
    switch(action.type) {
        case SHOW_MODAL:
            return true;
        case CLOSE_MODAL:
            return false;
        default:
            return state;
    }
}