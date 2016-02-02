import { Router } from 'express';
import phones from './phones';
import phone from './phone';

export default () => {
    let api = Router();

    api.use('/phones', phones);
    api.use('/phone-details', phone);

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({
            version: '1.0'
        });
    });

    return api;
}