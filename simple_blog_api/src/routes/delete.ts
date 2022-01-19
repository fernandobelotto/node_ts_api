import { Request, Response, NextFunction } from 'express';
import db from '../db';
import { router } from './index';

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {

    let id = req.params.id;

    db.query('DELETE FROM books WHERE id = ' + id, (err: any, result: any) => {
        if (err) {
            res.send({ error: err });
        } else {
            res.send({ result: result });
        }

    });
});
