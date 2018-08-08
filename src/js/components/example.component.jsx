import * as React from 'react';

export function ExampleComponent({exampleMessage, handleDataFetch}) {
    return (
        <div className="example-container">
            <p>
                {exampleMessage}
            </p>
            <button onClick={handleDataFetch} type='button'>Click me!</button>
        </div>
    );
}
