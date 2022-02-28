
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

export class Post {
    __typename?: 'Post';
    id: number;
    slug: string;
    title: string;
    text: string;
    image?: Nullable<ImageResult>;
}

export class PostResult {
    __typename?: 'PostResult';
    post?: Nullable<Post>;
}

export class PostResults {
    __typename?: 'PostResults';
    posts: Post[];
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract getPost(slug: string): PostResult | Promise<PostResult>;

    abstract getPosts(): PostResults | Promise<PostResults>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createPost(post: PostInput): PostResult | Promise<PostResult>;

    abstract editPost(post: PostInput): PostResult | Promise<PostResult>;
}

type Nullable<T> = T | null;
