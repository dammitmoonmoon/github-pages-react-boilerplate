import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from './Menu';
import Helmet from 'react-helmet';
import { Demo } from '../Demo/Demo';
import { GlobalStyles } from '../../core/globalStyles';
import { apolloClient } from '../../core/apolloClient';

const isDev = process.env.NODE_ENV === 'development';

const App: React.FunctionComponent<{}> = () => (
    <ApolloProvider client={apolloClient}>
        <BrowserRouter basename={isDev ? '' : process.env.BASE_URL}>
            <GlobalStyles />
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <title>I&apos;m wearing a helmet!</title>
            </Helmet>
            <Menu />
            <Switch>
                <Route exact path="/" component={() => <div>Main</div>} />
                <Route exact path="/about" component={() => <div>About</div>} />
                <Route path="/topics" component={() => <div>Topics</div>} />
                <Route path="/demo" component={Demo} />
            </Switch>
        </BrowserRouter>
    </ApolloProvider>
);

export { App };
