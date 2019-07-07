interface State {
  resume: Resume | null;
}

interface Action<T> {
  type: string;
  payload?: T;
}

export const initState: State = {
  resume: null
};

export const reducer = (state: State, action: Action<any>): State => {
  switch (action.type) {
    case "SET_RESUME": {
      const resume = action.payload;
      return {
        ...state,
        resume: { ...resume }
      };
    }

    default: {
      return state;
    }
  }
};
