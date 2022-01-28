import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver('Posts')
export class PostsResolver {
  @Query()
  async post(@Args('id') id: number) {
    return { id: id, text: 'Test', title: 'Test' };
  }
}
