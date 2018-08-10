import * as React from 'react';

import ExampleContainer from "../containers/example.container";

export class AppComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="app-container">
                <ExampleContainer/>
            </div>
        )
    }
}
