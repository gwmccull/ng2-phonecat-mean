System.config({
    defaultJSExtensions: true,
    transpiler: 'babel',
    babelOptions: {
        stage: 0
    },
    map: {
        'ng-forward': 'ng-forward/ng-forward.dist.min.js',
        'babel': 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js'
    },
    paths: {
        '*': 'node_modules/*',
        'app/*': 'app/*'
    },
    packageConfigPaths: ['node_modules/*/package.json'],
    packages: {

    }
});