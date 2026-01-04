// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transaction extends APIResource {
  /**
   * Fetches detailed information about a specific transaction based on its unique
   * reference ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/finance/transaction/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists transactions with optional filters
   */
  list(query: TransactionListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/transaction', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransactionListParams {
  /**
   * Currency of the wallet
   */
  currency?: string;

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

  /**
   * Type of the wallet
   */
  walletType?: string;
}

export declare namespace Transaction {
  export { type TransactionListParams as TransactionListParams };
}
