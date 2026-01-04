// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ManageAPI from './manage/manage';
import { Manage, ManageListParams } from './manage/manage';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Author extends APIResource {
  manage: ManageAPI.Manage = new ManageAPI.Manage(this._client);

  /**
   * This endpoint creates a new author.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/blog/author', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint retrieves the author profile associated with a given user id along
   * with the posts linked to that profile.
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/blog/author', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint retrieves all available authors based on their status and
   * optionally includes their posts.
   */
  list(query: AuthorListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/blog/author/all', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves top authors based on post counts.
   */
  getTop(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/blog/author/top', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuthorListParams {
  /**
   * Include posts for each author
   */
  posts?: boolean;

  /**
   * Filter authors by status
   */
  status?: 'PENDING' | 'APPROVED' | 'REJECTED';
}

Author.Manage = Manage;

export declare namespace Author {
  export { type AuthorListParams as AuthorListParams };

  export { Manage as Manage, type ManageListParams as ManageListParams };
}
