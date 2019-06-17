import gql from 'graphql-tag';

const SPECIES = gql`
    query Species {
        allFilms {
            edges {
                node {
                    title
                }
            }
        }
    }
`;

export { SPECIES };
