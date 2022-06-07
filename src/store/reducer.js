export const reducer = (state, { type }) => {
    switch(type) {
        case 'inc': {
            state.count++;
            return { ...state }
        }
        case 'dec': {
            state.count--;
            return { ...state }
        }
        default: {
            return state
        }
    }
};
