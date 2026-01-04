// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class User extends APIResource {
  /**
   * Retrieves all staking earnings for the authenticated user across all positions.
   */
  getEarnings(
    query: UserGetEarningsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/staking/user/earnings', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a summary of the user's staking activity across all positions.
   */
  getSummary(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/staking/user/summary', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserGetEarningsParams {
  /**
   * Filter by claimed status
   */
  claimed?: boolean;

  /**
   * Filter by pool ID
   */
  poolId?: string;

  /**
   * Timeframe for earnings data
   */
  timeframe?: 'week' | 'month' | 'year' | 'all';
}

export declare namespace User {
  export { type UserGetEarningsParams as UserGetEarningsParams };
}
