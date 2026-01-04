// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Merchant extends APIResource {
  /**
   * Gets the current user's merchant account details and stats.
   */
  getDashboard(
    query: MerchantGetDashboardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/gateway/merchant', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Registers the current user as a payment gateway merchant.
   */
  register(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/gateway/merchant', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates the current user's merchant account details.
   */
  updateProfile(options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/gateway/merchant', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MerchantGetDashboardParams {
  /**
   * Filter by mode (LIVE or TEST)
   */
  mode?: 'LIVE' | 'TEST';
}

export declare namespace Merchant {
  export { type MerchantGetDashboardParams as MerchantGetDashboardParams };
}
