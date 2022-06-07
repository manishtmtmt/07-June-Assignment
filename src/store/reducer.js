export const reducer = (state, { type, payload }) => {
    switch(type) {
        case 'inc': {
            state.count++;
            return { ...state }
        }
        case 'dec': {
            state.count--;
            return { ...state }
        }
        case 'add': {
            state.count = state.count + payload
            return { ...state }
        }
        case 'sub': {
            state.count = state.count - payload
            return { ...state }
        }
        case 'mul': {
            state.count = state.count * payload
            return { ...state }
        }
        case 'div': {
            state.count = state.count / payload
            return { ...state }
        }
        default: {
            return state
        }
    }
};
