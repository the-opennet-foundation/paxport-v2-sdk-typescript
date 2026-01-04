// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Deposit extends APIResource {
  /**
   * Allows administrative unlocking of a custodial wallet deposit address to make it
   * available for reuse. This is typically used for NO_PERMIT token addresses that
   * need to be released after deposit completion.
   */
  unlock(query: DepositUnlockParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecosystem/deposit/unlock', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DepositUnlockParams {
  /**
   * The deposit address to unlock (must be a valid address format)
   */
  address: string;
}

export declare namespace Deposit {
  export { type DepositUnlockParams as DepositUnlockParams };
}
