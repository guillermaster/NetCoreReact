// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import './Demo.scss';

class Demo extends React.Component<any, any> {
    public render() {
        return (
            <div className="Demo">
                <p>ASP.NET + React</p>
            </div>
        )
    }
}

export default Demo;