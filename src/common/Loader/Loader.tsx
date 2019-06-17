import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const Loader = () => (
    <>
        <LoaderStyles />
        <Overlay>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </Overlay>
    </>
);

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 0.6;
    }
`;

const Overlay = styled.div`
    animation: ${fadeInAnimation} 0.2s ease 0.2s both;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoaderStyles = createGlobalStyle`
    .lds-ripple {
       position: relative;
       width: 25%;
       padding-top: 25%;
    }
    
    .lds-ripple div {
      position: absolute;
      border: 4px solid #fff;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    
    .lds-ripple div:nth-child(2) {
      animation-delay: -0.5s;
    }
    
    @keyframes lds-ripple {
      0% {
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: -1px;
        left: -1px;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
  }`;

export { Loader };
