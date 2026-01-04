// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoryAPI from './category';
import { Category, CategoryRetrieveParams } from './category';
import * as CommentAPI from './comment';
import { Comment } from './comment';
import * as PostAPI from './post';
import { Post, PostListParams } from './post';
import * as TagAPI from './tag';
import { Tag, TagRetrieveParams } from './tag';
import * as AuthorAPI from './author/author';
import { Author, AuthorListParams } from './author/author';

export class Blog extends APIResource {
  author: AuthorAPI.Author = new AuthorAPI.Author(this._client);
  category: CategoryAPI.Category = new CategoryAPI.Category(this._client);
  comment: CommentAPI.Comment = new CommentAPI.Comment(this._client);
  post: PostAPI.Post = new PostAPI.Post(this._client);
  tag: TagAPI.Tag = new TagAPI.Tag(this._client);
}

Blog.Author = Author;
Blog.Category = Category;
Blog.Comment = Comment;
Blog.Post = Post;
Blog.Tag = Tag;

export declare namespace Blog {
  export { Author as Author, type AuthorListParams as AuthorListParams };

  export { Category as Category, type CategoryRetrieveParams as CategoryRetrieveParams };

  export { Comment as Comment };

  export { Post as Post, type PostListParams as PostListParams };

  export { Tag as Tag, type TagRetrieveParams as TagRetrieveParams };
}
