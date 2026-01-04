// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Delete extends APIResource {
  /**
   * Checks the deletion code, deletes the user's account if valid, and sends a
   * confirmation email.
   */
  confirm(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/delete/confirm', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generates a code for confirming account deletion and sends it to the user's
   * email.
   */
  generateConfirmationCode(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/delete', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
