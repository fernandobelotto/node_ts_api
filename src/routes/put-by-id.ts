import { Request, Response, NextFunction } from 'express';
import db from '../db';
import { QueryError, RowDataPacket } from 'mysql2';
import { router } from './index';

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {

    let id = req.params.id;
    let name = req.body.name;
    let author = req.body.author;
    let errors = false;

    if (name.length === 0 || author.length === 0) {
        errors = true;

        res.send({
            id: req.params.id,
            name: name,
            author: author
        });
    }


    if (!errors) {

        var form_data = {
            name: name,
            author: author
        };

        db.query('UPDATE books SET ? WHERE id = ' + id, form_data, (err: QueryError | null, result: RowDataPacket[]) => {

            if (!err) {
                res.send({
                    id: req.params.id,
                    name: form_data.name,
                    author: form_data.author
                });
            } else {
                res.send({ error: err });
            }
        });
    }
});
