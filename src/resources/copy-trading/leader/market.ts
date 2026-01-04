// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Market extends APIResource {
  /**
   * Declares a new market that the leader will trade on. Followers will need to
   * provide liquidity for this market.
   */
  addMarket(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/copy-trading/leader/market', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns all active markets a leader has declared for trading. Used by followers
   * to see which markets they can allocate to.
   */
  getDeclaredMarkets(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/copy-trading/leader/${id}/market`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns all markets the authenticated leader has declared for trading with
   * follower counts
   */
  getDeclaredMarketsWithCounts(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/copy-trading/leader/market', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Enables or disables a market for the leader. When disabling a market with
   * follower allocations, refunds are automatically processed.
   */
  toggleStatus(symbol: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/copy-trading/leader/market/${symbol}/toggle`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update settings for a market, such as minimum allocation amounts for base and
   * quote currencies.
   */
  updateSettings(symbol: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/copy-trading/leader/market/${symbol}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
