import { ChangeEvent, useReducer, useRef, useState } from "react";

const initState = {
  count: 0,
  text: "",
  lowerInputVal: "",
};

type TState = typeof initState;

interface REDUCER_ACTION {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
}

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  CLEAR_LOWER_INPUT_VAL,
}

function reducer(state: TState, action: REDUCER_ACTION): TState {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.INPUT_TEXT:
      return { ...state, text: action.payload ?? "" };
    case REDUCER_ACTION_TYPE.CLEAR_LOWER_INPUT_VAL:
      return { ...state, lowerInputVal: "" };
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  // useRef does not trigger a re-render when its value changes
  const lowerInputRef = useRef<HTMLInputElement | null>(null);

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_LOWER_INPUT_VAL });

    const payload = state.text + e.target.value;
    dispatch({ type: REDUCER_ACTION_TYPE.INPUT_TEXT, payload });
  }

  return (
    <div>
      <div>
        Count: <span>{state.count}</span>
      </div>

      <div>
        Text: <input value={state.text} disabled />
      </div>

      <div>
        <input
          ref={lowerInputRef}
          value={state.lowerInputVal}
          onChange={onInputChange}
        />
      </div>

      <button onClick={() => lowerInputRef.current?.focus()}>
        Set focus to input
      </button>

      <div></div>
    </div>
  );
}
