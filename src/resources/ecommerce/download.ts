// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Download extends APIResource {
  /**
   * Provides download access to purchased digital products for authenticated users.
   */
  downloadFile(orderItemID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecommerce/download/${orderItemID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Streams the actual file content for purchased digital products
   */
  streamFile(orderItemID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecommerce/download/${orderItemID}/file`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
