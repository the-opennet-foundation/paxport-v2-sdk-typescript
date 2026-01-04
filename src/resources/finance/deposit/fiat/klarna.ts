// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Klarna extends APIResource {
  /**
   * Initiates a Klarna payment process by creating a payment session with Buy Now,
   * Pay Later options. Supports multiple payment methods including Pay Now, Pay
   * Later, and Pay in Installments.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/klarna', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the current status of a Klarna order and updates the local transaction
   * record.
   */
  retrieveStatus(query: KlarnaRetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/klarna/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Handles the return URL from Klarna checkout, verifies the authorization token,
   * and creates an order to complete the payment process.
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/klarna/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Processes webhook notifications from Klarna for order status updates and payment
   * confirmations.
   */
  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/klarna/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface KlarnaRetrieveStatusParams {
  /**
   * Klarna order ID to check status for
   */
  order_id: string;

  /**
   * Local transaction ID (optional, for validation)
   */
  transaction_id?: string;
}

export declare namespace Klarna {
  export { type KlarnaRetrieveStatusParams as KlarnaRetrieveStatusParams };
}
