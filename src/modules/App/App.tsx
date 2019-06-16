import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from './Menu';
import Helmet from 'react-helmet';

const isDev = process.env.NODE_ENV === 'development';

const App: React.FunctionComponent<{}> = () => (
    <BrowserRouter basename={isDev ? '' : process.env.BASE_URL}>
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
        </Switch>
    </BrowserRouter>
);

export { App };
