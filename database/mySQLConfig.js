import mysql from 'mysql2';
import { logError } from '../utils';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    queueLimit: 0 
});

pool.getConnection((error, connection) => {
    if (error) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            logError("Database connection was closed." , error)
        }
        if (error.code === 'ER_CON_COUNT_ERROR') {
            logError("Database has too many connections." , error)

        }
        if (error.code === 'ECONNREFUSED') {
            logError("Database connection was refused." , error)

        }
    }
    if (connection) connection.release();

    return;
});

export default pool;
