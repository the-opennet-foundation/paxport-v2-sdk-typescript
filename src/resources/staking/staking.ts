// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PoolAPI from './pool';
import { Pool, PoolGetAnalyticsParams, PoolListParams } from './pool';
import * as PositionAPI from './position';
import { Position, PositionGetEarningsParams, PositionListParams } from './position';
import * as UserAPI from './user';
import { User, UserGetEarningsParams } from './user';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Staking extends APIResource {
  pool: PoolAPI.Pool = new PoolAPI.Pool(this._client);
  position: PositionAPI.Position = new PositionAPI.Position(this._client);
  user: UserAPI.User = new UserAPI.User(this._client);

  /**
   * Calculates potential rewards for a given amount and duration based on available
   * staking pools.
   */
  calculateRewards(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/staking/calculate-rewards', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves comprehensive data for the Staking landing page including stats,
   * featured pools, token diversity, and activity.
   */
  getLanding(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/staking/landing', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns total staked value, active users, and average APR.
   */
  getStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/staking/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Staking.Pool = Pool;
Staking.Position = Position;
Staking.User = User;

export declare namespace Staking {
  export {
    Pool as Pool,
    type PoolListParams as PoolListParams,
    type PoolGetAnalyticsParams as PoolGetAnalyticsParams,
  };

  export {
    Position as Position,
    type PositionListParams as PositionListParams,
    type PositionGetEarningsParams as PositionGetEarningsParams,
  };

  export { User as User, type UserGetEarningsParams as UserGetEarningsParams };
}
