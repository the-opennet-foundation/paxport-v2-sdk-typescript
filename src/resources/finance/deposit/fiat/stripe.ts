// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Stripe extends APIResource {
  /**
   * Initiates a Stripe payment process by creating either a payment intent or a
   * checkout session, based on the request parameters. This endpoint supports
   * different workflows for web and Flutter applications.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/stripe', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirms the validity of a Stripe checkout session by its session ID, ensuring
   * the session is authenticated and retrieving associated payment intent and line
   * items details.
   */
  verified(params: StripeVerifiedParams, options?: RequestOptions): APIPromise<void> {
    const { sessionId } = params;
    return this._client.post('/api/finance/deposit/fiat/stripe/verified', {
      query: { sessionId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirms the validity of a Stripe checkout session by its session ID, ensuring
   * the session is authenticated and retrieving associated payment intent and line
   * items details.
   */
  verify(params: StripeVerifyParams, options?: RequestOptions): APIPromise<void> {
    const { sessionId } = params;
    return this._client.post('/api/finance/deposit/fiat/stripe/verify', {
      query: { sessionId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirms a completed Stripe payment intent and creates the corresponding wallet
   * transaction
   */
  verifyIntent(params: StripeVerifyIntentParams, options?: RequestOptions): APIPromise<void> {
    const { intentId } = params;
    return this._client.post('/api/finance/deposit/fiat/stripe/verify-intent', {
      query: { intentId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface StripeVerifiedParams {
  /**
   * Stripe checkout session ID
   */
  sessionId: string;
}

export interface StripeVerifyParams {
  /**
   * Stripe checkout session ID
   */
  sessionId: string;
}

export interface StripeVerifyIntentParams {
  /**
   * Stripe payment intent ID (pi_xxxxx)
   */
  intentId: string;
}

export declare namespace Stripe {
  export {
    type StripeVerifiedParams as StripeVerifiedParams,
    type StripeVerifyParams as StripeVerifyParams,
    type StripeVerifyIntentParams as StripeVerifyIntentParams,
  };
}
