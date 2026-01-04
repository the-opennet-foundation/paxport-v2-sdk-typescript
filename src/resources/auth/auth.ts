// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeleteAPI from './delete';
import { Delete } from './delete';
import * as LoginAPI from './login';
import { Login, LoginChatParams } from './login';
import * as OtpAPI from './otp';
import { Otp } from './otp';
import * as RegisterAPI from './register';
import { Register } from './register';
import * as VerifyAPI from './verify';
import { Verify } from './verify';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  delete: DeleteAPI.Delete = new DeleteAPI.Delete(this._client);
  login: LoginAPI.Login = new LoginAPI.Login(this._client);
  otp: OtpAPI.Otp = new OtpAPI.Otp(this._client);
  register: RegisterAPI.Register = new RegisterAPI.Register(this._client);
  verify: VerifyAPI.Verify = new VerifyAPI.Verify(this._client);

  /**
   * Retrieves all roles
   */
  listRoles(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/role', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Logs out the current user and clears all session tokens
   */
  logout(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/logout', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Initiates a password reset process for a user and sends an email with a reset
   * link
   */
  resetPassword(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/reset', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves session data from Redis by sessionId
   */
  retrieveSession(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/session', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Auth.Delete = Delete;
Auth.Login = Login;
Auth.Otp = Otp;
Auth.Register = Register;
Auth.Verify = Verify;

export declare namespace Auth {
  export { Delete as Delete };

  export { Login as Login, type LoginChatParams as LoginChatParams };

  export { Otp as Otp };

  export { Register as Register };

  export { Verify as Verify };
}
