// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Discount extends APIResource {
  /**
   * Allows a user to apply a discount code to a product if the discount is active
   * and has not expired.
   */
  apply(productID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/ecommerce/discount/${productID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Validates a discount code and returns discount information if valid.
   */
  validate(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/ecommerce/discount/validate', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
