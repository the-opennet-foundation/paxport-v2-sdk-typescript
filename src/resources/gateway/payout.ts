// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Payout extends APIResource {
  /**
   * Gets detailed information about a specific payout for the current merchant.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/gateway/payout/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all payouts for the current merchant.
   */
  list(query: PayoutListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/gateway/payout', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PayoutListParams {
  page?: number;

  perPage?: number;

  status?: string;
}

export declare namespace Payout {
  export { type PayoutListParams as PayoutListParams };
}
