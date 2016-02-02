import { Router } from 'express';
import Phones from '../models/phones';

let router = Router();

router
    .get('/', (req, res) => {
        Phones
            .find({})
            .then(phones => res.json(phones))
            .catch(err => res.send(err));
    });

export default router;