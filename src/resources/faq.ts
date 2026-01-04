// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Faq extends APIResource {
  /**
   * Retrieves a single FAQ entry by its ID, including its related FAQs, computed
   * helpfulCount from feedback, and increments the view count.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/faq/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves distinct FAQ categories.
   */
  listCategories(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/faq/category', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves active FAQ entries with optional search, category filters and
   * pagination.
   */
  listPublic(query: FaqListPublicParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/faq', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves statistics for the FAQ knowledge base including popular FAQs, trending
   * searches, and category stats.
   */
  retrieveStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/faq/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Searches FAQs based on query and category, and records the search for analytics.
   */
  search(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/faq/search', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates or updates a feedback record for a specific FAQ. If a feedback record
   * already exists for the user and FAQ, it updates the comment field.
   */
  submitFeedback(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/faq/${id}/feedback`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Allows a user to submit a question if they cannot find an answer in the FAQs.
   */
  submitQuestion(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/faq/question', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FaqListPublicParams {
  /**
   * Filter by active status
   */
  active?: string;

  /**
   * Filter by FAQ category
   */
  category?: string;

  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Search query for FAQ question or answer
   */
  search?: string;
}

export declare namespace Faq {
  export { type FaqListPublicParams as FaqListPublicParams };
}
