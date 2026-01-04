// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Investment extends APIResource {
  /**
   * Allows a user to initiate a new Forex investment.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/forex/investment', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed information of a specific forex investment by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/forex/investment/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists user's Forex Investments with pagination and optional filtering
   */
  list(query: InvestmentListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/forex/investment', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches details of a specific Forex investment for the logged-in user.
   */
  getStatus(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/forex/investment/${id}/status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches active Forex investments associated with the currently authenticated
   * user.
   */
  listActive(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/forex/investment/active', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InvestmentListParams {
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

export declare namespace Investment {
  export { type InvestmentListParams as InvestmentListParams };
}
