import { useReducer } from "react";

const initState = {
  count: 0,
};

type TState = typeof initState;

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

interface REDUCER_ACTION {
  type: REDUCER_ACTION_TYPE;
}

function reducer(state: TState, action: REDUCER_ACTION): TState {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div>{state.count}</div>

      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}>
        +
      </button>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}>
        -
      </button>
    </div>
  );
}
