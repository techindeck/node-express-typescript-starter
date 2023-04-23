import mongoose, { ConnectOptions } from 'mongoose';
import { logger } from '../../providers/library/console.logger';

export class DatabaseConnection {
    private databaseUri = `${process.env.DB_DIALECT}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    constructor() {
        this.connect();
    }

    public async connect() {
        const options: ConnectOptions = {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        };
        // connect to mongodb using mongoose
        mongoose
            .connect(this.databaseUri, options)
            .then(() => {
                logger.info('Database connected');
            })
            .catch((err) => {
                logger.error(err);
            });

        // get connection object
        // const db = mongoose.connection;
    }
}
