// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Paypal extends APIResource {
  /**
   * Initiates a PayPal payment process by creating a new order.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/paypal', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves details for a specific PayPal order by its ID.
   */
  retrieveDetails(query: PaypalRetrieveDetailsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/paypal/details', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirms the validity of a Stripe checkout session by its session ID, ensuring
   * the session is authenticated and retrieving associated payment intent and line
   * items details.
   */
  verify(params: PaypalVerifyParams, options?: RequestOptions): APIPromise<void> {
    const { orderId } = params;
    return this._client.post('/api/finance/deposit/fiat/paypal/verify', {
      query: { orderId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PaypalRetrieveDetailsParams {
  /**
   * PayPal order ID
   */
  orderId: string;
}

export interface PaypalVerifyParams {
  /**
   * The PayPal order ID
   */
  orderId: string;
}

export declare namespace Paypal {
  export {
    type PaypalRetrieveDetailsParams as PaypalRetrieveDetailsParams,
    type PaypalVerifyParams as PaypalVerifyParams,
  };
}
