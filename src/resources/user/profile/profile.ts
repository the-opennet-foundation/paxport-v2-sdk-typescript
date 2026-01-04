// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OtpAPI from './otp';
import { Otp } from './otp';
import * as WalletAPI from './wallet';
import { Wallet } from './wallet';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Profile extends APIResource {
  otp: OtpAPI.Otp = new OtpAPI.Otp(this._client);
  wallet: WalletAPI.Wallet = new WalletAPI.Wallet(this._client);

  /**
   * Fetches the profile of the currently authenticated user
   */
  retrieve(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/user/profile', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates the profile of the currently authenticated user
   */
  update(options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/user/profile', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Sends a verification email to the authenticated user's email address
   */
  resendEmailVerification(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/profile/verify-email', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Profile.Otp = Otp;
Profile.Wallet = Wallet;

export declare namespace Profile {
  export { Otp as Otp };

  export { Wallet as Wallet };
}
