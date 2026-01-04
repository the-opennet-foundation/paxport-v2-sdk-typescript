// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Application extends APIResource {
  /**
   * Fetches a specific Know Your Customer (KYC) application, identified by ID, for
   * the currently authenticated user. This endpoint requires user authentication and
   * returns the KYC application details, including the verification status and other
   * information.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/user/kyc/application/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates an existing KYC application for the authenticated user. Expects a JSON
   * payload with a 'fields' object containing key/value pairs for each field as
   * defined in the KYC level configuration. The application to update is identified
   * by the 'id' parameter in the path. The level is derived from the existing
   * application record.
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/user/kyc/application/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches all Know Your Customer (KYC) applications for the currently
   * authenticated user. This endpoint requires user authentication and returns an
   * array with the user's KYC application information, including the verification
   * status and other details.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/user/kyc/application', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Submits a new KYC application for the authenticated user. Expects a JSON payload
   * with a valid levelId and a 'fields' object containing key/value pairs for each
   * field as defined in the KYC level configuration.
   */
  submit(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/kyc/application', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
