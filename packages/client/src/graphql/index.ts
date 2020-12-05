import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Book = {
  __typename?: 'Book';
  title: Scalars['String'];
  author: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  books: Array<Maybe<Book>>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type FetchBooksQueryVariables = Exact<{ [key: string]: never }>;

export type FetchBooksQuery = { __typename?: 'Query' } & {
  books: Array<Maybe<{ __typename?: 'Book' } & Pick<Book, 'title' | 'author'>>>;
};

export const FetchBooksDocument = gql`
  query fetchBooks {
    books {
      title
      author
    }
  }
`;

/**
 * __useFetchBooksQuery__
 *
 * To run a query within a React component, call `useFetchBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchBooksQuery(baseOptions?: Apollo.QueryHookOptions<FetchBooksQuery, FetchBooksQueryVariables>) {
  return Apollo.useQuery<FetchBooksQuery, FetchBooksQueryVariables>(FetchBooksDocument, baseOptions);
}
export function useFetchBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchBooksQuery, FetchBooksQueryVariables>,
) {
  return Apollo.useLazyQuery<FetchBooksQuery, FetchBooksQueryVariables>(FetchBooksDocument, baseOptions);
}
export type FetchBooksQueryHookResult = ReturnType<typeof useFetchBooksQuery>;
export type FetchBooksLazyQueryHookResult = ReturnType<typeof useFetchBooksLazyQuery>;
export type FetchBooksQueryResult = Apollo.QueryResult<FetchBooksQuery, FetchBooksQueryVariables>;
