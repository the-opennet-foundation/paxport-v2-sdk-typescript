// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReferralAPI from './referral';
import { Referral, ReferralListReferralsParams } from './referral';
import * as RewardAPI from './reward';
import { Reward, RewardListRewardsParams } from './reward';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Affiliate extends APIResource {
  referral: ReferralAPI.Referral = new ReferralAPI.Referral(this._client);
  reward: RewardAPI.Reward = new RewardAPI.Reward(this._client);

  /**
   * Retrieves dashboard data for the authenticated affiliate, with optional period
   * filtering.
   */
  getDashboard(
    query: AffiliateGetDashboardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/affiliate', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves comprehensive data for the affiliate landing page including stats,
   * conditions, top affiliates, and recent activity.
   */
  getLandingPageData(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/affiliate/landing', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the current user's affiliate network data for client visualization.
   */
  getNetworkNode(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/affiliate/network', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches public statistics for the affiliate program including total affiliates,
   * total paid out, average monthly earnings, and success rate.
   */
  getProgramStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/affiliate/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all MLM Referral Conditions with pagination and optional filtering
   */
  listConditions(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/affiliate/condition', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AffiliateGetDashboardParams {
  period?: '1m' | '3m' | '6m' | '1y';
}

Affiliate.Referral = Referral;
Affiliate.Reward = Reward;

export declare namespace Affiliate {
  export { type AffiliateGetDashboardParams as AffiliateGetDashboardParams };

  export { Referral as Referral, type ReferralListReferralsParams as ReferralListReferralsParams };

  export { Reward as Reward, type RewardListRewardsParams as RewardListRewardsParams };
}
