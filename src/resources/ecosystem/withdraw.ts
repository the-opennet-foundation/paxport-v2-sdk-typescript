// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Withdraw extends APIResource {
  /**
   * Processes a withdrawal from the user's wallet to an external address.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/ecosystem/withdraw', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Calculates the maximum amount that can be withdrawn for a given currency and
   * chain
   */
  maxAmount(query: WithdrawMaxAmountParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecosystem/withdraw/max', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WithdrawMaxAmountParams {
  /**
   * Chain/network (e.g., BTC, ETH, BSC)
   */
  chain: string;

  /**
   * Currency code (e.g., BTC, ETH)
   */
  currency: string;
}

export declare namespace Withdraw {
  export { type WithdrawMaxAmountParams as WithdrawMaxAmountParams };
}
