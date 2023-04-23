/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseController } from '../../../../../core/providers/class/BaseController';
import { TagRepo } from '../../Repository';

export class CaseReadTag extends BaseController {
    constructor() {
        super();
    }

    async executeImpl(): Promise<any> {
        const dto = this.req.query;
        try {
            const result = await TagRepo.all(dto);
            return this.ok(this.res, result);
        } catch (err: any) {
            return this.fail(err);
        }
    }
}
