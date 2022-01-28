
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Post {
    __typename?: 'Post';
    id: number;
    title: string;
    text: string;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract post(id: number): Post | Promise<Post>;
}

type Nullable<T> = T | null;
