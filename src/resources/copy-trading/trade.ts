// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trade extends APIResource {
  /**
   * Retrieves detailed information about a specific copy trade.
   */
  getDetails(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/copy-trading/trade/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the user's copy trading trade history with filtering and pagination.
   */
  getHistory(
    query: TradeGetHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/copy-trading/trade', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TradeGetHistoryParams {
  /**
   * Filter trades from this date
   */
  dateFrom?: string;

  /**
   * Filter trades until this date
   */
  dateTo?: string;

  /**
   * Filter by subscription/follower ID
   */
  followerId?: string;

  /**
   * Filter by leader ID
   */
  leaderId?: string;

  /**
   * Items per page
   */
  limit?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter by trade side
   */
  side?: 'BUY' | 'SELL';

  /**
   * Filter by trade status
   */
  status?: 'PENDING' | 'EXECUTED' | 'PARTIAL' | 'CANCELLED' | 'FAILED' | 'CLOSED';

  /**
   * Filter by trading pair symbol
   */
  symbol?: string;
}

export declare namespace Trade {
  export { type TradeGetHistoryParams as TradeGetHistoryParams };
}
