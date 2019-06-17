import React from 'react';
import { WithSuspense } from '../../common/WithSuspense';
import LightComponent from './LightComponent';
import HeavyComponent from './HeavyComponent';

const LazyComponent = React.lazy(() => import('./SuspendedComponent'));

const Loader = () => <div>I&apos;m on it...</div>;

const Demo = () => (
    <div>
        <LightComponent />
        <WithSuspense Target={LazyComponent} Loader={Loader} />
        <HeavyComponent />
    </div>
);

export { Demo };
