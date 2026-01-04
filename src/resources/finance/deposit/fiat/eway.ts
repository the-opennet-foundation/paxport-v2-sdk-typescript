// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Eway extends APIResource {
  /**
   * Initiates an eWAY payment process for Asia-Pacific region. Supports multiple
   * connection methods including Transparent Redirect, Direct Connection, and
   * Responsive Shared Page.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/eway', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve current payment status from eWAY API without updating local database
   */
  retrieveStatus(
    query: EwayRetrieveStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/eway/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Verify an eWAY payment status using access code and update transaction
   * accordingly
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/eway/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EwayRetrieveStatusParams {
  /**
   * eWAY access code to check
   */
  access_code?: string;

  /**
   * Internal reference ID to check
   */
  reference?: string;

  /**
   * eWAY transaction ID to check
   */
  transaction_id?: string;
}

export declare namespace Eway {
  export { type EwayRetrieveStatusParams as EwayRetrieveStatusParams };
}
