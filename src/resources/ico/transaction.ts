// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transaction extends APIResource {
  /**
   * Creates a new ICO investment transaction for the authenticated user using
   * icoTransaction only. The wallet type and currency are derived from the
   * associated plan. It also deducts funds from the user's wallet, records the
   * transaction, updates offering stats, and sends email and in‑app notifications to
   * both investor and seller.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/ico/transaction', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed ICO transaction data by its unique identifier, including
   * associated offering and user details.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ico/transaction/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists ICO transactions with optional filters
   */
  list(query: TransactionListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/transaction', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransactionListParams {
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

export declare namespace Transaction {
  export { type TransactionListParams as TransactionListParams };
}
