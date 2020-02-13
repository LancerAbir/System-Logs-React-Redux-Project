import { SET_LOADING, GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR } from './types';


/* export const getLogs = () => {
    return async (dispatch) => {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payLoad: data
        })
    }
} */


// Get techs from server
export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

// Add technician to server
export const addTechs = (tech) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}


// Delete technician to server
export const deleteTechs = (id) => async dispatch => {
    try {
        setLoading();

        await fetch('/techs', {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING,
    }
}
