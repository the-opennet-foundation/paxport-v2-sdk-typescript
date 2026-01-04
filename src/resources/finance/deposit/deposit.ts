// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FiatAPI from './fiat/fiat';
import { Fiat } from './fiat/fiat';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Deposit extends APIResource {
  fiat: FiatAPI.Fiat = new FiatAPI.Fiat(this._client);

  /**
   * This endpoint initiates a spot deposit transaction for the user
   */
  spot(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/spot', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Deposit.Fiat = Fiat;

export declare namespace Deposit {
  export { Fiat as Fiat };
}
