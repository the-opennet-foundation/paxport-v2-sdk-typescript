// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tag extends APIResource {
  /**
   * This endpoint retrieves a single tag by its slug with optional inclusion of
   * posts.
   */
  retrieve(
    slug: string,
    query: TagRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/blog/tag/${slug}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint retrieves all available tags along with their associated posts.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/blog/tag', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TagRetrieveParams {
  /**
   * Include posts tagged with this tag
   */
  posts?: boolean;
}

export declare namespace Tag {
  export { type TagRetrieveParams as TagRetrieveParams };
}
