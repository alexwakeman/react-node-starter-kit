export const EXAMPLE_DATA_AVAILABLE = 'EXAMPLE_DATA_AVAILABLE';

export function exampleDataAvailable(data) {
    return {
        type: EXAMPLE_DATA_AVAILABLE,
        data: data
    }
}

