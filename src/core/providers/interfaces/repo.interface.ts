/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IGet {
    all(query?: object): Promise<any>;
}
export interface IFind {
    find(id: number | string, query?: object): Promise<any>;
}

export interface IPost {
    create(data: object | any): Promise<any>;
}

export interface IPut {
    update(id: number | string, data: object | any): Promise<any>;
}

export interface IDelete {
    delete(id: number | string): Promise<any>;
}
