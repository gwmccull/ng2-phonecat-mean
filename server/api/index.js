import { Router } from 'express';
import phones from './phones';
import phone from './phone';

export default function() {
    var api = Router();

    // mount the facets resource
    api.use('/phones', phones);
    api.use('/phones/:phoneId', phone);

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({
            version : '1.0'
        });
    });

    return api;
}