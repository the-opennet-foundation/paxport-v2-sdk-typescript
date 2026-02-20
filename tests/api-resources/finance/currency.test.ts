// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxportV2SDK from '@paxeer-network/paxport-v2-sdk';

const client = new PaxportV2SDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource currency', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.finance.currency.retrieve('method', { type: 'SPOT', code: 'code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.finance.currency.retrieve('method', { type: 'SPOT', code: 'code' });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.finance.currency.list({ walletType: 'FIAT' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.finance.currency.list({
      walletType: 'FIAT',
      action: 'action',
      targetWalletType: 'FIAT',
    });
  });

  // Mock server tests are disabled
  test.skip('getExchangeRate: only required params', async () => {
    const responsePromise = client.finance.currency.getExchangeRate({
      fromCurrency: 'fromCurrency',
      fromType: 'fromType',
      toCurrency: 'toCurrency',
      toType: 'toType',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getExchangeRate: required and optional params', async () => {
    const response = await client.finance.currency.getExchangeRate({
      fromCurrency: 'fromCurrency',
      fromType: 'fromType',
      toCurrency: 'toCurrency',
      toType: 'toType',
    });
  });

  // Mock server tests are disabled
  test.skip('getPrice: only required params', async () => {
    const responsePromise = client.finance.currency.getPrice({ currency: 'currency', type: 'type' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPrice: required and optional params', async () => {
    const response = await client.finance.currency.getPrice({ currency: 'currency', type: 'type' });
  });

  // Mock server tests are disabled
  test.skip('listValid', async () => {
    const responsePromise = client.finance.currency.listValid();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
