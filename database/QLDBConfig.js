import { QldbDriver } from 'amazon-qldb-driver-nodejs';
import { logInfo , logError } from '../utils';

const credentials = {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
};

const region = process.env.REGION;

let qldbDriver;

try {
    qldbDriver = new QldbDriver(process.env.LEDGER_NAME, { region, credentials });
    logInfo("QLDB connection established successfully", {} )
} catch (error) {
    logError("Error establishing QLDB connection" , error)
}

export default qldbDriver;