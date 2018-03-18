import axios from 'axios';

export const GET_BREWS = 'get_brews';
export const GET_BREW_DETAIL = 'get_brew_detail';
export const ADD_BREW = 'add_brew';
export const SHOW_MODAL = 'show_modal';
export const CLOSE_MODAL = 'close_modal';

const ROOT_URL = 'http://localhost:8080';
// const config = {
//     headers: {'Access-Control-Allow-Origin': ' * '}
// };

export function getBrews() {
    const request = axios.get(`${ROOT_URL}/beers`);

    return {
        type: GET_BREWS,
        payload: request
    }
}

export function addBrew(values, callback) {
    const brew = {
        name: values.name,
        brewery: values.brewery,
        breweryLocation: values.breweryLocation,
        style: values.style,
        abv: values.abv,
        ibu: values.ibu,
        hops: values.hops,
        malt: values.malt,
        yeast: values.yeast,
        color: values.color,
        imageUrl: values.imageUrl,
        ranking: values.ranking,
        purchaseAgain: values.purchaseAgain
    }

    // Change this post call to a constant called request
    // Pass the entire request to the reducer
    // Change the manipulation of the state in the reducer
    axios.post(`${ROOT_URL}/beer/add`, brew)
        .then(() => callback());
    
    return (
        {
            type: ADD_BREW,
            payload: brew
        }
    );
}

export function getBrew(id) {
    
    const response = axios.get(`${ROOT_URL}/beer/` + id);
    return (
        {
            type: GET_BREW_DETAIL,
            payload: response
        }
    );
}

export function showModal() {
    debugger;
    return (
        {
            type: SHOW_MODAL
        }
    );
}

export function closeModal() {
    return (
        {
            type: CLOSE_MODAL
        }
    );
}