// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Product extends APIResource {
  /**
   * Fetches a single ecommerce product by its slug, including details such as
   * category and reviews.
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecommerce/product/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a list of all active ecommerce products, including their categories and
   * aggregated review stats.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecommerce/product', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
