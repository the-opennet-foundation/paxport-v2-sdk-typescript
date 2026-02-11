// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Release extends APIResource {
  /**
   * Submits the transaction hash after sending tokens to the investor and updates
   * the token release status to VERIFICATION.
   */
  update(transactionID: string, params: ReleaseUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.put(path`/api/ico/creator/token/${id}/release/${transactionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves token release transactions for a given token (offering) ID, optionally
   * filtered by status and paginated with sorting support.
   */
  list(
    id: string,
    query: ReleaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/ico/creator/token/${id}/release`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ReleaseUpdateParams {
  /**
   * ID of the token offering
   */
  id: string;
}

export interface ReleaseListParams {
  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Sort direction: asc or desc (default is desc)
   */
  sortDirection?: string;

  /**
   * Field to sort by (default is createdAt). For associated models use dot notation
   * (e.g., 'user.firstName')
   */
  sortField?: string;

  /**
   * Filter transactions by status (PENDING, VERIFICATION, RELEASED)
   */
  status?: string;
}

export declare namespace Release {
  export { type ReleaseUpdateParams as ReleaseUpdateParams, type ReleaseListParams as ReleaseListParams };
}
