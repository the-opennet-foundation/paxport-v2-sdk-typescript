// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PageAPI from './page';
import { Page } from './page';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Content extends APIResource {
  page: PageAPI.Page = new PageAPI.Page(this._client);

  /**
   * List all sliders
   */
  listSliders(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/content/slider', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get default page content
   */
  retrieveDefaultPage(
    pageID: string,
    query: ContentRetrieveDefaultPageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/content/default-page/${pageID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns platform statistics and features based on enabled extensions and
   * settings
   */
  retrieveLandingStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/content/landing-stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ContentRetrieveDefaultPageParams {
  /**
   * Page source type - default for regular pages, builder for builder-created pages
   */
  pageSource?: 'default' | 'builder';
}

Content.Page = Page;

export declare namespace Content {
  export { type ContentRetrieveDefaultPageParams as ContentRetrieveDefaultPageParams };

  export { Page as Page };
}
