// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Message extends APIResource {
  /**
   * Retrieves messages (stored in timeline) for the specified trade.
   */
  get(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/p2p/trade/${id}/message`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Sends a message within a trade (appended to the timeline).
   */
  send(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/p2p/trade/${id}/message`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Uploads an image as a message attachment in the trade chat.
   */
  uploadImage(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/p2p/trade/${id}/message/upload`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
