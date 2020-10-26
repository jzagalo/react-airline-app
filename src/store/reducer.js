import bankConstants from '../constants';

const initialState = {
    balance: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case bankConstants.CREATED_ACCOUNT: 
            return { ...state, balance: 0 }
        case bankConstants.DEPOSITED_INTO_ACCOUNT:
            return Object.assign( {}, state, {balance: state.balance + action.amount});
        case bankConstants.WITHDREW_FROM_ACCOUNT:
            return Object.assign({}, state, {balance: state.balance - action.amount});
        default:
            return state.balance;
    }
};

export default reducer;