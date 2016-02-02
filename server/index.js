import http from 'http';
import express from 'express';
//import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db';
import api from './api';
import staticFiles from './static';

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.json({
    limit : '100kb'
}));

// connect to db
db( () => {

    // api router
    app.use('/api', api());

    // static files
    app.use(staticFiles());

    app.server.listen(process.env.PORT || 1234);

    console.log(`Started on port ${app.server.address().port}`);
});

export default app;