// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Withdraw extends APIResource {
  /**
   * Initiates a custom fiat withdraw transaction for the currently authenticated
   * user
   */
  createFiat(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/withdraw/fiat', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Initiates a withdraw transaction for the currently authenticated user
   */
  createSpot(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/withdraw/spot', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
