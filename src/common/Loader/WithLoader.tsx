import * as React from 'react';
import styled from 'styled-components';
import { CommonProps } from '../../types/CommonProps';
import { Loader } from './Loader';

interface Props extends CommonProps {
    isLoading: boolean;
}

const WithLoader: React.FC<Props> = ({ className, children, isLoading }) => {
    return (
        <Root className={className}>
            <Content>{children}</Content>
            {isLoading && <Loader />}
        </Root>
    );
};

const Root = styled.div`
    position: relative;
`;

const Content = styled.div`
    position: relative;
`;

export { WithLoader };
