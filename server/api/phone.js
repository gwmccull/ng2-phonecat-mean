import { Router } from 'express';
import Phone from '../models/phone';  // a mongoose Model

let router = Router();

router
    .get('/', (req, res) => {
        Phone
            .find({})
            .then(phones => res.json(phones))
            .catch(err => res.json(err));
    })
    .get('/:phoneId', (req, res) => {
        Phone
            .findById(req.params.phoneId)
            .then(phone => res.json(phone))
            .catch(err => res.json(err));
    });

export default router;