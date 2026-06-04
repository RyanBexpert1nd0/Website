// GraphQL Client setup for WordPress headless CMS
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'

// Environment variables - to be configured in .env.local
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://api.hse-skillup.com/graphql'

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError }: {
  graphQLErrors?: Array<{ message: string; locations?: any; path?: any }>;
  networkError?: Error
}) => {
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
            merge(existing: any[] = [], incoming: any[]) {
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
  const result = await (client as any).query({
    query,
    variables,
  })
  return result.data as TResult
}

// Helper function for typed mutations
export async function mutateQuery<TResult, TVariables>(
  mutation: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables
): Promise<TResult> {
  const result = await (client as any).mutate({
    mutation,
    variables,
  })
  return result.data as TResult
}

export default client