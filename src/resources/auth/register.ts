// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Register extends APIResource {
  /**
   * Registers a new user and returns a session token
   */
  default(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/register', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Registers a new user using Google and returns a session token
   */
  google(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/register/google', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
