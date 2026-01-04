// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Market extends APIResource {
  /**
   * Retrieves highlighted market data (for example, top active offers).
   */
  getHighlights(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/market/highlight', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves aggregated market statistics from P2P trades.
   */
  getStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/market/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the top cryptocurrencies based on trade volume aggregations.
   */
  getTopCryptos(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/market/top', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
