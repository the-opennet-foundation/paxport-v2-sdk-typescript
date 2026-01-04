// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Verify extends APIResource {
  /**
   * Verifies the email with the provided token
   */
  email(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/verify/email', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Resends email verification token to user's email address
   */
  resendEmail(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/verify/resend', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Verifies a password reset token and sets the new password
   */
  resetPassword(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/verify/reset', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
