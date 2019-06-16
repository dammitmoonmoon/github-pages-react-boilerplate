import styled from 'styled-components';
import React from 'react';

const TestComponent: React.FunctionComponent<{ title: string }> = ({ title }) => <Test>Hi there, I'm {title}</Test>;

const Test = styled.div`
    color: darkred;
    font-size: 30px;
`;

export { TestComponent };
