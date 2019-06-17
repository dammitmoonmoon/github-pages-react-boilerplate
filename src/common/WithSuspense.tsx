import React, { Suspense } from 'react';

interface Props<L = {}, T = {}> {
    Loader: React.FunctionComponent<L>;
    Target: React.FunctionComponent<T>;
}

const WithSuspense: React.FunctionComponent<Props> = ({ Loader, Target }) => (
    <Suspense fallback={<Loader />}>
        <Target />
    </Suspense>
);

export { WithSuspense };
