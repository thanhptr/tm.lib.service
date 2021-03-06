import { Document, Model, SchemaDefinition } from 'mongoose';
import { DbEntity } from '../entities/DbEntity';
import { MongoClient } from '../lib/MongoClient';
export declare type Query<T> = {
    [P in keyof T]?: T[P] | {
        $regex: RegExp;
    };
};
export declare type SortType = 1 | -1;
export declare type Sort = {
    name: string;
    type: SortType;
};
export interface Repository<TEntity> {
    save(doc: TEntity): Promise<TEntity>;
    remove(doc: TEntity): Promise<TEntity>;
    find(query: any | Query<TEntity>, sort?: Sort): Promise<TEntity[]>;
    findOneOrCreate(condition: any | TEntity, creator: () => Promise<TEntity>): Promise<TEntity>;
    findOneById(id: string): Promise<TEntity>;
    findOneAndUpdate(query: Query<TEntity>, updates: any | TEntity): Promise<TEntity>;
    findSpecified(query: Query<TEntity>, specifiedQuery: any | TEntity): Promise<TEntity[]>;
    update(condition: any | TEntity, updates: any | TEntity): Promise<TEntity>;
    findOne(condition: any | TEntity): Promise<TEntity>;
    findPagination(query: any | TEntity, pageNumber: number, itemPerPage: number, sort?: Sort): Promise<TEntity[]>;
    count(condition: any | TEntity): Promise<number>;
    findAndGetOneById(id: string, filedName: string): Promise<TEntity>;
}
export declare class RepositoryImpl<TEntity extends DbEntity & Document> implements Repository<TEntity> {
    protected Model: Model<TEntity>;
    constructor(mongoclient: MongoClient, name: string, schemaDefinition: SchemaDefinition);
    findOneAndUpdate(query: Query<TEntity>, updates: any | TEntity): Promise<TEntity>;
    save(doc: TEntity): Promise<TEntity>;
    remove(doc: TEntity): Promise<TEntity>;
    find(query: Query<TEntity>, sort?: Sort): Promise<TEntity[]>;
    findOneById(id: string): Promise<TEntity>;
    findSpecified(query: Query<TEntity>, specifiedQuery: any): Promise<TEntity[]>;
    update(condition: TEntity, updates: any): Promise<TEntity>;
    findOneOrCreate(condition: any | TEntity, creator: () => Promise<TEntity>): Promise<TEntity>;
    findOne(condition: any): Promise<TEntity>;
    findPagination(query: Query<TEntity>, pageNumber: number, itemPerPage: number, sort?: Sort): Promise<TEntity[]>;
    count(condition: any): Promise<number>;
    findAndGetOneById(id: string, filedName: string): Promise<TEntity>;
}
