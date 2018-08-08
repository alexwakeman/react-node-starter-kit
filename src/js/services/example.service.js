
export class ExampleService {

    static getMessage() {
        let exampleURL = '/api/example';
        return window.fetch(exampleURL, {
            credentials: 'same-origin'
        })
            .then((data) => data.json())
    }
}
