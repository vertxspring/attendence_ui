import * as Actions from '../actions/ActionTypes';

const CounterReducer = (state ={count:5},action) => {
    switch (action.type){
        case Actions.COUNTER_INCREMENT:
            return {
                count: state.count + 400
            };
        case Actions.COUNTER_DECREMENT:
            return {
                count: state.count - 600
            };
        default:
            return state;
    }
}

export default CounterReducer;