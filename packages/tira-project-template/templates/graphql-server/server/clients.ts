import { createGraphQLGatewayClient } from 'tira-clients';
import { config } from './config';

export const gateway = createGraphQLGatewayClient(config.graphQLBackendGatewayUrl);
