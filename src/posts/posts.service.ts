import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostInput } from 'src/graphql.schema';
import { Post, PostDocument } from './post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}

  async create(createPostDto: PostInput): Promise<Post> {
    const createdPost = await this.postModel.create(createPostDto);
    return createdPost;
  }
}
