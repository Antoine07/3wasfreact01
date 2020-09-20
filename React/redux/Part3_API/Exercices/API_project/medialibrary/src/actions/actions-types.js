import {
   LOADING,
   SET_ERROR,
   FETCH_AUTHORS,
   AUTHORS_API_URL,
   SHOW_DETAILS,
   SET_CHOICE,
   ADD_CHOICE
} from '../constants/actions';

import axios from 'axios';

// reducer authors
export const add_authors = payload => {
    return {
        type: FETCH_AUTHORS, payload
    };
}

export const show_details = payload => {
    return {
        type: SHOW_DETAILS, payload
    };
}

export const set_choice = payload => {
    return {
        type: SET_CHOICE, payload
    };
}

export const add_choice = () => {
    return {
        type: ADD_CHOICE
    };
}

// reducer load
export const set_loading = payload => {
    return {
        type: LOADING, payload
    };
}

// reducer error
export const set_error = payload => {
    return {
        type: SET_ERROR, payload
    };
}

export const load_authors = () => {
    
    return dispatch => {

       const fetchAuthors =  async () => {
            try {
                const headers = {
                    'Content-Type': 'application/json'
                };

                dispatch(set_loading(true));
                const { data } = await axios.get(`${AUTHORS_API_URL}/authors`, headers);
                const { authors, success } = data;

                if( success === false ) throw new Error("Axios API authors");

                dispatch(add_authors(authors));
                dispatch(set_loading(false));

            } catch (err) {
                console.error("Axios load_authors :", err);
                dispatch(set_error({error : "API Fixer load_authors", date : "Now" }));
            } 
        };

        fetchAuthors();
    };
};
