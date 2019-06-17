import minireset from 'minireset.css';
import { createGlobalStyle, css } from 'styled-components';

const globalCss = css`
    html {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    body {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
`;

const GlobalStyles = createGlobalStyle`
    ${minireset};
    ${globalCss};
`;

export { GlobalStyles };
