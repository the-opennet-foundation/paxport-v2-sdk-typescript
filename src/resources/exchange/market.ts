// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Market extends APIResource {
  /**
   * Retrieves details of a specific market by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/exchange/market/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of all available markets.
   */
  list(query: MarketListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/exchange/market', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MarketListParams {
  /**
   * include eco
   */
  eco: string;
}

export declare namespace Market {
  export { type MarketListParams as MarketListParams };
}
