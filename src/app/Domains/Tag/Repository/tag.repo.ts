/* eslint-disable @typescript-eslint/no-explicit-any */

import { IDelete, IFind, IGet, IPost, IPut } from '../../../../core/providers/interfaces/repo.interface';

import { ICreateTagDTO } from '../Model/DTO/create.dto';
import { TagModel } from '../Model/tag.model';

export class TagRepository implements IGet, IPost, IPut, IFind, IDelete {
    constructor(private model: typeof TagModel) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async all(query?: object | undefined): Promise<any> {
        return await this.model.find();
    }

    async create(data: ICreateTagDTO): Promise<any> {
        try {
            await this.model.create({
                display_name: data.name,
                name: data.name.toLocaleLowerCase(),
                description: data.description,
                user_id: process.env.AUTH_USER_ID
            });
            return 'Record created successfully';
        } catch (err: any) {
            return err;
        }
    }
    async update(id: string | number, data: object): Promise<any> {
        return await this.model.updateOne(data, { where: { id } });
    }
    async find(id: string | number): Promise<any> {
        return await this.model.findById(id);
    }
    async delete(id: string | number): Promise<any> {
        return await this.model.deleteOne({ where: { id } });
    }
}
