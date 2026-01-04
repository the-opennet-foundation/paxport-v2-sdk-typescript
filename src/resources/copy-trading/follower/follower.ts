// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AllocationAPI from './allocation';
import { Allocation, AllocationAddFundsParams, AllocationRemoveFundsParams } from './allocation';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Follower extends APIResource {
  allocation: AllocationAPI.Allocation = new AllocationAPI.Allocation(this._client);

  /**
   * Subscribe to a leader with per-market liquidity allocation for both base and
   * quote currencies.
   */
  followLeader(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/copy-trading/follower/follow', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed information about a specific subscription.
   */
  getDetails(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/copy-trading/follower/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all leaders the current user is following.
   */
  getSubscriptions(
    query: FollowerGetSubscriptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/copy-trading/follower', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Pauses a subscription, stopping new trades from being copied.
   */
  pauseSubscription(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/copy-trading/follower/${id}/pause`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Resumes a paused subscription.
   */
  resumeSubscription(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/copy-trading/follower/${id}/resume`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stops a subscription permanently and returns all allocated funds to wallet.
   */
  stopSubscription(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/copy-trading/follower/${id}/stop`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates the settings for a subscription.
   */
  updateSettings(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/copy-trading/follower/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FollowerGetSubscriptionsParams {
  /**
   * Filter by subscription status
   */
  status?: 'ACTIVE' | 'PAUSED' | 'STOPPED';
}

Follower.Allocation = Allocation;

export declare namespace Follower {
  export { type FollowerGetSubscriptionsParams as FollowerGetSubscriptionsParams };

  export {
    Allocation as Allocation,
    type AllocationAddFundsParams as AllocationAddFundsParams,
    type AllocationRemoveFundsParams as AllocationRemoveFundsParams,
  };
}
