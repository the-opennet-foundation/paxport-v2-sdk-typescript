// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Otp extends APIResource {
  /**
   * Generates an OTP secret and sends OTP via SMS or generates a QR code for OTP APP
   */
  generateSecret(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/profile/otp/secret', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Saves the OTP configuration for the user and generates 12 recovery codes for
   * recovery
   */
  save(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/profile/otp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Toggles the OTP feature for the user account
   */
  toggle(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/profile/otp/status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Verifies an OTP with the provided secret and type, and saves it if valid
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/profile/otp/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
