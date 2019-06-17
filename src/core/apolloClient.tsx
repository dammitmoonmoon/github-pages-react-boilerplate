import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    ssrMode: true,
    link: createUploadLink({
        uri: process.env.GRAPHQL_ENDPOINT,
        credentials: 'include',
    }),
    cache: cache.restore((window as any).__APOLLO_STATE__),
});

export { apolloClient };
