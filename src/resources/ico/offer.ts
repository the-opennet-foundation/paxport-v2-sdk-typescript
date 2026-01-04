// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Offer extends APIResource {
  /**
   * Retrieves detailed ICO token offering data by its unique identifier. The
   * response includes related phases, token details, team members, and roadmap
   * items. Additionally, it calculates the current and next phases based on the
   * offering's start date and the durations of its phases.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ico/offer/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves ICO token offerings filtered by a given status and additional query
   * parameters such as pagination, search, sort, blockchain, tokenType. If the
   * status is 'COMPLETED', the endpoint returns offerings with statuses 'SUCCESS'
   * and 'FAILED'.
   */
  list(query: OfferListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/offer', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the most popular ICO token offerings (by total raised).
   */
  retrieveFeatured(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/offer/featured', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves count statistics for ICO token offerings across all statuses (ACTIVE,
   * UPCOMING, COMPLETED).
   */
  retrieveStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/offer/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OfferListParams {
  /**
   * Filter by blockchain. Accepts one or more values (e.g., Ethereum, Solana,
   * Polygon, Binance Smart Chain).
   */
  blockchain?: string;

  /**
   * Number of items per page for pagination.
   */
  limit?: number;

  /**
   * Page number for pagination.
   */
  page?: number;

  /**
   * Search term to filter offerings by name or symbol.
   */
  search?: string;

  /**
   * Sort option for offerings. Valid values: newest, oldest, raised-high,
   * raised-low, target-high, target-low, ending-soon.
   */
  sort?: string;

  /**
   * The offering status to filter by (e.g., ACTIVE, UPCOMING, COMPLETED). Use
   * COMPLETED to fetch offerings with SUCCESS or FAILED status.
   */
  status?: string;

  /**
   * Filter by token type. Accepts one or more values (e.g., Utility, Security,
   * Governance).
   */
  tokenType?: string;
}

export declare namespace Offer {
  export { type OfferListParams as OfferListParams };
}
