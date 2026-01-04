// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Watchlist extends APIResource {
  /**
   * Retrieves a list of watchlist items for the authenticated user.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/exchange/watchlist', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Adds a new item to the watchlist for the authenticated user.
   */
  add(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/exchange/watchlist', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
