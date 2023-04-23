/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseController } from '../../../../../core/providers/class/BaseController';
import { TagRepo } from '../../Repository';

export class CaseDeleteTag extends BaseController {
    constructor() {
        super();
    }

    async executeImpl(): Promise<any> {
        try {
            const result = await TagRepo.delete(this.req.params.id);
            return this.ok(this.res, result);
        } catch (err: any) {
            return this.fail(err);
        }
    }
}
