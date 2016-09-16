import ApolloClient, { createNetworkInterface } from 'apollo-client'
import config from './config'

var client = new ApolloClient();
const networkInterface = createNetworkInterface(config.graphQLEndpointUrl);
client.networkInterface = networkInterface;

export default client
