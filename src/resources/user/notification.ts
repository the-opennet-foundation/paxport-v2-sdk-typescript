// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Notification extends APIResource {
  /**
   * Retrieves notifications for the authenticated creator along with aggregated
   * statistics.
   */
  getAll(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/user/notification', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Marks all notifications as read for the authenticated creator.
   */
  markAllAsRead(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/notification/mark-all-read', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Marks the specified notification as read for the authenticated creator.
   */
  markAsRead(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/user/notification/${id}/read`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Marks the specified notification as unread for the authenticated creator.
   */
  markAsUnread(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/user/notification/${id}/unread`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
