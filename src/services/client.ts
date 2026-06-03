// GraphQL Client setup for WordPress headless CMS
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'

// Environment variables - to be configured in .env.local
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://api.hse-skillup.com/graphql'

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    })
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

// HTTP link
const httpLink = new HttpLink({
  uri: WORDPRESS_API_URL,
  credentials: 'same-origin', // Include cookies for authenticated requests
})

// Apollo Client instance
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming]
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
})

// Helper function for typed queries
export async function fetchQuery<TResult, TVariables>(
  query: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables
): Promise<TResult> {
  const { data } = await client.query<TResult, TVariables>({
    query,
    variables,
  })
  return data
}

// Helper function for typed mutations
export async function mutateQuery<TResult, TVariables>(
  mutation: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables
): Promise<TResult> {
  const { data } = await client.mutate<TResult, TVariables>({
    mutation,
    variables,
  })
  return data!
}

export default client