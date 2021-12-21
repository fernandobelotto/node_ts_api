import mysql, { Connection, QueryError } from 'mysql2'

var connection: Connection = mysql.createConnection({
    host: process.env.host || 'localhost',
    user: process.env.user || 'root',
    database: process.env.database || 'books'
});
connection.connect((error: QueryError | null) => {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connected..!');
    }
});

export default connection