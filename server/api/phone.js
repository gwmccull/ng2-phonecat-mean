import { Router } from 'express';
import Phone from '../models/phone';  // a mongoose Model

let router = Router();

router
    .get('/', (req, res) => {
        Phone.find({}, (err, phones) => {
            if (err) {
                res.send(err);
            }

            res.json(phones);
        });
    })
    .get('/:phoneId', (req, res) => {
        Phone.findById(req.params.phoneId, (err, phone) => {
            if (err) {
                res.send(err);
            }

            res.json(phone);
        });
    });

export default router;