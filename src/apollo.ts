import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
// import { ApolloLink, concat, Operation, split } from "apollo-link";
// import { onError } from "apollo-link-error";
// import { HttpLink } from "apollo-link-http";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";
// import { toast } from "react-toastify";
import { withClientState } from "apollo-link-state";
import { defaults, resolvers, typeDefs } from "./clientState";

const isDev = process.env.NODE_ENV === "development";
console.log(isDev);

const cache = new InMemoryCache();

// const getToken = () => {
//     const token = localStorage.getItem("jwt");
//     if (token) {
//         return token;
//     } else {
//         return "";
//     }
// };

// const authMiddleware = new ApolloLink((operation: Operation, forward: any) => {
//     operation.setContext({
//         headers: {
//             "X-JWT": getToken()
//         }
//     });
//     return forward(operation);
// });

// const httpLink = new HttpLink({
//     uri: isDev ? "http://localhost:4000/graphql" : "https://null/graphql"
// });

// const wsLink = new WebSocketLink({
//     options: {
//         connectionParams: {
//             "X-JWT": getToken()
//         },
//         reconnect: true
//     },
//     uri: isDev ? "ws://localhost:4000/subscription" : "ws://null/subscription"
// });

// const combinedLinks = split(
//     ({ query }) => {
//         const { kind, operation }: any = getMainDefinition(query);
//         return kind === "OperationDefinition" && operation === "subscription";
//     },
//     wsLink,
//     httpLink
// );

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors) {
//         graphQLErrors.forEach(({ message }) => {
//             toast.error(`Unexpected error: ${message}`);
//         });
//     }
//     if (networkError) {
//         toast.error(`Network error: ${networkError}`);
//     }
// });

const localStateLink = withClientState({
    cache,
    defaults,
    resolvers,
    typeDefs
});

const client = new ApolloClient({
    cache,
    // link: ApolloLink.from([
    //     errorLink,
    //     localStateLink,
    //     concat(authMiddleware, combinedLinks)
    // ])
    link: ApolloLink.from([localStateLink])
});

export default client;
