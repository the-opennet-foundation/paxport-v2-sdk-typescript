// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pool extends APIResource {
  /**
   * Retrieves all active staking pools available for users to stake in.
   */
  list(query: PoolListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/staking/pool', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed analytics for a specific staking pool.
   */
  getAnalytics(
    id: string,
    query: PoolGetAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/staking/pool/${id}/analytics`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed information about a specific staking pool.
   */
  getDetails(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/staking/pool/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PoolListParams {
  /**
   * Filter pools by token name
   */
  token?: string;

  /**
   * Maximum APR filter
   */
  maxApr?: number;

  /**
   * Minimum APR filter
   */
  minApr?: number;

  /**
   * Minimum staking duration in days
   */
  minLockPeriod?: number;
}

export interface PoolGetAnalyticsParams {
  /**
   * Timeframe for analytics data
   */
  timeframe?: 'week' | 'month' | 'year' | 'all';
}

export declare namespace Pool {
  export { type PoolListParams as PoolListParams, type PoolGetAnalyticsParams as PoolGetAnalyticsParams };
}
