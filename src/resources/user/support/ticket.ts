// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Ticket extends APIResource {
  /**
   * Creates a new support ticket for the currently authenticated user
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/support/ticket', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches detailed information about a specific support ticket identified by its
   * ID, including associated chat details.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/user/support/ticket/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches all support tickets associated with the currently authenticated user.
   */
  list(query: TicketListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/user/support/ticket', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Closes a support ticket identified by its UUID.
   */
  close(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/user/support/ticket/${id}/close`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Reply to a support ticket identified by its UUID.
   */
  reply(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/user/support/ticket/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Allows the ticket owner to submit a satisfaction rating (1-5)
   */
  setSatisfactionRating(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/user/support/ticket/${id}/review`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TicketListParams {
  /**
   * Filter criteria for records.
   */
  filter?: string;

  /**
   * Page number. Default: 1.
   */
  page?: number;

  /**
   * Number of records per page. Default: 10.
   */
  perPage?: number;

  /**
   * Show deleted records. Default: false.
   */
  showDeleted?: boolean;

  /**
   * Field name to sort by.
   */
  sortField?: string;

  /**
   * Order of sorting: asc or desc.
   */
  sortOrder?: 'asc' | 'desc';
}

export declare namespace Ticket {
  export { type TicketListParams as TicketListParams };
}
