// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PaymentAPI from './payment';
import { Payment } from './payment';
import * as RefundAPI from './refund';
import { Refund } from './refund';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  payment: PaymentAPI.Payment = new PaymentAPI.Payment(this._client);
  refund: RefundAPI.Refund = new RefundAPI.Refund(this._client);

  /**
   * Validates an API key and returns information about the merchant and permissions.
   */
  validate(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/gateway/v1/validate', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

V1.Payment = Payment;
V1.Refund = Refund;

export declare namespace V1 {
  export { Payment as Payment };

  export { Refund as Refund };
}
