// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Checkout extends APIResource {
  /**
   * Retrieves checkout session details for the customer to complete payment.
   */
  retrieve(paymentIntentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/gateway/checkout/${paymentIntentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancels the checkout session and redirects to cancel URL.
   */
  cancel(paymentIntentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/gateway/checkout/${paymentIntentID}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirms the payment and processes the transaction from customer wallet(s).
   * Always uses allocation-based payments.
   */
  confirm(paymentIntentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/gateway/checkout/${paymentIntentID}/confirm`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all user wallets that can be used for payment based on gateway
   * settings. Returns wallet balances and exchange rates.
   */
  getWallets(paymentIntentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/gateway/checkout/${paymentIntentID}/wallets`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
