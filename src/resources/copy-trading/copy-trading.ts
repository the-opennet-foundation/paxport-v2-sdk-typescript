// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TradeAPI from './trade';
import { Trade, TradeGetHistoryParams } from './trade';
import * as FollowerAPI from './follower/follower';
import { Follower, FollowerGetSubscriptionsParams } from './follower/follower';
import * as LeaderAPI from './leader/leader';
import { Leader, LeaderGetAvailableLeadersParams } from './leader/leader';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class CopyTrading extends APIResource {
  follower: FollowerAPI.Follower = new FollowerAPI.Follower(this._client);
  leader: LeaderAPI.Leader = new LeaderAPI.Leader(this._client);
  trade: TradeAPI.Trade = new TradeAPI.Trade(this._client);

  /**
   * Retrieves comprehensive analytics for the user's copy trading activities.
   */
  getAnalytics(
    query: CopyTradingGetAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/copy-trading/analytics', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the user's copy trading dashboard overview including leader profile
   * (if any), subscriptions summary, and recent trades.
   */
  getDashboard(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/copy-trading', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves optimized data for the copy trading landing page including stats, top
   * leaders, and recent activity.
   */
  getLandingPageData(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/copy-trading/landing', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves public statistics about the copy trading platform including total
   * leaders, followers, volume, and average ROI.
   */
  getPlatformStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/copy-trading/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the user's copy trading financial transaction history with filtering
   * and pagination.
   */
  getTransactions(
    query: CopyTradingGetTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/copy-trading/transaction', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CopyTradingGetAnalyticsParams {
  /**
   * Time period for analytics
   */
  period?: '24h' | '7d' | '30d' | '90d' | '1y' | 'all';
}

export interface CopyTradingGetTransactionsParams {
  /**
   * Filter transactions from this date
   */
  dateFrom?: string;

  /**
   * Filter transactions until this date
   */
  dateTo?: string;

  /**
   * Filter by subscription/follower ID
   */
  followerId?: string;

  /**
   * Filter by leader ID
   */
  leaderId?: string;

  /**
   * Items per page
   */
  limit?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter by transaction type
   */
  type?: 'ALLOCATION' | 'DEALLOCATION' | 'PROFIT' | 'LOSS' | 'PROFIT_SHARE' | 'PLATFORM_FEE' | 'REFUND';
}

CopyTrading.Follower = Follower;
CopyTrading.Leader = Leader;
CopyTrading.Trade = Trade;

export declare namespace CopyTrading {
  export {
    type CopyTradingGetAnalyticsParams as CopyTradingGetAnalyticsParams,
    type CopyTradingGetTransactionsParams as CopyTradingGetTransactionsParams,
  };

  export { Follower as Follower, type FollowerGetSubscriptionsParams as FollowerGetSubscriptionsParams };

  export { Leader as Leader, type LeaderGetAvailableLeadersParams as LeaderGetAvailableLeadersParams };

  export { Trade as Trade, type TradeGetHistoryParams as TradeGetHistoryParams };
}
