import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class HelloMessage extends React.Component<{ name: string }> {
    public render() {
        return <Test>Hello {this.props.name}</Test>;
    }
}

const Test = styled.div`
    color: green;
`;

const mountNode = document.getElementById('app');
ReactDOM.render(<HelloMessage name="world" />, mountNode);
