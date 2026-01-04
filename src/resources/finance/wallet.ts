// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Wallet extends APIResource {
  /**
   * Fetches detailed information about a specific wallet based on its unique
   * identifier.
   */
  retrieve(currency: string, params: WalletRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { type } = params;
    return this._client.get(path`/api/finance/wallet/${type}/${currency}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all wallets with optional filters
   */
  list(query: WalletListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/wallet', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get wallet statistics including total balance, changes, and counts
   */
  getStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/wallet/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get wallet types available for transfers
   */
  getTransferOptions(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/wallet/transfer-options', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get wallet types
   */
  getTypes(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/wallet/options', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all wallets for a given type
   */
  listByType(type: 'FIAT' | 'SPOT' | 'ECO' | 'FUTURES', options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/finance/wallet/${type}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches detailed information about a specific wallet based on its unique
   * identifier.
   */
  retrieveBySymbol(query: WalletRetrieveBySymbolParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/wallet/symbol', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WalletRetrieveParams {
  /**
   * The type of wallet to retrieve
   */
  type: 'FIAT' | 'SPOT' | 'ECO' | 'FUTURES';
}

export interface WalletListParams {
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
   * Fetch PnL data for the last 28 days
   */
  pnl?: boolean;

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

export interface WalletRetrieveBySymbolParams {
  /**
   * The currency of the wallet to retrieve
   */
  currency: string;

  /**
   * The pair of the wallet to retrieve
   */
  pair: string;

  /**
   * The type of wallet to retrieve
   */
  type: 'ECO' | 'SPOT';
}

export declare namespace Wallet {
  export {
    type WalletRetrieveParams as WalletRetrieveParams,
    type WalletListParams as WalletListParams,
    type WalletRetrieveBySymbolParams as WalletRetrieveBySymbolParams,
  };
}
