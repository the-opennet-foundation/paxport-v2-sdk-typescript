// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketAPI from './market';
import { Market } from './market';
import * as MeAPI from './me';
import { Me } from './me';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Leader extends APIResource {
  market: MarketAPI.Market = new MarketAPI.Market(this._client);
  me: MeAPI.Me = new MeAPI.Me(this._client);

  /**
   * Submit an application to become a copy trading leader. Requires approval from
   * admin.
   */
  applyToBecomeLeader(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/copy-trading/leader/apply', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Checks if the current user is eligible to become a copy trading leader.
   */
  checkEligibility(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/copy-trading/leader/eligibility', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all active public leaders available for copy trading.
   */
  getAvailableLeaders(
    query: LeaderGetAvailableLeadersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/copy-trading/leader', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed information about a specific leader.
   */
  getDetails(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/copy-trading/leader/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LeaderGetAvailableLeadersParams {
  /**
   * Items per page
   */
  limit?: number;

  /**
   * Minimum ROI filter
   */
  minRoi?: number;

  /**
   * Minimum win rate filter
   */
  minWinRate?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter by risk level
   */
  riskLevel?: 'LOW' | 'MEDIUM' | 'HIGH';

  /**
   * Sort field
   */
  sortBy?: 'roi' | 'winRate' | 'totalFollowers' | 'totalProfit';

  /**
   * Sort order
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * Filter by trading style
   */
  tradingStyle?: 'SCALPING' | 'DAY_TRADING' | 'SWING' | 'POSITION';
}

Leader.Market = Market;
Leader.Me = Me;

export declare namespace Leader {
  export { type LeaderGetAvailableLeadersParams as LeaderGetAvailableLeadersParams };

  export { Market as Market };

  export { Me as Me };
}
