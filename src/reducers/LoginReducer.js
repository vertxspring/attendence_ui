import * as Actions from '../actions/ActionTypes';

initialState = {
    isLoggedIn: false,
    role: ''
}
const LoginReducer = (state =initialState, action) => {
    switch (action.type){
        case Actions.LOGGED_IN:
            return {
                isLoggedIn: true,
                role: 'OOO'
            };
        case Actions.LOGGED_OUT:
            return {
                isLoggedIn: false,
                role: ''
            };
        default:
            return state;
    }
}

export default LoginReducer;