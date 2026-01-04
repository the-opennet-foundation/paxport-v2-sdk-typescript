// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxportV2SDK from 'paxport-v2-sdk-typescript';

const client = new PaxportV2SDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authorizenet', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.finance.deposit.fiat.authorizenet.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStatus: only required params', async () => {
    const responsePromise = client.finance.deposit.fiat.authorizenet.retrieveStatus({
      referenceId: 'referenceId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStatus: required and optional params', async () => {
    const response = await client.finance.deposit.fiat.authorizenet.retrieveStatus({
      referenceId: 'referenceId',
    });
  });

  // Prism tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.finance.deposit.fiat.authorizenet.verify({ referenceId: 'referenceId' });
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
    const response = await client.finance.deposit.fiat.authorizenet.verify({ referenceId: 'referenceId' });
  });

  // Prism tests are disabled
  test.skip('webhook', async () => {
    const responsePromise = client.finance.deposit.fiat.authorizenet.webhook();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
