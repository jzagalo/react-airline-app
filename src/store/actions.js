import bankConstants from '../constants';

export function createAccount(){
    return {
        type: bankConstants.CREATED_ACCOUNT,
        amount: 0
    }
}

export function depositIntoAccount(amount){
    return {
        type: bankConstants.DEPOSITED_INTO_ACCOUNT,
        amount: amount
    }
}

export function withdrawFromAccount(amount){
    return {
        type: bankConstants.WITHDREW_FROM_ACCOUNT,
        amount: amount,
    }
}