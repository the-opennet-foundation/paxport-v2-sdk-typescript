// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Dashboard extends APIResource {
  /**
   * Retrieves recent trading activity for the authenticated user.
   */
  getActivity(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/dashboard/activity', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves dashboard data including notifications, portfolio, stats, trading
   * activity, and transactions for the authenticated user.
   */
  getData(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/dashboard', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the portfolio summary for the authenticated user.
   */
  getPortfolio(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/dashboard/portfolio', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves various trade counts and stats for the authenticated user.
   */
  getStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/dashboard/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves recent trade transactions for the authenticated user.
   */
  getTransactions(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/dashboard/transaction', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
