import { Request, Response, NextFunction } from 'express';
import db from '../db';
import { QueryError, RowDataPacket } from 'mysql2';
import { router } from './index';

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {

    let id = req.params.id;

    db.query('SELECT * FROM books WHERE id = ' + id, (err: QueryError, rows: RowDataPacket[]) => {
        if (err)
            throw err;

        if (rows.length <= 0) {
            res.send({ status: 'empty' });
        }

        else {
            res.send({
                title: 'Edit Book',
                id: rows[0].id,
                name: rows[0].name,
                author: rows[0].author
            });
        }
    });
});
