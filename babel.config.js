// babel.config.js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ],
    plugins: [ '@babel/plugin-transform-runtime' ]
};

// babel.config.js
module.exports = (api) => {
    const isTest = api.env('test');
    // You can use isTest to determine what presets and plugins to use.

    return {
        // ...
    };
};
