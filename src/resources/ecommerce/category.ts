// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Category extends APIResource {
  /**
   * Fetches a single ecommerce category by its slug, including all active products
   * in that category with calculated ratings and review counts.
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecommerce/category/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches all active ecommerce categories along with their active products, with
   * calculated ratings and review counts for each product.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecommerce/category', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all active products within a specific category identified by its slug.
   */
  listProducts(slug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecommerce/category/${slug}/product`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
