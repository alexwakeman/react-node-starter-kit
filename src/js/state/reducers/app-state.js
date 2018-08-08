import {EXAMPLE_DATA_AVAILABLE} from '../actions';

let initialState = initAppState();

const appState = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case EXAMPLE_DATA_AVAILABLE:
            newState = {
                ... state,
                exampleMessage: data.exampleMessage
            };
            break;
        default:
            newState = state;
    }
    window.sessionStorage.setItem('state', JSON.stringify(newState));
    return newState;
};

function initAppState() {
    let initialState = sessionStorage.getItem('state');
    const emptyState = {
        exampleMessage: 'No data loaded, empty state',
    };

    if (!initialState) {
        initialState = {
            ...emptyState
        };
    } else {
        initialState = JSON.parse(initialState);
    }

    return initialState;
}

export default appState;