// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessageAPI from './message';
import { Message } from './message';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Trade extends APIResource {
  message: MessageAPI.Message = new MessageAPI.Message(this._client);

  /**
   * Cancels a trade with a provided cancellation reason.
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/p2p/trade/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates the trade status to 'PAYMENT_SENT' to confirm that payment has been
   * made.
   */
  confirmPayment(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/p2p/trade/${id}/confirm`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a dispute for a trade by providing a reason and description.
   */
  dispute(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/p2p/trade/${id}/dispute`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves detailed trade data for the given trade ID.
   */
  getByID(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/p2p/trade/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves aggregated trade data for the authenticated user.
   */
  getDashboardData(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/trade', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves paginated trade history for the authenticated user with filtering
   * options.
   */
  getHistory(
    query: TradeGetHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/p2p/trade/history', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Releases funds and updates the trade status to 'COMPLETED' for the authenticated
   * seller.
   */
  releaseFunds(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/p2p/trade/${id}/release`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Submits a review for a trade with rating and feedback.
   */
  submitReview(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/p2p/trade/${id}/review`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TradeGetHistoryParams {
  /**
   * Filter by cryptocurrency
   */
  currency?: string;

  /**
   * Filter trades from this date
   */
  dateFrom?: string;

  /**
   * Filter trades until this date
   */
  dateTo?: string;

  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Page number (1-based)
   */
  page?: number;

  /**
   * Search by trade ID or counterparty name
   */
  search?: string;

  /**
   * Sort field
   */
  sortBy?: 'createdAt' | 'updatedAt' | 'amount' | 'totalAmount' | 'status';

  /**
   * Sort order
   */
  sortOrder?: 'ASC' | 'DESC';

  /**
   * Filter by trade status
   */
  status?:
    | 'PENDING'
    | 'PAYMENT_SENT'
    | 'ESCROW_RELEASED'
    | 'COMPLETED'
    | 'DISPUTED'
    | 'CANCELLED'
    | 'EXPIRED';

  /**
   * Filter by trade type
   */
  type?: 'BUY' | 'SELL';
}

Trade.Message = Message;

export declare namespace Trade {
  export { type TradeGetHistoryParams as TradeGetHistoryParams };

  export { Message as Message };
}
