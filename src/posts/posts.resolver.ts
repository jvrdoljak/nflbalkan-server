import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostInput } from 'src/graphql.schema';

@Resolver('Posts')
export class PostsResolver {
  @Query()
  async post(@Args('id') id: number) {
    return { id: id, text: 'Test', title: 'Test', image: { src: '', alt: '' } };
  }

  @Mutation()
  async createPost(@Args('post') post: PostInput) {
    return post;
  }
}
