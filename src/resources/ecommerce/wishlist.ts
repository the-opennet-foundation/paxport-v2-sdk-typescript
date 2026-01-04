// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Wishlist extends APIResource {
  /**
   * Fetches all items in the user's wishlist, including product details, categories,
   * and reviews.
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecommerce/wishlist', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Allows a user to add a product to their wishlist if it's not already included.
   */
  add(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/ecommerce/wishlist', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
