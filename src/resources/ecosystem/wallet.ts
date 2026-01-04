// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Wallet extends APIResource {
  /**
   * Retrieves details of a wallet associated with the logged-in user by its
   * currency.
   */
  retrieve(
    currency: string,
    query: WalletRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/ecosystem/wallet/${currency}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all wallets associated with the logged-in user, optionally including
   * transactions and address.
   */
  list(query: WalletListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecosystem/wallet', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Allows a user to transfer funds to another user's wallet.
   */
  transfer(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/ecosystem/wallet/${id}/transfer`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WalletRetrieveParams {
  /**
   * Chain of the wallet address
   */
  chain?: string;

  /**
   * Chain of the wallet address
   */
  contractType?: string;
}

export interface WalletListParams {
  /**
   * Whether to include wallet address
   */
  address?: boolean;

  /**
   * Whether to include transaction details
   */
  transactions?: boolean;
}

export declare namespace Wallet {
  export { type WalletRetrieveParams as WalletRetrieveParams, type WalletListParams as WalletListParams };
}
