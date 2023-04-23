/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseController } from '../../../../../core/providers/class/BaseController';
import { ICreateTagDTO } from '../../Model/DTO/create.dto';
import { TagRepo } from '../../Repository';

export class CaseCreateTag extends BaseController {
    constructor() {
        super();
    }

    async executeImpl(): Promise<any> {
        const dto: ICreateTagDTO = this.req.body as ICreateTagDTO;

        try {
            const result = await TagRepo.create(dto);
            return this.ok(this.res, result);
        } catch (err: any) {
            return this.fail(err);
        }
    }
}
