import { Router } from 'express';
import Phones from '../models/phones';

let router = Router();

router
    .get('/', (req, res) => {
        Phones.find({}, (err, phones) => {
            if (err) {
                res.send(err);
            }

            res.json(phones);
        });
    });

export default router;