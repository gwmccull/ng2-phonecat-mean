import { Router } from 'express';
import serveStatic from 'serve-static';

export default () => {
    var app = Router();

    app.use(serveStatic('app', {'index': ['index.html']}));
    app.use(serveStatic('node_modules', {'index': false}));

    return app;
}
