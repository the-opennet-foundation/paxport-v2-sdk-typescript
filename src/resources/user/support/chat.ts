// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Chat extends APIResource {
  /**
   * Fetches the existing live chat ticket for the authenticated user, or creates a
   * new one if none exists.
   */
  retrieveOrCreate(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/user/support/chat', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Sends a message to the live chat session
   */
  sendMessage(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/support/chat', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
