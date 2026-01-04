// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Ticker extends APIResource {
  /**
   * Retrieves ticker information for a specific market pair.
   */
  retrieve(pair: string, params: TickerRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { currency } = params;
    return this._client.get(path`/api/exchange/ticker/${currency}/${pair}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves ticker information for all available market pairs.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/exchange/ticker', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TickerRetrieveParams {
  /**
   * The base currency of the market pair.
   */
  currency: string;
}

export declare namespace Ticker {
  export { type TickerRetrieveParams as TickerRetrieveParams };
}
