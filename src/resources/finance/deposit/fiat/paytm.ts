// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Paytm extends APIResource {
  /**
   * Initializes a payment with Paytm and returns transaction token for comprehensive
   * payment methods including UPI, cards, net banking, wallets, and EMI across India
   * and international markets
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/paytm', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Queries current payment status with 1-hour expiration timeout and updates local
   * transaction records
   */
  retrieveStatus(query: PaytmRetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/paytm/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Handles return URL verification after payment completion and updates transaction
   * status
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/paytm/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Processes real-time payment notifications from Paytm with checksum verification
   * and status updates
   */
  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/paytm/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PaytmRetrieveStatusParams {
  /**
   * Paytm order ID
   */
  orderId: string;
}

export declare namespace Paytm {
  export { type PaytmRetrieveStatusParams as PaytmRetrieveStatusParams };
}
