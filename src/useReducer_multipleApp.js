// multiple reducers
import react, {useReducer} from 'react';

const Hello = () => {

const [count1, dispatch1] = useReducer(reducer, initialState);
const [count2, dispatch2] = useReducer(reducer, initialState);

return (
    <>
    {count1}
    <button onClick={() => dispatch1({type: 'increment' })}>+1</button>
    <button onClick={() => dispatch1({type: 'decrement' })}>-1</button>
    <button onClick={() => dispatch1({type: 'set', count:0 })}>Reset</button>
    <br />
    {count2}
    <button onClick={() => dispatch2({type: 'increment' })}>+1</button>
    <button onClick={() => dispatch2({type: 'decrement' })}>-1</button>
    <button onClick={() => dispatch2({type: 'set', count: 0})}>Reset</button>

    </>
);

}

const initialState = 0;

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'set':
            return action.count;
        default:
            throw new Error('Unexpected action');
    }
};

export default Hello;