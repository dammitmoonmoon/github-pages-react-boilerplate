// TODO: Fix eslint

// eslint-disable-next-line @typescript-eslint/no-var-requires
const glob = require('glob');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');

glob(
    '**/apolloTypes',
    // @ts-ignore
    null,
    (_er, folders) =>
        folders.forEach(folder => {
            fs.remove(folder, err => {
                console.error(err);
            });
        }),
);
