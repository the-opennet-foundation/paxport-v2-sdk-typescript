// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Otp extends APIResource {
  /**
   * Generates an OTP secret for the user
   */
  generate(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/otp/generate', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Resends the OTP for 2FA
   */
  resend(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/otp/resend', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Saves the OTP secret and type for the user
   */
  save(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/otp/save', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Enables or disables OTP for the user
   */
  toggleStatus(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/otp/toggle', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Verifies the OTP and saves it
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/otp/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Verifies the OTP for login and returns a session token. If the OTP is invalid,
   * the provided code is checked against the recovery codes.
   */
  verifyLogin(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/otp/login', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
