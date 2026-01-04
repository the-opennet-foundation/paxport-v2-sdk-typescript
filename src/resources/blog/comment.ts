// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Comment extends APIResource {
  /**
   * This endpoint creates a new blog comment.
   */
  create(postID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/blog/comment/${postID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint updates an existing blog comment.
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/blog/comment/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint retrieves all available comments along with their associated
   * posts.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/blog/comment', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
