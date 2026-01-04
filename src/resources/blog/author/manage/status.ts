// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Status extends APIResource {
  /**
   * Update Status for a Post
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/blog/author/manage/${id}/status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Bulk updates the status of Posts
   */
  bulkUpdate(options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/blog/author/manage/status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
