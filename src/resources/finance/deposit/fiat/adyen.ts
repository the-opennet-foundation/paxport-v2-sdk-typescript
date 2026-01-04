// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Adyen extends APIResource {
  /**
   * Initiates an Adyen payment process by creating a payment session using Adyen's
   * Sessions flow. This endpoint supports web checkout with multiple payment methods
   * including cards, digital wallets, and local payment methods.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/adyen', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the current status of an Adyen payment by transaction reference. This
   * endpoint provides real-time payment status information for tracking and
   * reconciliation purposes.
   */
  retrieveStatus(query: AdyenRetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/adyen/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Manually verifies an Adyen payment by checking the payment status and updating
   * the transaction accordingly. This endpoint is used for manual verification when
   * automatic webhook processing is not available.
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/adyen/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Processes Adyen webhook notifications for payment events. This endpoint handles
   * automatic payment status updates, wallet balance updates, and transaction
   * processing based on Adyen's notification system.
   */
  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/adyen/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AdyenRetrieveStatusParams {
  /**
   * Transaction reference to check status for
   */
  reference: string;
}

export declare namespace Adyen {
  export { type AdyenRetrieveStatusParams as AdyenRetrieveStatusParams };
}
