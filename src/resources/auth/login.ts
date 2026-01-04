// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Login extends APIResource {
  /**
   * Logs in a user to the chat service and returns a session token
   */
  chat(query: LoginChatParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/login/chat', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Logs in a user and returns a session token
   */
  default(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/login', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Logs in a user and returns a session token
   */
  flutter(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/login/flutter', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generates a nonce for client use
   */
  generateNonce(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/auth/login/nonce', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Logs in a user using Google and returns a session token
   */
  google(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/login/google', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Logs in a user using Sign-In With Ethereum (SIWE)
   */
  siwe(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/auth/login/wallet', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LoginChatParams {
  /**
   * Email of the user
   */
  email: string;

  /**
   * First name of the user
   */
  firstName: string;

  /**
   * Last name of the user
   */
  lastName: string;

  /**
   * Password of the user
   */
  password: string;
}

export declare namespace Login {
  export { type LoginChatParams as LoginChatParams };
}
