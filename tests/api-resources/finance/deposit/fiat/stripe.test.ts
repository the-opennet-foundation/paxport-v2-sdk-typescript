// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxportV2SDK from '@paxeer-network/paxport-v2-sdk';

const client = new PaxportV2SDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stripe', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.finance.deposit.fiat.stripe.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verified: only required params', async () => {
    const responsePromise = client.finance.deposit.fiat.stripe.verified({ sessionId: 'sessionId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verified: required and optional params', async () => {
    const response = await client.finance.deposit.fiat.stripe.verified({ sessionId: 'sessionId' });
  });

  // Prism tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.finance.deposit.fiat.stripe.verify({ sessionId: 'sessionId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verify: required and optional params', async () => {
    const response = await client.finance.deposit.fiat.stripe.verify({ sessionId: 'sessionId' });
  });

  // Prism tests are disabled
  test.skip('verifyIntent: only required params', async () => {
    const responsePromise = client.finance.deposit.fiat.stripe.verifyIntent({ intentId: 'intentId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verifyIntent: required and optional params', async () => {
    const response = await client.finance.deposit.fiat.stripe.verifyIntent({ intentId: 'intentId' });
  });
});
