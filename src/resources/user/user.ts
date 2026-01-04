// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountAPI from './account';
import { Account } from './account';
import * as APIKeyAPI from './api-key';
import { APIKey } from './api-key';
import * as NotificationAPI from './notification';
import { Notification } from './notification';
import * as PhoneAPI from './phone';
import { Phone } from './phone';
import * as KYCAPI from './kyc/kyc';
import { KYC } from './kyc/kyc';
import * as ProfileAPI from './profile/profile';
import { Profile } from './profile/profile';
import * as SupportAPI from './support/support';
import { Support } from './support/support';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class User extends APIResource {
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
  apiKey: APIKeyAPI.APIKey = new APIKeyAPI.APIKey(this._client);
  kyc: KYCAPI.KYC = new KYCAPI.KYC(this._client);
  notification: NotificationAPI.Notification = new NotificationAPI.Notification(this._client);
  phone: PhoneAPI.Phone = new PhoneAPI.Phone(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  support: SupportAPI.Support = new SupportAPI.Support(this._client);

  /**
   * Gets chart data for user analytics (all in POST body)
   */
  getAnalysis(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/analysis', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches user's own media files
   */
  getMedia(query: UserGetMediaParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/user/media', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserGetMediaParams {
  /**
   * Filter criteria for records.
   */
  filter?: string;

  /**
   * Page number. Default: 1.
   */
  page?: number;

  /**
   * Number of records per page. Default: 10.
   */
  perPage?: number;

  /**
   * Show deleted records. Default: false.
   */
  showDeleted?: boolean;

  /**
   * Field name to sort by.
   */
  sortField?: string;

  /**
   * Order of sorting: asc or desc.
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * The upload directory to filter by
   */
  uploadDir?: string;
}

User.Account = Account;
User.APIKey = APIKey;
User.KYC = KYC;
User.Notification = Notification;
User.Phone = Phone;
User.Profile = Profile;
User.Support = Support;

export declare namespace User {
  export { type UserGetMediaParams as UserGetMediaParams };

  export { Account as Account };

  export { APIKey as APIKey };

  export { KYC as KYC };

  export { Notification as Notification };

  export { Phone as Phone };

  export { Profile as Profile };

  export { Support as Support };
}
