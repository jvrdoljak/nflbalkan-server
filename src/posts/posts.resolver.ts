import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostInput } from 'src/graphql.schema';
import { PostsService } from './posts.service';

@Resolver('Posts')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query()
  async getPost(@Args('slug') slug: string) {
    const post = {
      id: 1,
      slug: slug,
      text: 'Lorem ipsum',
      title: 'Title',
    };

    return { post };
  }

  @Query()
  async getPosts() {
    const posts = [
      {
        id: 1,
        slug: 'aaa',
        text: 'Lorem ipsum',
        title: 'Title',
        image: { src: '', alt: '' },
      },
      {
        id: 2,
        slug: 'bbbbb',
        text: 'Lorem ipsums',
        title: 'Naslov',
        image: { src: '', alt: '' },
      },
    ];
    return { posts };
  }

  @Mutation()
  async createPost(@Args('post') post: PostInput) {
    console.log({ post });
    const newPost = await this.postsService.create(post);
    console.log({ newPost });
    return newPost;
  }

  @Mutation()
  async editPost(@Args('post') post: PostInput) {
    return { post };
  }
}
