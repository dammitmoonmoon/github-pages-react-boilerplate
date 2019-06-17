import React, { useState } from 'react';
import image from './image.jpg';
import { WithLoader } from '../../common/Loader';
import styled from 'styled-components';

const HeavyComponent: React.FunctionComponent<{}> = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div>
            <div>I take my time</div>
            <ImageWrapper>
                <WithLoader isLoading={isLoading}>
                    <Image src={image} alt="random" onLoad={() => setIsLoading(false)} />
                </WithLoader>
            </ImageWrapper>
        </div>
    );
};

const ImageWrapper = styled.div`
    width: 50%;
    margin: auto;
`;

const Image = styled.img`
    width: 100%;
`;

export default HeavyComponent;
