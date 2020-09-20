import {
    FETCH_STUDENTS
} from "../constants/actions";

const stateInit = {
    students: [],
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case FETCH_STUDENTS:

            return {
                ...state,
                students : state.students.concat(action.payload)
            }

       
        default:
            return state;
    }
}

export default reducer;