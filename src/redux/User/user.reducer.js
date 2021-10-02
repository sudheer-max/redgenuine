import userTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    resetPasswordSuccess : false,
    registerError : []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                registerError : []
            }
        
        case userTypes.REGISTER_ERROR:
            return {
                ...state,
                registerError : action.payload

            }
        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess : action.payload
            }
        case userTypes.RESET_USER_STATE:
        case userTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }
        default:
            return state;
    }
}

export default userReducer;

