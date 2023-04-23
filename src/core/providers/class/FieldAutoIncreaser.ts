/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema } from 'mongoose';
import { logger } from '../library/console.logger';

// auto incrementing field for mongoose schema (mongoose schema plugin) for all models that need it
export class FieldAutoIncreaser {
    public static autoIncrementingFieldPlugin(schema: Schema, model: any, field: string) {
        schema.pre('save', async function (next: any) {
            const doc = this as any;
            const last = await model.findOne({}, {}, { sort: { [field]: -1 } });
            logger.info('last', last);
            doc[field] = last ? last[field] + 1 : 1;
            next();
        });
    }
}
