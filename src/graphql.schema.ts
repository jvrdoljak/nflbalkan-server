
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class ImageInput {
    src: string;
    alt: string;
}

export class PostInput {
    id: number;
    title: string;
    text: string;
    image?: Nullable<ImageInput>;
}

export class ImageResult {
    __typename?: 'ImageResult';
    src: string;
    alt: string;
}

export class PostResult {
    __typename?: 'PostResult';
    id: number;
    title: string;
    text: string;
    image?: Nullable<ImageResult>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract post(id: number): PostResult | Promise<PostResult>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createPost(post: PostInput): PostResult | Promise<PostResult>;
}

type Nullable<T> = T | null;
