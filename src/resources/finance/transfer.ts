// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Transfer extends APIResource {
  /**
   * Initiates a transfer transaction for the currently authenticated user
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/transfer', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Validates if a recipient UUID exists for transfer operations
   */
  validateRecipient(query: TransferValidateRecipientParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/transfer/validate', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransferValidateRecipientParams {
  /**
   * The UUID of the recipient to validate
   */
  uuid: string;
}

export declare namespace Transfer {
  export { type TransferValidateRecipientParams as TransferValidateRecipientParams };
}
