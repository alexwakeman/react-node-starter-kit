import {EXAMPLE_DATA_AVAILABLE} from '../actions';

let initialState = initAppState();

const appState = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case EXAMPLE_DATA_AVAILABLE:
            newState = {
                ... state,
                exampleMessage: action.data.exampleMessage
            };
            break;
        default:
            newState = state;
    }
    return newState;
};

function initAppState() {
    const emptyState = {
        exampleMessage: 'No data loaded, empty state',
    };

    initialState = {
        ...emptyState
    };

    return initialState;
}

export default appState;