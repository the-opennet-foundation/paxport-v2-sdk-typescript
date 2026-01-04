// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Category extends APIResource {
  /**
   * This endpoint retrieves a single category by its ID with optional inclusion of
   * posts.
   */
  retrieve(
    slug: string,
    query: CategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/blog/category/${slug}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint retrieves all categories that have at least one published post
   * along with the count of their associated posts.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/blog/category', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CategoryRetrieveParams {
  /**
   * Include posts in the category
   */
  posts?: boolean;
}

export declare namespace Category {
  export { type CategoryRetrieveParams as CategoryRetrieveParams };
}
