# Affiliate

Methods:

- <code title="get /api/affiliate">client.affiliate.<a href="./src/resources/affiliate/affiliate.ts">getDashboard</a>({ ...params }) -> void</code>
- <code title="get /api/affiliate/landing">client.affiliate.<a href="./src/resources/affiliate/affiliate.ts">getLandingPageData</a>() -> void</code>
- <code title="get /api/affiliate/network">client.affiliate.<a href="./src/resources/affiliate/affiliate.ts">getNetworkNode</a>() -> void</code>
- <code title="get /api/affiliate/stats">client.affiliate.<a href="./src/resources/affiliate/affiliate.ts">getProgramStats</a>() -> void</code>
- <code title="get /api/affiliate/condition">client.affiliate.<a href="./src/resources/affiliate/affiliate.ts">listConditions</a>() -> void</code>

## Referral

Methods:

- <code title="post /api/affiliate/referral/analysis">client.affiliate.referral.<a href="./src/resources/affiliate/referral.ts">getAnalysisData</a>() -> void</code>
- <code title="get /api/affiliate/referral/{id}">client.affiliate.referral.<a href="./src/resources/affiliate/referral.ts">getDetails</a>(id) -> void</code>
- <code title="get /api/affiliate/referral/node">client.affiliate.referral.<a href="./src/resources/affiliate/referral.ts">getNodeDetails</a>() -> void</code>
- <code title="get /api/affiliate/referral">client.affiliate.referral.<a href="./src/resources/affiliate/referral.ts">listReferrals</a>({ ...params }) -> void</code>

## Reward

Methods:

- <code title="post /api/affiliate/reward/{id}/claim">client.affiliate.reward.<a href="./src/resources/affiliate/reward.ts">claimReward</a>(id) -> void</code>
- <code title="get /api/affiliate/reward">client.affiliate.reward.<a href="./src/resources/affiliate/reward.ts">listRewards</a>({ ...params }) -> void</code>

# AI

## AI

### Investment

Methods:

- <code title="get /api/ai/ai/investment/plan">client.ai.ai.investment.<a href="./src/resources/ai/ai_/investment/investment.ts">listPlans</a>() -> void</code>

#### Log

Methods:

- <code title="post /api/ai/ai/investment/log">client.ai.ai.investment.log.<a href="./src/resources/ai/ai_/investment/log.ts">create</a>() -> void</code>
- <code title="get /api/ai/ai/investment/log/{id}">client.ai.ai.investment.log.<a href="./src/resources/ai/ai_/investment/log.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/ai/ai/investment/log">client.ai.ai.investment.log.<a href="./src/resources/ai/ai_/investment/log.ts">list</a>() -> void</code>

## Investment

Methods:

- <code title="get /api/ai/investment/plan">client.ai.investment.<a href="./src/resources/ai/investment/investment.ts">listPlans</a>() -> void</code>

### Log

Methods:

- <code title="post /api/ai/investment/log">client.ai.investment.log.<a href="./src/resources/ai/investment/log.ts">create</a>() -> void</code>
- <code title="get /api/ai/investment/log/{id}">client.ai.investment.log.<a href="./src/resources/ai/investment/log.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/ai/investment/log">client.ai.investment.log.<a href="./src/resources/ai/investment/log.ts">list</a>() -> void</code>

# CopyTrading

Methods:

- <code title="get /api/copy-trading/analytics">client.copyTrading.<a href="./src/resources/copy-trading/copy-trading.ts">getAnalytics</a>({ ...params }) -> void</code>
- <code title="get /api/copy-trading">client.copyTrading.<a href="./src/resources/copy-trading/copy-trading.ts">getDashboard</a>() -> void</code>
- <code title="get /api/copy-trading/landing">client.copyTrading.<a href="./src/resources/copy-trading/copy-trading.ts">getLandingPageData</a>() -> void</code>
- <code title="get /api/copy-trading/stats">client.copyTrading.<a href="./src/resources/copy-trading/copy-trading.ts">getPlatformStats</a>() -> void</code>
- <code title="get /api/copy-trading/transaction">client.copyTrading.<a href="./src/resources/copy-trading/copy-trading.ts">getTransactions</a>({ ...params }) -> void</code>

## Follower

Methods:

- <code title="post /api/copy-trading/follower/follow">client.copyTrading.follower.<a href="./src/resources/copy-trading/follower/follower.ts">followLeader</a>() -> void</code>
- <code title="get /api/copy-trading/follower/{id}">client.copyTrading.follower.<a href="./src/resources/copy-trading/follower/follower.ts">getDetails</a>(id) -> void</code>
- <code title="get /api/copy-trading/follower">client.copyTrading.follower.<a href="./src/resources/copy-trading/follower/follower.ts">getSubscriptions</a>({ ...params }) -> void</code>
- <code title="post /api/copy-trading/follower/{id}/pause">client.copyTrading.follower.<a href="./src/resources/copy-trading/follower/follower.ts">pauseSubscription</a>(id) -> void</code>
- <code title="post /api/copy-trading/follower/{id}/resume">client.copyTrading.follower.<a href="./src/resources/copy-trading/follower/follower.ts">resumeSubscription</a>(id) -> void</code>
- <code title="post /api/copy-trading/follower/{id}/stop">client.copyTrading.follower.<a href="./src/resources/copy-trading/follower/follower.ts">stopSubscription</a>(id) -> void</code>
- <code title="put /api/copy-trading/follower/{id}">client.copyTrading.follower.<a href="./src/resources/copy-trading/follower/follower.ts">updateSettings</a>(id) -> void</code>

### Allocation

Methods:

- <code title="post /api/copy-trading/follower/{id}/allocation/{allocationId}/add-funds">client.copyTrading.follower.allocation.<a href="./src/resources/copy-trading/follower/allocation.ts">addFunds</a>(allocationID, { ...params }) -> void</code>
- <code title="post /api/copy-trading/follower/{id}/allocation">client.copyTrading.follower.allocation.<a href="./src/resources/copy-trading/follower/allocation.ts">createAllocation</a>(id) -> void</code>
- <code title="get /api/copy-trading/follower/{id}/allocation">client.copyTrading.follower.allocation.<a href="./src/resources/copy-trading/follower/allocation.ts">getAllocations</a>(id) -> void</code>
- <code title="post /api/copy-trading/follower/{id}/allocation/{allocationId}/remove-funds">client.copyTrading.follower.allocation.<a href="./src/resources/copy-trading/follower/allocation.ts">removeFunds</a>(allocationID, { ...params }) -> void</code>

## Leader

Methods:

- <code title="post /api/copy-trading/leader/apply">client.copyTrading.leader.<a href="./src/resources/copy-trading/leader/leader.ts">applyToBecomeLeader</a>() -> void</code>
- <code title="get /api/copy-trading/leader/eligibility">client.copyTrading.leader.<a href="./src/resources/copy-trading/leader/leader.ts">checkEligibility</a>() -> void</code>
- <code title="get /api/copy-trading/leader">client.copyTrading.leader.<a href="./src/resources/copy-trading/leader/leader.ts">getAvailableLeaders</a>({ ...params }) -> void</code>
- <code title="get /api/copy-trading/leader/{id}">client.copyTrading.leader.<a href="./src/resources/copy-trading/leader/leader.ts">getDetails</a>(id) -> void</code>

### Market

Methods:

- <code title="post /api/copy-trading/leader/market">client.copyTrading.leader.market.<a href="./src/resources/copy-trading/leader/market.ts">addMarket</a>() -> void</code>
- <code title="get /api/copy-trading/leader/{id}/market">client.copyTrading.leader.market.<a href="./src/resources/copy-trading/leader/market.ts">getDeclaredMarkets</a>(id) -> void</code>
- <code title="get /api/copy-trading/leader/market">client.copyTrading.leader.market.<a href="./src/resources/copy-trading/leader/market.ts">getDeclaredMarketsWithCounts</a>() -> void</code>
- <code title="put /api/copy-trading/leader/market/{symbol}/toggle">client.copyTrading.leader.market.<a href="./src/resources/copy-trading/leader/market.ts">toggleStatus</a>(symbol) -> void</code>
- <code title="put /api/copy-trading/leader/market/{symbol}">client.copyTrading.leader.market.<a href="./src/resources/copy-trading/leader/market.ts">updateSettings</a>(symbol) -> void</code>

### Me

Methods:

- <code title="get /api/copy-trading/leader/me">client.copyTrading.leader.me.<a href="./src/resources/copy-trading/leader/me.ts">getProfile</a>() -> void</code>
- <code title="put /api/copy-trading/leader/me">client.copyTrading.leader.me.<a href="./src/resources/copy-trading/leader/me.ts">updateProfile</a>() -> void</code>

## Trade

Methods:

- <code title="get /api/copy-trading/trade/{id}">client.copyTrading.trade.<a href="./src/resources/copy-trading/trade.ts">getDetails</a>(id) -> void</code>
- <code title="get /api/copy-trading/trade">client.copyTrading.trade.<a href="./src/resources/copy-trading/trade.ts">getHistory</a>({ ...params }) -> void</code>

# Ecommerce

Methods:

- <code title="get /api/ecommerce/landing">client.ecommerce.<a href="./src/resources/ecommerce/ecommerce.ts">getLandingData</a>() -> void</code>
- <code title="get /api/ecommerce/shipping">client.ecommerce.<a href="./src/resources/ecommerce/ecommerce.ts">getShippingRecords</a>() -> void</code>
- <code title="get /api/ecommerce/stats">client.ecommerce.<a href="./src/resources/ecommerce/ecommerce.ts">getStats</a>() -> void</code>
- <code title="post /api/ecommerce/review/{productId}">client.ecommerce.<a href="./src/resources/ecommerce/ecommerce.ts">submitReview</a>(productID) -> void</code>

## Category

Methods:

- <code title="get /api/ecommerce/category/{slug}">client.ecommerce.category.<a href="./src/resources/ecommerce/category.ts">retrieve</a>(slug) -> void</code>
- <code title="get /api/ecommerce/category">client.ecommerce.category.<a href="./src/resources/ecommerce/category.ts">list</a>() -> void</code>
- <code title="get /api/ecommerce/category/{slug}/product">client.ecommerce.category.<a href="./src/resources/ecommerce/category.ts">listProducts</a>(slug) -> void</code>

## Discount

Methods:

- <code title="post /api/ecommerce/discount/{productId}">client.ecommerce.discount.<a href="./src/resources/ecommerce/discount.ts">apply</a>(productID) -> void</code>
- <code title="post /api/ecommerce/discount/validate">client.ecommerce.discount.<a href="./src/resources/ecommerce/discount.ts">validate</a>() -> void</code>

## Download

Methods:

- <code title="get /api/ecommerce/download/{orderItemId}">client.ecommerce.download.<a href="./src/resources/ecommerce/download.ts">downloadFile</a>(orderItemID) -> void</code>
- <code title="get /api/ecommerce/download/{orderItemId}/file">client.ecommerce.download.<a href="./src/resources/ecommerce/download.ts">streamFile</a>(orderItemID) -> void</code>

## Order

Methods:

- <code title="post /api/ecommerce/order">client.ecommerce.order.<a href="./src/resources/ecommerce/order.ts">create</a>() -> void</code>
- <code title="get /api/ecommerce/order/{id}">client.ecommerce.order.<a href="./src/resources/ecommerce/order.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/ecommerce/order">client.ecommerce.order.<a href="./src/resources/ecommerce/order.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/ecommerce/order/product/{productId}">client.ecommerce.order.<a href="./src/resources/ecommerce/order.ts">checkProductPurchase</a>(productID) -> void</code>
- <code title="get /api/ecommerce/order/{id}/track">client.ecommerce.order.<a href="./src/resources/ecommerce/order.ts">track</a>(id) -> void</code>

## Product

Methods:

- <code title="get /api/ecommerce/product/{slug}">client.ecommerce.product.<a href="./src/resources/ecommerce/product.ts">retrieve</a>(slug) -> void</code>
- <code title="get /api/ecommerce/product">client.ecommerce.product.<a href="./src/resources/ecommerce/product.ts">list</a>() -> void</code>

## Wishlist

Methods:

- <code title="get /api/ecommerce/wishlist">client.ecommerce.wishlist.<a href="./src/resources/ecommerce/wishlist.ts">retrieve</a>() -> void</code>
- <code title="post /api/ecommerce/wishlist">client.ecommerce.wishlist.<a href="./src/resources/ecommerce/wishlist.ts">add</a>() -> void</code>

# Ecosystem

Methods:

- <code title="get /api/ecosystem/chart">client.ecosystem.<a href="./src/resources/ecosystem/ecosystem.ts">getChart</a>({ ...params }) -> void</code>

## Deposit

Methods:

- <code title="get /api/ecosystem/deposit/unlock">client.ecosystem.deposit.<a href="./src/resources/ecosystem/deposit.ts">unlock</a>({ ...params }) -> void</code>

## Market

Methods:

- <code title="get /api/ecosystem/market/{id}">client.ecosystem.market.<a href="./src/resources/ecosystem/market.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/ecosystem/market">client.ecosystem.market.<a href="./src/resources/ecosystem/market.ts">list</a>() -> void</code>

## Order

Methods:

- <code title="post /api/ecosystem/order">client.ecosystem.order.<a href="./src/resources/ecosystem/order.ts">create</a>() -> void</code>
- <code title="get /api/ecosystem/order">client.ecosystem.order.<a href="./src/resources/ecosystem/order.ts">list</a>({ ...params }) -> void</code>

## Token

Methods:

- <code title="get /api/ecosystem/token/{currency}">client.ecosystem.token.<a href="./src/resources/ecosystem/token.ts">retrieve</a>(currency) -> void</code>
- <code title="get /api/ecosystem/token">client.ecosystem.token.<a href="./src/resources/ecosystem/token.ts">list</a>() -> void</code>

## Wallet

Methods:

- <code title="get /api/ecosystem/wallet/{currency}">client.ecosystem.wallet.<a href="./src/resources/ecosystem/wallet.ts">retrieve</a>(currency, { ...params }) -> void</code>
- <code title="get /api/ecosystem/wallet">client.ecosystem.wallet.<a href="./src/resources/ecosystem/wallet.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/ecosystem/wallet/{id}/transfer">client.ecosystem.wallet.<a href="./src/resources/ecosystem/wallet.ts">transfer</a>(id) -> void</code>

## Withdraw

Methods:

- <code title="post /api/ecosystem/withdraw">client.ecosystem.withdraw.<a href="./src/resources/ecosystem/withdraw.ts">create</a>() -> void</code>
- <code title="get /api/ecosystem/withdraw/max">client.ecosystem.withdraw.<a href="./src/resources/ecosystem/withdraw.ts">maxAmount</a>({ ...params }) -> void</code>

# Faq

Methods:

- <code title="get /api/faq/{id}">client.faq.<a href="./src/resources/faq.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/faq/category">client.faq.<a href="./src/resources/faq.ts">listCategories</a>() -> void</code>
- <code title="get /api/faq">client.faq.<a href="./src/resources/faq.ts">listPublic</a>({ ...params }) -> void</code>
- <code title="get /api/faq/stats">client.faq.<a href="./src/resources/faq.ts">retrieveStats</a>() -> void</code>
- <code title="post /api/faq/search">client.faq.<a href="./src/resources/faq.ts">search</a>() -> void</code>
- <code title="post /api/faq/{id}/feedback">client.faq.<a href="./src/resources/faq.ts">submitFeedback</a>(id) -> void</code>
- <code title="post /api/faq/question">client.faq.<a href="./src/resources/faq.ts">submitQuestion</a>() -> void</code>

# Forex

Methods:

- <code title="get /api/forex/duration">client.forex.<a href="./src/resources/forex/forex.ts">getDurations</a>() -> void</code>
- <code title="get /api/forex/landing">client.forex.<a href="./src/resources/forex/forex.ts">getLandingData</a>() -> void</code>
- <code title="get /api/forex/overview">client.forex.<a href="./src/resources/forex/forex.ts">getOverview</a>({ ...params }) -> void</code>
- <code title="get /api/forex/stats">client.forex.<a href="./src/resources/forex/forex.ts">getStats</a>() -> void</code>
- <code title="get /api/forex/signal">client.forex.<a href="./src/resources/forex/forex.ts">getUserSignals</a>({ ...params }) -> void</code>
- <code title="get /api/forex/transaction">client.forex.<a href="./src/resources/forex/forex.ts">listTransactions</a>({ ...params }) -> void</code>

## Account

Methods:

- <code title="get /api/forex/account/{id}">client.forex.account.<a href="./src/resources/forex/account.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/forex/account">client.forex.account.<a href="./src/resources/forex/account.ts">list</a>() -> void</code>
- <code title="post /api/forex/account/{id}/deposit">client.forex.account.<a href="./src/resources/forex/account.ts">deposit</a>(id) -> void</code>
- <code title="get /api/forex/account/{id}/signal">client.forex.account.<a href="./src/resources/forex/account.ts">getSignals</a>(id) -> void</code>
- <code title="post /api/forex/account/{id}/withdraw">client.forex.account.<a href="./src/resources/forex/account.ts">withdraw</a>(id) -> void</code>

## Investment

Methods:

- <code title="post /api/forex/investment">client.forex.investment.<a href="./src/resources/forex/investment.ts">create</a>() -> void</code>
- <code title="get /api/forex/investment/{id}">client.forex.investment.<a href="./src/resources/forex/investment.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/forex/investment">client.forex.investment.<a href="./src/resources/forex/investment.ts">list</a>({ ...params }) -> void</code>
- <code title="put /api/forex/investment/{id}/status">client.forex.investment.<a href="./src/resources/forex/investment.ts">getStatus</a>(id) -> void</code>
- <code title="get /api/forex/investment/active">client.forex.investment.<a href="./src/resources/forex/investment.ts">listActive</a>() -> void</code>

## Plan

Methods:

- <code title="get /api/forex/plan/{id}">client.forex.plan.<a href="./src/resources/forex/plan.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/forex/plan">client.forex.plan.<a href="./src/resources/forex/plan.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/forex/plan/{id}/duration">client.forex.plan.<a href="./src/resources/forex/plan.ts">getDurations</a>(id) -> void</code>

# Futures

Methods:

- <code title="get /api/futures/position">client.futures.<a href="./src/resources/futures/futures.ts">listPositions</a>({ ...params }) -> void</code>
- <code title="get /api/futures/ticker">client.futures.<a href="./src/resources/futures/futures.ts">listTickers</a>() -> void</code>
- <code title="get /api/futures/chart">client.futures.<a href="./src/resources/futures/futures.ts">retrieveChart</a>({ ...params }) -> void</code>

## Market

Methods:

- <code title="get /api/futures/market/{id}">client.futures.market.<a href="./src/resources/futures/market.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/futures/market">client.futures.market.<a href="./src/resources/futures/market.ts">list</a>() -> void</code>

## Order

Methods:

- <code title="post /api/futures/order">client.futures.order.<a href="./src/resources/futures/order.ts">create</a>() -> void</code>
- <code title="get /api/futures/order">client.futures.order.<a href="./src/resources/futures/order.ts">list</a>({ ...params }) -> void</code>

# Gateway

Methods:

- <code title="get /api/gateway/balance">client.gateway.<a href="./src/resources/gateway/gateway.ts">getBalance</a>() -> void</code>
- <code title="get /api/gateway/landing">client.gateway.<a href="./src/resources/gateway/gateway.ts">getLandingData</a>() -> void</code>
- <code title="get /api/gateway/settings">client.gateway.<a href="./src/resources/gateway/gateway.ts">getSettings</a>() -> void</code>
- <code title="get /api/gateway/stats">client.gateway.<a href="./src/resources/gateway/gateway.ts">getStats</a>() -> void</code>

## APIKey

Methods:

- <code title="post /api/gateway/api-key">client.gateway.apiKey.<a href="./src/resources/gateway/api-key.ts">create</a>() -> void</code>
- <code title="put /api/gateway/api-key/{id}">client.gateway.apiKey.<a href="./src/resources/gateway/api-key.ts">update</a>(id) -> void</code>
- <code title="get /api/gateway/api-key">client.gateway.apiKey.<a href="./src/resources/gateway/api-key.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/gateway/api-key/{id}/rotate">client.gateway.apiKey.<a href="./src/resources/gateway/api-key.ts">rotate</a>(id) -> void</code>

## Checkout

Methods:

- <code title="get /api/gateway/checkout/{paymentIntentId}">client.gateway.checkout.<a href="./src/resources/gateway/checkout.ts">retrieve</a>(paymentIntentID) -> void</code>
- <code title="post /api/gateway/checkout/{paymentIntentId}/cancel">client.gateway.checkout.<a href="./src/resources/gateway/checkout.ts">cancel</a>(paymentIntentID) -> void</code>
- <code title="post /api/gateway/checkout/{paymentIntentId}/confirm">client.gateway.checkout.<a href="./src/resources/gateway/checkout.ts">confirm</a>(paymentIntentID) -> void</code>
- <code title="get /api/gateway/checkout/{paymentIntentId}/wallets">client.gateway.checkout.<a href="./src/resources/gateway/checkout.ts">getWallets</a>(paymentIntentID) -> void</code>

## Merchant

Methods:

- <code title="get /api/gateway/merchant">client.gateway.merchant.<a href="./src/resources/gateway/merchant.ts">getDashboard</a>({ ...params }) -> void</code>
- <code title="post /api/gateway/merchant">client.gateway.merchant.<a href="./src/resources/gateway/merchant.ts">register</a>() -> void</code>
- <code title="put /api/gateway/merchant">client.gateway.merchant.<a href="./src/resources/gateway/merchant.ts">updateProfile</a>() -> void</code>

## Payment

Methods:

- <code title="get /api/gateway/payment/{id}">client.gateway.payment.<a href="./src/resources/gateway/payment.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/gateway/payment">client.gateway.payment.<a href="./src/resources/gateway/payment.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/gateway/payment/{id}/refund">client.gateway.payment.<a href="./src/resources/gateway/payment.ts">createRefund</a>(id) -> void</code>

## Payout

Methods:

- <code title="get /api/gateway/payout/{id}">client.gateway.payout.<a href="./src/resources/gateway/payout.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/gateway/payout">client.gateway.payout.<a href="./src/resources/gateway/payout.ts">list</a>({ ...params }) -> void</code>

## V1

Methods:

- <code title="get /api/gateway/v1/validate">client.gateway.v1.<a href="./src/resources/gateway/v1/v1.ts">validate</a>() -> void</code>

### Payment

Methods:

- <code title="get /api/gateway/v1/payment/{id}">client.gateway.v1.payment.<a href="./src/resources/gateway/v1/payment.ts">retrieve</a>(id) -> void</code>
- <code title="post /api/gateway/v1/payment/{id}/cancel">client.gateway.v1.payment.<a href="./src/resources/gateway/v1/payment.ts">cancel</a>(id) -> void</code>
- <code title="post /api/gateway/v1/payment/create">client.gateway.v1.payment.<a href="./src/resources/gateway/v1/payment.ts">createSession</a>() -> void</code>

### Refund

Methods:

- <code title="post /api/gateway/v1/refund">client.gateway.v1.refund.<a href="./src/resources/gateway/v1/refund.ts">create</a>() -> void</code>
- <code title="get /api/gateway/v1/refund/{id}">client.gateway.v1.refund.<a href="./src/resources/gateway/v1/refund.ts">retrieve</a>(id) -> void</code>

# Ico

Methods:

- <code title="get /api/ico/blockchain">client.ico.<a href="./src/resources/ico/ico.ts">retrieveBlockchain</a>() -> void</code>
- <code title="get /api/ico/landing">client.ico.<a href="./src/resources/ico/ico.ts">retrieveLanding</a>() -> void</code>
- <code title="get /api/ico/plan">client.ico.<a href="./src/resources/ico/ico.ts">retrievePlan</a>() -> void</code>
- <code title="get /api/ico/stats">client.ico.<a href="./src/resources/ico/ico.ts">retrieveStats</a>() -> void</code>

## Creator

Methods:

- <code title="get /api/ico/creator/investor">client.ico.creator.<a href="./src/resources/ico/creator/creator.ts">retrieveInvestor</a>({ ...params }) -> void</code>
- <code title="get /api/ico/creator/performance">client.ico.creator.<a href="./src/resources/ico/creator/creator.ts">retrievePerformance</a>({ ...params }) -> void</code>
- <code title="get /api/ico/creator/stat">client.ico.creator.<a href="./src/resources/ico/creator/creator.ts">retrieveStat</a>() -> void</code>

### Launch

Methods:

- <code title="post /api/ico/creator/launch">client.ico.creator.launch.<a href="./src/resources/ico/creator/launch.ts">create</a>() -> void</code>
- <code title="get /api/ico/creator/launch/plan">client.ico.creator.launch.<a href="./src/resources/ico/creator/launch.ts">retrievePlan</a>() -> void</code>

### Token

Methods:

- <code title="get /api/ico/creator/token/{id}">client.ico.creator.token.<a href="./src/resources/ico/creator/token/token.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/ico/creator/token">client.ico.creator.token.<a href="./src/resources/ico/creator/token/token.ts">list</a>() -> void</code>
- <code title="put /api/ico/creator/token/{id}/plan">client.ico.creator.token.<a href="./src/resources/ico/creator/token/token.ts">updatePlan</a>(id) -> void</code>

#### Release

Methods:

- <code title="put /api/ico/creator/token/{id}/release/{transactionId}">client.ico.creator.token.release.<a href="./src/resources/ico/creator/token/release.ts">update</a>(transactionID, { ...params }) -> void</code>
- <code title="get /api/ico/creator/token/{id}/release">client.ico.creator.token.release.<a href="./src/resources/ico/creator/token/release.ts">list</a>(pathID, { ...params }) -> void</code>

#### Roadmap

Methods:

- <code title="post /api/ico/creator/token/{id}/roadmap">client.ico.creator.token.roadmap.<a href="./src/resources/ico/creator/token/roadmap.ts">create</a>(id) -> void</code>
- <code title="put /api/ico/creator/token/{id}/roadmap/{roadmapId}">client.ico.creator.token.roadmap.<a href="./src/resources/ico/creator/token/roadmap.ts">update</a>(roadmapID, { ...params }) -> void</code>
- <code title="get /api/ico/creator/token/{id}/roadmap">client.ico.creator.token.roadmap.<a href="./src/resources/ico/creator/token/roadmap.ts">list</a>(id) -> void</code>

#### Team

Methods:

- <code title="post /api/ico/creator/token/{id}/team">client.ico.creator.token.team.<a href="./src/resources/ico/creator/token/team.ts">create</a>(id) -> void</code>
- <code title="put /api/ico/creator/token/{id}/team/{teamId}">client.ico.creator.token.team.<a href="./src/resources/ico/creator/token/team.ts">update</a>(teamID, { ...params }) -> void</code>
- <code title="get /api/ico/creator/token/{id}/team">client.ico.creator.token.team.<a href="./src/resources/ico/creator/token/team.ts">list</a>(id) -> void</code>

### Update

Methods:

- <code title="post /api/ico/creator/update">client.ico.creator.update.<a href="./src/resources/ico/creator/update.ts">create</a>() -> void</code>
- <code title="put /api/ico/creator/update/{id}">client.ico.creator.update.<a href="./src/resources/ico/creator/update.ts">update</a>(id) -> void</code>
- <code title="get /api/ico/creator/update">client.ico.creator.update.<a href="./src/resources/ico/creator/update.ts">list</a>() -> void</code>

## Offer

Methods:

- <code title="get /api/ico/offer/{id}">client.ico.offer.<a href="./src/resources/ico/offer.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/ico/offer">client.ico.offer.<a href="./src/resources/ico/offer.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/ico/offer/featured">client.ico.offer.<a href="./src/resources/ico/offer.ts">retrieveFeatured</a>() -> void</code>
- <code title="get /api/ico/offer/stats">client.ico.offer.<a href="./src/resources/ico/offer.ts">retrieveStats</a>() -> void</code>

## Portfolio

Methods:

- <code title="get /api/ico/portfolio">client.ico.portfolio.<a href="./src/resources/ico/portfolio.ts">list</a>() -> void</code>
- <code title="get /api/ico/portfolio/performance">client.ico.portfolio.<a href="./src/resources/ico/portfolio.ts">retrievePerformance</a>({ ...params }) -> void</code>

## Refund

Methods:

- <code title="get /api/ico/refund/eligibility/{offeringId}">client.ico.refund.<a href="./src/resources/ico/refund.ts">retrieve</a>(offeringID) -> void</code>
- <code title="post /api/ico/refund/process">client.ico.refund.<a href="./src/resources/ico/refund.ts">process</a>() -> void</code>

## Token

Methods:

- <code title="get /api/ico/token/type">client.ico.token.<a href="./src/resources/ico/token.ts">retrieveType</a>() -> void</code>

## Transaction

Methods:

- <code title="post /api/ico/transaction">client.ico.transaction.<a href="./src/resources/ico/transaction.ts">create</a>() -> void</code>
- <code title="get /api/ico/transaction/{id}">client.ico.transaction.<a href="./src/resources/ico/transaction.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/ico/transaction">client.ico.transaction.<a href="./src/resources/ico/transaction.ts">list</a>({ ...params }) -> void</code>

# P2p

Methods:

- <code title="get /api/p2p/landing">client.p2p.<a href="./src/resources/p2p/p2p.ts">getLandingData</a>() -> void</code>
- <code title="get /api/p2p/location">client.p2p.<a href="./src/resources/p2p/p2p.ts">listCountries</a>() -> void</code>
- <code title="post /api/p2p/guided-matching">client.p2p.<a href="./src/resources/p2p/p2p.ts">submitGuidedMatching</a>() -> void</code>

## Dashboard

Methods:

- <code title="get /api/p2p/dashboard/activity">client.p2p.dashboard.<a href="./src/resources/p2p/dashboard.ts">getActivity</a>() -> void</code>
- <code title="get /api/p2p/dashboard">client.p2p.dashboard.<a href="./src/resources/p2p/dashboard.ts">getData</a>() -> void</code>
- <code title="get /api/p2p/dashboard/portfolio">client.p2p.dashboard.<a href="./src/resources/p2p/dashboard.ts">getPortfolio</a>() -> void</code>
- <code title="get /api/p2p/dashboard/stats">client.p2p.dashboard.<a href="./src/resources/p2p/dashboard.ts">getStats</a>() -> void</code>
- <code title="get /api/p2p/dashboard/transaction">client.p2p.dashboard.<a href="./src/resources/p2p/dashboard.ts">getTransactions</a>() -> void</code>

## Market

Methods:

- <code title="get /api/p2p/market/highlight">client.p2p.market.<a href="./src/resources/p2p/market.ts">getHighlights</a>() -> void</code>
- <code title="get /api/p2p/market/stats">client.p2p.market.<a href="./src/resources/p2p/market.ts">getStats</a>() -> void</code>
- <code title="get /api/p2p/market/top">client.p2p.market.<a href="./src/resources/p2p/market.ts">getTopCryptos</a>() -> void</code>

## Offer

Methods:

- <code title="post /api/p2p/offer">client.p2p.offer.<a href="./src/resources/p2p/offer.ts">create</a>() -> void</code>
- <code title="put /api/p2p/offer/{id}">client.p2p.offer.<a href="./src/resources/p2p/offer.ts">update</a>(id) -> void</code>
- <code title="get /api/p2p/offer">client.p2p.offer.<a href="./src/resources/p2p/offer.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/p2p/offer/{id}">client.p2p.offer.<a href="./src/resources/p2p/offer.ts">delete</a>(id) -> void</code>
- <code title="get /api/p2p/offer/{id}">client.p2p.offer.<a href="./src/resources/p2p/offer.ts">getByID</a>(id) -> void</code>
- <code title="get /api/p2p/offer/popularity">client.p2p.offer.<a href="./src/resources/p2p/offer.ts">getPopular</a>({ ...params }) -> void</code>
- <code title="get /api/p2p/offer/user">client.p2p.offer.<a href="./src/resources/p2p/offer.ts">getUserOffers</a>() -> void</code>
- <code title="post /api/p2p/offer/{id}/initiate-trade">client.p2p.offer.<a href="./src/resources/p2p/offer.ts">initiateTrade</a>(id) -> void</code>

## PaymentMethod

Methods:

- <code title="post /api/p2p/payment-method">client.p2p.paymentMethod.<a href="./src/resources/p2p/payment-method.ts">create</a>() -> void</code>
- <code title="put /api/p2p/payment-method/{id}">client.p2p.paymentMethod.<a href="./src/resources/p2p/payment-method.ts">update</a>(id) -> void</code>
- <code title="get /api/p2p/payment-method">client.p2p.paymentMethod.<a href="./src/resources/p2p/payment-method.ts">list</a>() -> void</code>

## Trade

Methods:

- <code title="post /api/p2p/trade/{id}/cancel">client.p2p.trade.<a href="./src/resources/p2p/trade/trade.ts">cancel</a>(id) -> void</code>
- <code title="post /api/p2p/trade/{id}/confirm">client.p2p.trade.<a href="./src/resources/p2p/trade/trade.ts">confirmPayment</a>(id) -> void</code>
- <code title="post /api/p2p/trade/{id}/dispute">client.p2p.trade.<a href="./src/resources/p2p/trade/trade.ts">dispute</a>(id) -> void</code>
- <code title="get /api/p2p/trade/{id}">client.p2p.trade.<a href="./src/resources/p2p/trade/trade.ts">getByID</a>(id) -> void</code>
- <code title="get /api/p2p/trade">client.p2p.trade.<a href="./src/resources/p2p/trade/trade.ts">getDashboardData</a>() -> void</code>
- <code title="get /api/p2p/trade/history">client.p2p.trade.<a href="./src/resources/p2p/trade/trade.ts">getHistory</a>({ ...params }) -> void</code>
- <code title="post /api/p2p/trade/{id}/release">client.p2p.trade.<a href="./src/resources/p2p/trade/trade.ts">releaseFunds</a>(id) -> void</code>
- <code title="post /api/p2p/trade/{id}/review">client.p2p.trade.<a href="./src/resources/p2p/trade/trade.ts">submitReview</a>(id) -> void</code>

### Message

Methods:

- <code title="get /api/p2p/trade/{id}/message">client.p2p.trade.message.<a href="./src/resources/p2p/trade/message.ts">get</a>(id) -> void</code>
- <code title="post /api/p2p/trade/{id}/message">client.p2p.trade.message.<a href="./src/resources/p2p/trade/message.ts">send</a>(id) -> void</code>
- <code title="post /api/p2p/trade/{id}/message/upload">client.p2p.trade.message.<a href="./src/resources/p2p/trade/message.ts">uploadImage</a>(id) -> void</code>

# Payment

## Intent

Methods:

- <code title="post /api/payment/intent">client.payment.intent.<a href="./src/resources/payment/intent.ts">create</a>() -> void</code>
- <code title="get /api/payment/intent/{id}">client.payment.intent.<a href="./src/resources/payment/intent.ts">retrieve</a>(id) -> void</code>
- <code title="post /api/payment/intent/status">client.payment.intent.<a href="./src/resources/payment/intent.ts">checkStatus</a>() -> void</code>
- <code title="post /api/payment/intent/confirm">client.payment.intent.<a href="./src/resources/payment/intent.ts">confirm</a>() -> void</code>

# Staking

Methods:

- <code title="post /api/staking/calculate-rewards">client.staking.<a href="./src/resources/staking/staking.ts">calculateRewards</a>() -> void</code>
- <code title="get /api/staking/landing">client.staking.<a href="./src/resources/staking/staking.ts">getLanding</a>() -> void</code>
- <code title="get /api/staking/stats">client.staking.<a href="./src/resources/staking/staking.ts">getStats</a>() -> void</code>

## Pool

Methods:

- <code title="get /api/staking/pool">client.staking.pool.<a href="./src/resources/staking/pool.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/staking/pool/{id}/analytics">client.staking.pool.<a href="./src/resources/staking/pool.ts">getAnalytics</a>(id, { ...params }) -> void</code>
- <code title="get /api/staking/pool/{id}">client.staking.pool.<a href="./src/resources/staking/pool.ts">getDetails</a>(id) -> void</code>

## Position

Methods:

- <code title="post /api/staking/position">client.staking.position.<a href="./src/resources/staking/position.ts">create</a>() -> void</code>
- <code title="get /api/staking/position">client.staking.position.<a href="./src/resources/staking/position.ts">list</a>({ ...params }) -> void</code>
- <code title="post /api/staking/position/{id}/claim">client.staking.position.<a href="./src/resources/staking/position.ts">claimEarnings</a>(id) -> void</code>
- <code title="get /api/staking/position/{id}">client.staking.position.<a href="./src/resources/staking/position.ts">getDetails</a>(id) -> void</code>
- <code title="get /api/staking/position/{id}/earnings">client.staking.position.<a href="./src/resources/staking/position.ts">getEarnings</a>(id, { ...params }) -> void</code>
- <code title="post /api/staking/position/{id}/withdraw">client.staking.position.<a href="./src/resources/staking/position.ts">requestWithdrawal</a>(id) -> void</code>

## User

Methods:

- <code title="get /api/staking/user/earnings">client.staking.user.<a href="./src/resources/staking/user.ts">getEarnings</a>({ ...params }) -> void</code>
- <code title="get /api/staking/user/summary">client.staking.user.<a href="./src/resources/staking/user.ts">getSummary</a>() -> void</code>

# Auth

Methods:

- <code title="get /api/auth/role">client.auth.<a href="./src/resources/auth/auth.ts">listRoles</a>() -> void</code>
- <code title="post /api/auth/logout">client.auth.<a href="./src/resources/auth/auth.ts">logout</a>() -> void</code>
- <code title="post /api/auth/reset">client.auth.<a href="./src/resources/auth/auth.ts">resetPassword</a>() -> void</code>
- <code title="get /api/auth/session">client.auth.<a href="./src/resources/auth/auth.ts">retrieveSession</a>() -> void</code>

## Delete

Methods:

- <code title="post /api/auth/delete/confirm">client.auth.delete.<a href="./src/resources/auth/delete.ts">confirm</a>() -> void</code>
- <code title="post /api/auth/delete">client.auth.delete.<a href="./src/resources/auth/delete.ts">generateConfirmationCode</a>() -> void</code>

## Login

Methods:

- <code title="get /api/auth/login/chat">client.auth.login.<a href="./src/resources/auth/login.ts">chat</a>({ ...params }) -> void</code>
- <code title="post /api/auth/login">client.auth.login.<a href="./src/resources/auth/login.ts">default</a>() -> void</code>
- <code title="post /api/auth/login/flutter">client.auth.login.<a href="./src/resources/auth/login.ts">flutter</a>() -> void</code>
- <code title="get /api/auth/login/nonce">client.auth.login.<a href="./src/resources/auth/login.ts">generateNonce</a>() -> void</code>
- <code title="post /api/auth/login/google">client.auth.login.<a href="./src/resources/auth/login.ts">google</a>() -> void</code>
- <code title="post /api/auth/login/wallet">client.auth.login.<a href="./src/resources/auth/login.ts">siwe</a>() -> void</code>

## Otp

Methods:

- <code title="post /api/auth/otp/generate">client.auth.otp.<a href="./src/resources/auth/otp.ts">generate</a>() -> void</code>
- <code title="post /api/auth/otp/resend">client.auth.otp.<a href="./src/resources/auth/otp.ts">resend</a>() -> void</code>
- <code title="post /api/auth/otp/save">client.auth.otp.<a href="./src/resources/auth/otp.ts">save</a>() -> void</code>
- <code title="post /api/auth/otp/toggle">client.auth.otp.<a href="./src/resources/auth/otp.ts">toggleStatus</a>() -> void</code>
- <code title="post /api/auth/otp/verify">client.auth.otp.<a href="./src/resources/auth/otp.ts">verify</a>() -> void</code>
- <code title="post /api/auth/otp/login">client.auth.otp.<a href="./src/resources/auth/otp.ts">verifyLogin</a>() -> void</code>

## Register

Methods:

- <code title="post /api/auth/register">client.auth.register.<a href="./src/resources/auth/register.ts">default</a>() -> void</code>
- <code title="post /api/auth/register/google">client.auth.register.<a href="./src/resources/auth/register.ts">google</a>() -> void</code>

## Verify

Methods:

- <code title="post /api/auth/verify/email">client.auth.verify.<a href="./src/resources/auth/verify.ts">email</a>() -> void</code>
- <code title="post /api/auth/verify/resend">client.auth.verify.<a href="./src/resources/auth/verify.ts">resendEmail</a>() -> void</code>
- <code title="post /api/auth/verify/reset">client.auth.verify.<a href="./src/resources/auth/verify.ts">resetPassword</a>() -> void</code>

# Blog

## Author

Methods:

- <code title="post /api/blog/author">client.blog.author.<a href="./src/resources/blog/author/author.ts">create</a>() -> void</code>
- <code title="get /api/blog/author">client.blog.author.<a href="./src/resources/blog/author/author.ts">retrieve</a>() -> void</code>
- <code title="get /api/blog/author/all">client.blog.author.<a href="./src/resources/blog/author/author.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/blog/author/top">client.blog.author.<a href="./src/resources/blog/author/author.ts">getTop</a>() -> void</code>

### Manage

Methods:

- <code title="post /api/blog/author/manage">client.blog.author.manage.<a href="./src/resources/blog/author/manage/manage.ts">create</a>() -> void</code>
- <code title="get /api/blog/author/manage/{id}">client.blog.author.manage.<a href="./src/resources/blog/author/manage/manage.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/blog/author/manage/{id}">client.blog.author.manage.<a href="./src/resources/blog/author/manage/manage.ts">update</a>(id) -> void</code>
- <code title="get /api/blog/author/manage">client.blog.author.manage.<a href="./src/resources/blog/author/manage/manage.ts">list</a>({ ...params }) -> void</code>

#### Status

Methods:

- <code title="put /api/blog/author/manage/{id}/status">client.blog.author.manage.status.<a href="./src/resources/blog/author/manage/status.ts">update</a>(id) -> void</code>
- <code title="put /api/blog/author/manage/status">client.blog.author.manage.status.<a href="./src/resources/blog/author/manage/status.ts">bulkUpdate</a>() -> void</code>

## Category

Methods:

- <code title="get /api/blog/category/{slug}">client.blog.category.<a href="./src/resources/blog/category.ts">retrieve</a>(slug, { ...params }) -> void</code>
- <code title="get /api/blog/category">client.blog.category.<a href="./src/resources/blog/category.ts">list</a>() -> void</code>

## Comment

Methods:

- <code title="post /api/blog/comment/{postId}">client.blog.comment.<a href="./src/resources/blog/comment.ts">create</a>(postID) -> void</code>
- <code title="put /api/blog/comment/{id}">client.blog.comment.<a href="./src/resources/blog/comment.ts">update</a>(id) -> void</code>
- <code title="get /api/blog/comment">client.blog.comment.<a href="./src/resources/blog/comment.ts">list</a>() -> void</code>

## Post

Methods:

- <code title="get /api/blog/post/{slug}">client.blog.post.<a href="./src/resources/blog/post.ts">retrieve</a>(slug) -> void</code>
- <code title="get /api/blog/post">client.blog.post.<a href="./src/resources/blog/post.ts">list</a>({ ...params }) -> void</code>

## Tag

Methods:

- <code title="get /api/blog/tag/{slug}">client.blog.tag.<a href="./src/resources/blog/tag.ts">retrieve</a>(slug, { ...params }) -> void</code>
- <code title="get /api/blog/tag">client.blog.tag.<a href="./src/resources/blog/tag.ts">list</a>() -> void</code>

# Content

Methods:

- <code title="get /api/content/slider">client.content.<a href="./src/resources/content/content.ts">listSliders</a>() -> void</code>
- <code title="get /api/content/default-page/{pageId}">client.content.<a href="./src/resources/content/content.ts">retrieveDefaultPage</a>(pageID, { ...params }) -> void</code>
- <code title="get /api/content/landing-stats">client.content.<a href="./src/resources/content/content.ts">retrieveLandingStats</a>() -> void</code>

## Page

Methods:

- <code title="get /api/content/page/{id}">client.content.page.<a href="./src/resources/content/page.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/content/page">client.content.page.<a href="./src/resources/content/page.ts">list</a>() -> void</code>

# Exchange

Methods:

- <code title="get /api/exchange/chart">client.exchange.<a href="./src/resources/exchange/exchange.ts">getHistoricalChart</a>({ ...params }) -> void</code>
- <code title="get /api/exchange/orderbook/{currency}/{pair}">client.exchange.<a href="./src/resources/exchange/exchange.ts">getOrderbook</a>(pair, { ...params }) -> void</code>

## Binary

Methods:

- <code title="get /api/exchange/binary/duration">client.exchange.binary.<a href="./src/resources/exchange/binary/binary.ts">listDurations</a>() -> void</code>
- <code title="get /api/exchange/binary/market">client.exchange.binary.<a href="./src/resources/exchange/binary/binary.ts">listMarkets</a>() -> void</code>

### Order

Methods:

- <code title="post /api/exchange/binary/order">client.exchange.binary.order.<a href="./src/resources/exchange/binary/order.ts">create</a>() -> void</code>
- <code title="get /api/exchange/binary/order/{id}">client.exchange.binary.order.<a href="./src/resources/exchange/binary/order.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/exchange/binary/order">client.exchange.binary.order.<a href="./src/resources/exchange/binary/order.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/exchange/binary/order/last">client.exchange.binary.order.<a href="./src/resources/exchange/binary/order.ts">listLast30Days</a>() -> void</code>

## Currency

Methods:

- <code title="get /api/exchange/currency/{id}">client.exchange.currency.<a href="./src/resources/exchange/currency.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/exchange/currency">client.exchange.currency.<a href="./src/resources/exchange/currency.ts">list</a>() -> void</code>

## Market

Methods:

- <code title="get /api/exchange/market/{id}">client.exchange.market.<a href="./src/resources/exchange/market.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/exchange/market">client.exchange.market.<a href="./src/resources/exchange/market.ts">list</a>({ ...params }) -> void</code>

## Order

Methods:

- <code title="post /api/exchange/order">client.exchange.order.<a href="./src/resources/exchange/order.ts">create</a>() -> void</code>
- <code title="get /api/exchange/order/{id}">client.exchange.order.<a href="./src/resources/exchange/order.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/exchange/order">client.exchange.order.<a href="./src/resources/exchange/order.ts">list</a>({ ...params }) -> void</code>

## Ticker

Methods:

- <code title="get /api/exchange/ticker/{currency}/{pair}">client.exchange.ticker.<a href="./src/resources/exchange/ticker.ts">retrieve</a>(pair, { ...params }) -> void</code>
- <code title="get /api/exchange/ticker">client.exchange.ticker.<a href="./src/resources/exchange/ticker.ts">list</a>() -> void</code>

## Watchlist

Methods:

- <code title="get /api/exchange/watchlist">client.exchange.watchlist.<a href="./src/resources/exchange/watchlist.ts">list</a>() -> void</code>
- <code title="post /api/exchange/watchlist">client.exchange.watchlist.<a href="./src/resources/exchange/watchlist.ts">add</a>() -> void</code>

# Finance

Methods:

- <code title="get /api/finance/exchange-rate">client.finance.<a href="./src/resources/finance/finance.ts">getExchangeRate</a>({ ...params }) -> void</code>

## Currency

Methods:

- <code title="get /api/finance/currency/{type}/{code}">client.finance.currency.<a href="./src/resources/finance/currency.ts">retrieve</a>(code, { ...params }) -> void</code>
- <code title="get /api/finance/currency">client.finance.currency.<a href="./src/resources/finance/currency.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/finance/currency/rate">client.finance.currency.<a href="./src/resources/finance/currency.ts">getExchangeRate</a>({ ...params }) -> void</code>
- <code title="get /api/finance/currency/price">client.finance.currency.<a href="./src/resources/finance/currency.ts">getPrice</a>({ ...params }) -> void</code>
- <code title="get /api/finance/currency/valid">client.finance.currency.<a href="./src/resources/finance/currency.ts">listValid</a>() -> void</code>

## Deposit

Methods:

- <code title="post /api/finance/deposit/spot">client.finance.deposit.<a href="./src/resources/finance/deposit/deposit.ts">spot</a>() -> void</code>

### Fiat

Methods:

- <code title="post /api/finance/deposit/fiat">client.finance.deposit.fiat.<a href="./src/resources/finance/deposit/fiat/fiat.ts">create</a>() -> void</code>

#### Number2checkout

Methods:

- <code title="post /api/finance/deposit/fiat/2checkout">client.finance.deposit.fiat.number2checkout.<a href="./src/resources/finance/deposit/fiat/number-2checkout.ts">\_2checkout</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/2checkout/status">client.finance.deposit.fiat.number2checkout.<a href="./src/resources/finance/deposit/fiat/number-2checkout.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/2checkout/verify">client.finance.deposit.fiat.number2checkout.<a href="./src/resources/finance/deposit/fiat/number-2checkout.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/2checkout/webhook">client.finance.deposit.fiat.number2checkout.<a href="./src/resources/finance/deposit/fiat/number-2checkout.ts">webhook</a>() -> void</code>

#### Adyen

Methods:

- <code title="post /api/finance/deposit/fiat/adyen">client.finance.deposit.fiat.adyen.<a href="./src/resources/finance/deposit/fiat/adyen.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/adyen/status">client.finance.deposit.fiat.adyen.<a href="./src/resources/finance/deposit/fiat/adyen.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/adyen/verify">client.finance.deposit.fiat.adyen.<a href="./src/resources/finance/deposit/fiat/adyen.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/adyen/webhook">client.finance.deposit.fiat.adyen.<a href="./src/resources/finance/deposit/fiat/adyen.ts">webhook</a>() -> void</code>

#### Authorizenet

Methods:

- <code title="post /api/finance/deposit/fiat/authorizenet">client.finance.deposit.fiat.authorizenet.<a href="./src/resources/finance/deposit/fiat/authorizenet.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/authorizenet/status">client.finance.deposit.fiat.authorizenet.<a href="./src/resources/finance/deposit/fiat/authorizenet.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/authorizenet/verify">client.finance.deposit.fiat.authorizenet.<a href="./src/resources/finance/deposit/fiat/authorizenet.ts">verify</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/authorizenet/webhook">client.finance.deposit.fiat.authorizenet.<a href="./src/resources/finance/deposit/fiat/authorizenet.ts">webhook</a>() -> void</code>

#### Dlocal

Methods:

- <code title="post /api/finance/deposit/fiat/dlocal">client.finance.deposit.fiat.dlocal.<a href="./src/resources/finance/deposit/fiat/dlocal.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/dlocal/status">client.finance.deposit.fiat.dlocal.<a href="./src/resources/finance/deposit/fiat/dlocal.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/dlocal/verify">client.finance.deposit.fiat.dlocal.<a href="./src/resources/finance/deposit/fiat/dlocal.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/dlocal/webhook">client.finance.deposit.fiat.dlocal.<a href="./src/resources/finance/deposit/fiat/dlocal.ts">webhook</a>() -> void</code>

#### Eway

Methods:

- <code title="post /api/finance/deposit/fiat/eway">client.finance.deposit.fiat.eway.<a href="./src/resources/finance/deposit/fiat/eway.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/eway/status">client.finance.deposit.fiat.eway.<a href="./src/resources/finance/deposit/fiat/eway.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/eway/verify">client.finance.deposit.fiat.eway.<a href="./src/resources/finance/deposit/fiat/eway.ts">verify</a>() -> void</code>

#### Ipay88

Methods:

- <code title="post /api/finance/deposit/fiat/ipay88">client.finance.deposit.fiat.ipay88.<a href="./src/resources/finance/deposit/fiat/ipay88.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/ipay88/status">client.finance.deposit.fiat.ipay88.<a href="./src/resources/finance/deposit/fiat/ipay88.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/ipay88/verify">client.finance.deposit.fiat.ipay88.<a href="./src/resources/finance/deposit/fiat/ipay88.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/ipay88/webhook">client.finance.deposit.fiat.ipay88.<a href="./src/resources/finance/deposit/fiat/ipay88.ts">webhook</a>() -> void</code>

#### Klarna

Methods:

- <code title="post /api/finance/deposit/fiat/klarna">client.finance.deposit.fiat.klarna.<a href="./src/resources/finance/deposit/fiat/klarna.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/klarna/status">client.finance.deposit.fiat.klarna.<a href="./src/resources/finance/deposit/fiat/klarna.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/klarna/verify">client.finance.deposit.fiat.klarna.<a href="./src/resources/finance/deposit/fiat/klarna.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/klarna/webhook">client.finance.deposit.fiat.klarna.<a href="./src/resources/finance/deposit/fiat/klarna.ts">webhook</a>() -> void</code>

#### Mollie

Methods:

- <code title="post /api/finance/deposit/fiat/mollie">client.finance.deposit.fiat.mollie.<a href="./src/resources/finance/deposit/fiat/mollie.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/mollie/status">client.finance.deposit.fiat.mollie.<a href="./src/resources/finance/deposit/fiat/mollie.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/mollie/verify">client.finance.deposit.fiat.mollie.<a href="./src/resources/finance/deposit/fiat/mollie.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/mollie/webhook">client.finance.deposit.fiat.mollie.<a href="./src/resources/finance/deposit/fiat/mollie.ts">webhook</a>() -> void</code>

#### Payfast

Methods:

- <code title="post /api/finance/deposit/fiat/payfast">client.finance.deposit.fiat.payfast.<a href="./src/resources/finance/deposit/fiat/payfast.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/payfast/status">client.finance.deposit.fiat.payfast.<a href="./src/resources/finance/deposit/fiat/payfast.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/payfast/verify">client.finance.deposit.fiat.payfast.<a href="./src/resources/finance/deposit/fiat/payfast.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/payfast/webhook">client.finance.deposit.fiat.payfast.<a href="./src/resources/finance/deposit/fiat/payfast.ts">webhook</a>() -> void</code>

#### Paypal

Methods:

- <code title="post /api/finance/deposit/fiat/paypal">client.finance.deposit.fiat.paypal.<a href="./src/resources/finance/deposit/fiat/paypal.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/paypal/details">client.finance.deposit.fiat.paypal.<a href="./src/resources/finance/deposit/fiat/paypal.ts">retrieveDetails</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/paypal/verify">client.finance.deposit.fiat.paypal.<a href="./src/resources/finance/deposit/fiat/paypal.ts">verify</a>({ ...params }) -> void</code>

#### Paysafe

Methods:

- <code title="post /api/finance/deposit/fiat/paysafe">client.finance.deposit.fiat.paysafe.<a href="./src/resources/finance/deposit/fiat/paysafe.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/paysafe/status">client.finance.deposit.fiat.paysafe.<a href="./src/resources/finance/deposit/fiat/paysafe.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/paysafe/verify">client.finance.deposit.fiat.paysafe.<a href="./src/resources/finance/deposit/fiat/paysafe.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/paysafe/webhook">client.finance.deposit.fiat.paysafe.<a href="./src/resources/finance/deposit/fiat/paysafe.ts">webhook</a>() -> void</code>

#### Paystack

Methods:

- <code title="post /api/finance/deposit/fiat/paystack">client.finance.deposit.fiat.paystack.<a href="./src/resources/finance/deposit/fiat/paystack.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/paystack/status">client.finance.deposit.fiat.paystack.<a href="./src/resources/finance/deposit/fiat/paystack.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/paystack/verify">client.finance.deposit.fiat.paystack.<a href="./src/resources/finance/deposit/fiat/paystack.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/paystack/webhook">client.finance.deposit.fiat.paystack.<a href="./src/resources/finance/deposit/fiat/paystack.ts">webhook</a>() -> void</code>

#### Paytm

Methods:

- <code title="post /api/finance/deposit/fiat/paytm">client.finance.deposit.fiat.paytm.<a href="./src/resources/finance/deposit/fiat/paytm.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/paytm/status">client.finance.deposit.fiat.paytm.<a href="./src/resources/finance/deposit/fiat/paytm.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/paytm/verify">client.finance.deposit.fiat.paytm.<a href="./src/resources/finance/deposit/fiat/paytm.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/paytm/webhook">client.finance.deposit.fiat.paytm.<a href="./src/resources/finance/deposit/fiat/paytm.ts">webhook</a>() -> void</code>

#### Payu

Methods:

- <code title="post /api/finance/deposit/fiat/payu">client.finance.deposit.fiat.payu.<a href="./src/resources/finance/deposit/fiat/payu.ts">create</a>() -> void</code>
- <code title="get /api/finance/deposit/fiat/payu/status">client.finance.deposit.fiat.payu.<a href="./src/resources/finance/deposit/fiat/payu.ts">retrieveStatus</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/payu/verify">client.finance.deposit.fiat.payu.<a href="./src/resources/finance/deposit/fiat/payu.ts">verify</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/payu/webhook">client.finance.deposit.fiat.payu.<a href="./src/resources/finance/deposit/fiat/payu.ts">webhook</a>() -> void</code>

#### Stripe

Methods:

- <code title="post /api/finance/deposit/fiat/stripe">client.finance.deposit.fiat.stripe.<a href="./src/resources/finance/deposit/fiat/stripe.ts">create</a>() -> void</code>
- <code title="post /api/finance/deposit/fiat/stripe/verified">client.finance.deposit.fiat.stripe.<a href="./src/resources/finance/deposit/fiat/stripe.ts">verified</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/stripe/verify">client.finance.deposit.fiat.stripe.<a href="./src/resources/finance/deposit/fiat/stripe.ts">verify</a>({ ...params }) -> void</code>
- <code title="post /api/finance/deposit/fiat/stripe/verify-intent">client.finance.deposit.fiat.stripe.<a href="./src/resources/finance/deposit/fiat/stripe.ts">verifyIntent</a>({ ...params }) -> void</code>

## Investment

Methods:

- <code title="post /api/finance/investment">client.finance.investment.<a href="./src/resources/finance/investment/investment.ts">create</a>() -> void</code>
- <code title="get /api/finance/investment/{id}">client.finance.investment.<a href="./src/resources/finance/investment/investment.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /api/finance/investment">client.finance.investment.<a href="./src/resources/finance/investment/investment.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/finance/investment/stats">client.finance.investment.<a href="./src/resources/finance/investment/investment.ts">getStats</a>() -> void</code>
- <code title="get /api/finance/investment/user">client.finance.investment.<a href="./src/resources/finance/investment/investment.ts">getUserInvestments</a>() -> void</code>

### Plan

Methods:

- <code title="get /api/finance/investment/plan/{id}">client.finance.investment.plan.<a href="./src/resources/finance/investment/plan.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/finance/investment/plan">client.finance.investment.plan.<a href="./src/resources/finance/investment/plan.ts">list</a>() -> void</code>

## Transaction

Methods:

- <code title="get /api/finance/transaction/{id}">client.finance.transaction.<a href="./src/resources/finance/transaction.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/finance/transaction">client.finance.transaction.<a href="./src/resources/finance/transaction.ts">list</a>({ ...params }) -> void</code>

## Transfer

Methods:

- <code title="post /api/finance/transfer">client.finance.transfer.<a href="./src/resources/finance/transfer.ts">create</a>() -> void</code>
- <code title="get /api/finance/transfer/validate">client.finance.transfer.<a href="./src/resources/finance/transfer.ts">validateRecipient</a>({ ...params }) -> void</code>

## Wallet

Methods:

- <code title="get /api/finance/wallet/{type}/{currency}">client.finance.wallet.<a href="./src/resources/finance/wallet.ts">retrieve</a>(currency, { ...params }) -> void</code>
- <code title="get /api/finance/wallet">client.finance.wallet.<a href="./src/resources/finance/wallet.ts">list</a>({ ...params }) -> void</code>
- <code title="get /api/finance/wallet/stats">client.finance.wallet.<a href="./src/resources/finance/wallet.ts">getStats</a>() -> void</code>
- <code title="get /api/finance/wallet/transfer-options">client.finance.wallet.<a href="./src/resources/finance/wallet.ts">getTransferOptions</a>() -> void</code>
- <code title="get /api/finance/wallet/options">client.finance.wallet.<a href="./src/resources/finance/wallet.ts">getTypes</a>() -> void</code>
- <code title="get /api/finance/wallet/{type}">client.finance.wallet.<a href="./src/resources/finance/wallet.ts">listByType</a>(type) -> void</code>
- <code title="get /api/finance/wallet/symbol">client.finance.wallet.<a href="./src/resources/finance/wallet.ts">retrieveBySymbol</a>({ ...params }) -> void</code>

## Withdraw

Methods:

- <code title="post /api/finance/withdraw/fiat">client.finance.withdraw.<a href="./src/resources/finance/withdraw.ts">createFiat</a>() -> void</code>
- <code title="post /api/finance/withdraw/spot">client.finance.withdraw.<a href="./src/resources/finance/withdraw.ts">createSpot</a>() -> void</code>

# Settings

Methods:

- <code title="get /api/settings">client.settings.<a href="./src/resources/settings.ts">retrieve</a>() -> void</code>

# Upload

Methods:

- <code title="post /api/upload/heic">client.upload.<a href="./src/resources/upload.ts">convertHeicToJpeg</a>() -> void</code>
- <code title="post /api/upload">client.upload.<a href="./src/resources/upload.ts">uploadFile</a>() -> void</code>
- <code title="post /api/upload/kyc-document">client.upload.<a href="./src/resources/upload.ts">uploadKYCDocument</a>() -> void</code>

# User

Methods:

- <code title="post /api/user/analysis">client.user.<a href="./src/resources/user/user.ts">getAnalysis</a>() -> void</code>
- <code title="get /api/user/media">client.user.<a href="./src/resources/user/user.ts">getMedia</a>({ ...params }) -> void</code>

## Account

Methods:

- <code title="post /api/user/account/delete">client.user.account.<a href="./src/resources/user/account.ts">delete</a>() -> void</code>

## APIKey

Methods:

- <code title="post /api/user/api-key">client.user.apiKey.<a href="./src/resources/user/api-key.ts">create</a>() -> void</code>
- <code title="put /api/user/api-key/{id}">client.user.apiKey.<a href="./src/resources/user/api-key.ts">update</a>(id) -> void</code>
- <code title="get /api/user/api-key">client.user.apiKey.<a href="./src/resources/user/api-key.ts">list</a>() -> void</code>

## KYC

### Application

Methods:

- <code title="get /api/user/kyc/application/{id}">client.user.kyc.application.<a href="./src/resources/user/kyc/application.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/user/kyc/application/{id}">client.user.kyc.application.<a href="./src/resources/user/kyc/application.ts">update</a>(id) -> void</code>
- <code title="get /api/user/kyc/application">client.user.kyc.application.<a href="./src/resources/user/kyc/application.ts">list</a>() -> void</code>
- <code title="post /api/user/kyc/application">client.user.kyc.application.<a href="./src/resources/user/kyc/application.ts">submit</a>() -> void</code>

### Level

Methods:

- <code title="get /api/user/kyc/level/{id}">client.user.kyc.level.<a href="./src/resources/user/kyc/level.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/user/kyc/level">client.user.kyc.level.<a href="./src/resources/user/kyc/level.ts">list</a>() -> void</code>

## Notification

Methods:

- <code title="get /api/user/notification">client.user.notification.<a href="./src/resources/user/notification.ts">getAll</a>() -> void</code>
- <code title="post /api/user/notification/mark-all-read">client.user.notification.<a href="./src/resources/user/notification.ts">markAllAsRead</a>() -> void</code>
- <code title="post /api/user/notification/{id}/read">client.user.notification.<a href="./src/resources/user/notification.ts">markAsRead</a>(id) -> void</code>
- <code title="post /api/user/notification/{id}/unread">client.user.notification.<a href="./src/resources/user/notification.ts">markAsUnread</a>(id) -> void</code>

## Phone

Methods:

- <code title="post /api/user/phone/send">client.user.phone.<a href="./src/resources/user/phone.ts">sendVerificationCode</a>() -> void</code>
- <code title="post /api/user/phone/verify">client.user.phone.<a href="./src/resources/user/phone.ts">verify</a>() -> void</code>

## Profile

Methods:

- <code title="get /api/user/profile">client.user.profile.<a href="./src/resources/user/profile/profile.ts">retrieve</a>() -> void</code>
- <code title="put /api/user/profile">client.user.profile.<a href="./src/resources/user/profile/profile.ts">update</a>() -> void</code>
- <code title="post /api/user/profile/verify-email">client.user.profile.<a href="./src/resources/user/profile/profile.ts">resendEmailVerification</a>() -> void</code>

### Otp

Methods:

- <code title="post /api/user/profile/otp/secret">client.user.profile.otp.<a href="./src/resources/user/profile/otp.ts">generateSecret</a>() -> void</code>
- <code title="post /api/user/profile/otp">client.user.profile.otp.<a href="./src/resources/user/profile/otp.ts">save</a>() -> void</code>
- <code title="post /api/user/profile/otp/status">client.user.profile.otp.<a href="./src/resources/user/profile/otp.ts">toggle</a>() -> void</code>
- <code title="post /api/user/profile/otp/verify">client.user.profile.otp.<a href="./src/resources/user/profile/otp.ts">verify</a>() -> void</code>

### Wallet

Methods:

- <code title="post /api/user/profile/wallet/connect">client.user.profile.wallet.<a href="./src/resources/user/profile/wallet.ts">connect</a>() -> void</code>
- <code title="post /api/user/profile/wallet/disconnect">client.user.profile.wallet.<a href="./src/resources/user/profile/wallet.ts">disconnect</a>() -> void</code>

## Support

### Chat

Methods:

- <code title="get /api/user/support/chat">client.user.support.chat.<a href="./src/resources/user/support/chat.ts">retrieveOrCreate</a>() -> void</code>
- <code title="post /api/user/support/chat">client.user.support.chat.<a href="./src/resources/user/support/chat.ts">sendMessage</a>() -> void</code>

### Ticket

Methods:

- <code title="post /api/user/support/ticket">client.user.support.ticket.<a href="./src/resources/user/support/ticket.ts">create</a>() -> void</code>
- <code title="get /api/user/support/ticket/{id}">client.user.support.ticket.<a href="./src/resources/user/support/ticket.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/user/support/ticket">client.user.support.ticket.<a href="./src/resources/user/support/ticket.ts">list</a>({ ...params }) -> void</code>
- <code title="put /api/user/support/ticket/{id}/close">client.user.support.ticket.<a href="./src/resources/user/support/ticket.ts">close</a>(id) -> void</code>
- <code title="post /api/user/support/ticket/{id}">client.user.support.ticket.<a href="./src/resources/user/support/ticket.ts">reply</a>(id) -> void</code>
- <code title="put /api/user/support/ticket/{id}/review">client.user.support.ticket.<a href="./src/resources/user/support/ticket.ts">setSatisfactionRating</a>(id) -> void</code>
