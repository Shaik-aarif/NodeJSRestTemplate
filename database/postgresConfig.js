import { Pool } from 'pg';
import { logError, logInfo } from '../utils';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
    ssl: {
        rejectUnauthorized: false // Use this for self-signed certificates
    },
});
pool.on('connect', () => {
    logInfo("Connected to PostgreSQL database", {});
});

pool.on('error', (error) => {
    logError("Failed to connect to PostgreSQL database" , error)
    process.exit(1);
});

export default pool;
