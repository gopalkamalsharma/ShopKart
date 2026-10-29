import { useForm } from "react-hook-form"
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === 'incremented_count') {
    return {
      count: state.count + 1
    };
  }else if(action.type === "decrement_count"){
    return{
        count: state.count - 1
    };
  }
  else if(action.type === "clear"){
    return{
        count: 0
    };
  }
  throw Error('Unknown action.');
}

export default function Practice() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <>
            <button onClick={() => {
                dispatch({ type: 'incremented_count' })
            }}>
                Increment count
            </button>
            <p>{state.count}.</p>
            <button onClick={() => {
                dispatch({ type: 'decrement_count' })
            }}>
                Decrement count
            </button>
            <button onClick={() => {
                dispatch({ type: 'clear' })
            }}>
                Clear
            </button>
        </>

    );
}



