import { Request, Response, NextFunction } from 'express';
import db from '../db';
import { randomUUID } from 'crypto';
import { QueryError, RowDataPacket } from 'mysql2';
import { router } from './index';

router.post('/', (req: Request, res: Response, next: NextFunction) => {


    let name = req.body.name;
    let author = req.body.author;
    let errors = false;

    if (name.length === 0 || author.length === 0) {
        errors = true;
        res.send({ error: 'invalid name or author' });
    }

    if (!errors) {

        var form_data = {
            name: name,
            author: author,
            id: randomUUID()
        };

        db.query('INSERT INTO books SET ?', form_data, (err: QueryError | null, result: RowDataPacket[]) => {
            if (err) {
                res.send({ err: err });
            } else {
                res.send({
                    name: form_data.name,
                    author: form_data.author,
                    id: form_data.id
                });

            }
        });
    }
});
