// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LogAPI from './log';
import { Log } from './log';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Investment extends APIResource {
  log: LogAPI.Log = new LogAPI.Log(this._client);

  /**
   * Fetches all active AI trading plans available for users to invest in, including
   * details about each plan and its associated durations.
   */
  listPlans(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ai/ai/investment/plan', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Investment.Log = Log;

export declare namespace Investment {
  export { Log as Log };
}
