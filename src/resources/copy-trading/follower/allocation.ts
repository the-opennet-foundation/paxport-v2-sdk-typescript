// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Allocation extends APIResource {
  /**
   * Adds funds to a specific market allocation within a subscription.
   */
  addFunds(
    allocationID: string,
    params: AllocationAddFundsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.post(path`/api/copy-trading/follower/${id}/allocation/${allocationID}/add-funds`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a new market allocation for a subscription. The market must be one of
   * the leader's declared markets.
   */
  createAllocation(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/copy-trading/follower/${id}/allocation`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all market allocations for a subscription.
   */
  getAllocations(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/copy-trading/follower/${id}/allocation`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Removes funds from a specific market allocation within a subscription.
   */
  removeFunds(
    allocationID: string,
    params: AllocationRemoveFundsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.post(path`/api/copy-trading/follower/${id}/allocation/${allocationID}/remove-funds`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AllocationAddFundsParams {
  /**
   * Subscription (follower) ID
   */
  id: string;
}

export interface AllocationRemoveFundsParams {
  /**
   * Subscription (follower) ID
   */
  id: string;
}

export declare namespace Allocation {
  export {
    type AllocationAddFundsParams as AllocationAddFundsParams,
    type AllocationRemoveFundsParams as AllocationRemoveFundsParams,
  };
}
