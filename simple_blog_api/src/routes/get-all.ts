import { Request, Response, NextFunction } from 'express';
import db from '../db';
import { QueryError } from 'mysql2';
import { router } from './index';

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    db.query('SELECT * FROM books', (err: QueryError, rows: any) => {
        if (err) {
            res.send({ error: err });
        } else {
            res.send({ data: rows });
        }
    });
});
