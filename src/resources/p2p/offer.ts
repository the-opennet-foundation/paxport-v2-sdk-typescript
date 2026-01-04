// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Offer extends APIResource {
  /**
   * Creates a new offer with structured configurations for the authenticated user,
   * and associates payment methods.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/p2p/offer', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates specific fields of a P2P offer with security restrictions
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/p2p/offer/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all p2p offers with pagination and optional filtering
   */
  list(query: OfferListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/offer', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes a P2P offer. Only the owner can delete their offer.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/p2p/offer/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed offer data by its ID, including computed seller metrics and
   * ratings.
   */
  getByID(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/p2p/offer/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves popular offers ordered by a calculated popularity score based on the
   * number of completed trades (via offerId) and average review ratings from those
   * trades.
   */
  getPopular(query: OfferGetPopularParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/offer/popularity', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all offers created by the authenticated user, including ACTIVE and
   * PAUSED offers
   */
  getUserOffers(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/offer/user', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a new trade from an active P2P offer with proper validation and balance
   * locking
   */
  initiateTrade(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/p2p/offer/${id}/initiate-trade`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OfferListParams {
  /**
   * Filter criteria for records.
   */
  filter?: string;

  /**
   * Page number. Default: 1.
   */
  page?: number;

  /**
   * Number of records per page. Default: 10.
   */
  perPage?: number;

  /**
   * Show deleted records. Default: false.
   */
  showDeleted?: boolean;

  /**
   * Field name to sort by.
   */
  sortField?: string;

  /**
   * Order of sorting: asc or desc.
   */
  sortOrder?: 'asc' | 'desc';
}

export interface OfferGetPopularParams {
  /**
   * Maximum number of offers to return
   */
  limit: number;
}

export declare namespace Offer {
  export { type OfferListParams as OfferListParams, type OfferGetPopularParams as OfferGetPopularParams };
}
