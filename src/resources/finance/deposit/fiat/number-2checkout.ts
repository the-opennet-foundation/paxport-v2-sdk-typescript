// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Number2checkout extends APIResource {
  /**
   * Initiates a 2Checkout payment process by creating a payment session. This
   * endpoint supports hosted checkout integration for web applications.
   */
  _2checkout(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/2checkout', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the current status of a 2Checkout payment using the order reference
   */
  retrieveStatus(query: Number2checkoutRetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/2checkout/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Verifies a 2Checkout payment using the order reference and updates the
   * transaction status accordingly
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/2checkout/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Handles Instant Payment Notifications (IPN) from 2Checkout to automatically
   * process payment status updates
   */
  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/2checkout/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Number2checkoutRetrieveStatusParams {
  /**
   * 2Checkout order reference to check status for
   */
  orderReference: string;
}

export declare namespace Number2checkout {
  export { type Number2checkoutRetrieveStatusParams as Number2checkoutRetrieveStatusParams };
}
