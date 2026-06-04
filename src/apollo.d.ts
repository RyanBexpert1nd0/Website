declare module '@apollo/client' {
  export const gql: (template: TemplateStringsArray | string, ...substitutions: any[]) => any
  export const ApolloClient: new (options: any) => any
  export const InMemoryCache: new (options?: any) => any
  export const HttpLink: new (options: any) => any
  export const from: (links: any[]) => any

  // Untuk mendukung generic methods
  interface ApolloClientInstance {
    query<TResult = any, TVariables = any>(options: {
      query: any
      variables?: TVariables
    }): Promise<{ data: TResult }>

    mutate<TResult = any, TVariables = any>(options: {
      mutation: any
      variables?: TVariables
    }): Promise<{ data: TResult }>
  }

  export { ApolloClientInstance as ApolloClient }
}

declare module '@apollo/client/link/error' {
  export const onError: (handler: (params: {
    graphQLErrors?: Array<{ message: string; locations?: any; path?: any }>
    networkError?: Error
  }) => void) => any
}