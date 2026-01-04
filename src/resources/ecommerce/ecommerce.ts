// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoryAPI from './category';
import { Category } from './category';
import * as DiscountAPI from './discount';
import { Discount } from './discount';
import * as DownloadAPI from './download';
import { Download } from './download';
import * as OrderAPI from './order';
import { Order, OrderListParams } from './order';
import * as ProductAPI from './product';
import { Product } from './product';
import * as WishlistAPI from './wishlist';
import { Wishlist } from './wishlist';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Ecommerce extends APIResource {
  category: CategoryAPI.Category = new CategoryAPI.Category(this._client);
  discount: DiscountAPI.Discount = new DiscountAPI.Discount(this._client);
  download: DownloadAPI.Download = new DownloadAPI.Download(this._client);
  order: OrderAPI.Order = new OrderAPI.Order(this._client);
  product: ProductAPI.Product = new ProductAPI.Product(this._client);
  wishlist: WishlistAPI.Wishlist = new WishlistAPI.Wishlist(this._client);

  /**
   * Retrieves optimized data for the ecommerce landing page including stats, best
   * sellers, deals, and recent reviews.
   */
  getLandingData(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecommerce/landing', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns all shipping records for the current user, including all related order,
   * items, products, and addresses.
   */
  getShippingRecords(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecommerce/shipping', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches statistics for the ecommerce platform including product count, category
   * count, and order count.
   */
  getStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecommerce/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Allows a user to submit a review for a product they have purchased. Users can
   * only review products once, but they can update their review.
   */
  submitReview(productID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/ecommerce/review/${productID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Ecommerce.Category = Category;
Ecommerce.Discount = Discount;
Ecommerce.Download = Download;
Ecommerce.Order = Order;
Ecommerce.Product = Product;
Ecommerce.Wishlist = Wishlist;

export declare namespace Ecommerce {
  export { Category as Category };

  export { Discount as Discount };

  export { Download as Download };

  export { Order as Order, type OrderListParams as OrderListParams };

  export { Product as Product };

  export { Wishlist as Wishlist };
}
