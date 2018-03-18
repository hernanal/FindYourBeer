import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BrewsReducer from './brews_reducer';
import BrewDetailReducer from './brew_detail_reducer';
import ModalReducer from './modal_reducer';


const rootReducer = combineReducers({
  brews: BrewsReducer,
  form: formReducer,
  brew: BrewDetailReducer,
  showModal: ModalReducer
});
debugger;
export default rootReducer;
