// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Position extends APIResource {
  /**
   * Creates a new staking position for the authenticated user by staking tokens into
   * a specified pool.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/staking/position', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all staking positions for the authenticated user with pagination
   * support.
   */
  list(query: PositionListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/staking/position', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Claims all unclaimed earnings for a specific staking position.
   */
  claimEarnings(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/staking/position/${id}/claim`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed information about a specific staking position.
   */
  getDetails(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/staking/position/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all earnings records for a specific staking position.
   */
  getEarnings(
    id: string,
    query: PositionGetEarningsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/staking/position/${id}/earnings`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Initiates a withdrawal request for a specific staking position.
   */
  requestWithdrawal(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/staking/position/${id}/withdraw`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PositionListParams {
  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Filter by pool ID
   */
  poolId?: string;

  /**
   * Filter by position status
   */
  status?: 'ACTIVE' | 'LOCKED' | 'PENDING_WITHDRAWAL' | 'COMPLETED';
}

export interface PositionGetEarningsParams {
  /**
   * Filter by claimed status
   */
  claimed?: boolean;
}

export declare namespace Position {
  export {
    type PositionListParams as PositionListParams,
    type PositionGetEarningsParams as PositionGetEarningsParams,
  };
}
