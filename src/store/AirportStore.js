import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import { ReduceStore } from 'flux/utils';


class AiportStore extends ReduceStore {
    
    constructor(data){
        super(data);
    }

    getInitialState(){
        return [];
    }

    reduce(state, action){
        switch(action.type){
            case constants.FETCH_AIRPORTS_SUCCESS:
                return action.payload.response;
            
            default:
                return state;
        }
    }

}

//const airportStore = new AirportStore(AppDispatcher);
export default AirportStore;