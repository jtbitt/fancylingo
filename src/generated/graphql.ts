import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "cards" */
export type Cards = {
  __typename?: 'cards';
  audio_url: Scalars['String'];
  card_id: Scalars['Int'];
  image_url: Scalars['String'];
  ipa: Scalars['String'];
  /** An array relationship */
  lesson_cards: Array<Lesson_Cards>;
  word: Scalars['String'];
};


/** columns and relationships of "cards" */
export type CardsLesson_CardsArgs = {
  distinct_on?: Maybe<Array<Lesson_Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lesson_Cards_Order_By>>;
  where?: Maybe<Lesson_Cards_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "cards". All fields are combined with a logical 'AND'. */
export type Cards_Bool_Exp = {
  _and?: Maybe<Array<Cards_Bool_Exp>>;
  _not?: Maybe<Cards_Bool_Exp>;
  _or?: Maybe<Array<Cards_Bool_Exp>>;
  audio_url?: Maybe<String_Comparison_Exp>;
  card_id?: Maybe<Int_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  ipa?: Maybe<String_Comparison_Exp>;
  lesson_cards?: Maybe<Lesson_Cards_Bool_Exp>;
  word?: Maybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "cards". */
export type Cards_Order_By = {
  audio_url?: Maybe<Order_By>;
  card_id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  ipa?: Maybe<Order_By>;
  lesson_cards_aggregate?: Maybe<Lesson_Cards_Aggregate_Order_By>;
  word?: Maybe<Order_By>;
};

/** select columns of table "cards" */
export enum Cards_Select_Column {
  /** column name */
  AudioUrl = 'audio_url',
  /** column name */
  CardId = 'card_id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Ipa = 'ipa',
  /** column name */
  Word = 'word'
}

/** columns and relationships of "lesson_cards" */
export type Lesson_Cards = {
  __typename?: 'lesson_cards';
  /** An object relationship */
  card: Cards;
  card_id: Scalars['Int'];
  card_position: Scalars['Int'];
  /** An object relationship */
  lesson: Lessons;
  lesson_id: Scalars['Int'];
};

/** order by aggregate values of table "lesson_cards" */
export type Lesson_Cards_Aggregate_Order_By = {
  avg?: Maybe<Lesson_Cards_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Lesson_Cards_Max_Order_By>;
  min?: Maybe<Lesson_Cards_Min_Order_By>;
  stddev?: Maybe<Lesson_Cards_Stddev_Order_By>;
  stddev_pop?: Maybe<Lesson_Cards_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Lesson_Cards_Stddev_Samp_Order_By>;
  sum?: Maybe<Lesson_Cards_Sum_Order_By>;
  var_pop?: Maybe<Lesson_Cards_Var_Pop_Order_By>;
  var_samp?: Maybe<Lesson_Cards_Var_Samp_Order_By>;
  variance?: Maybe<Lesson_Cards_Variance_Order_By>;
};

/** order by avg() on columns of table "lesson_cards" */
export type Lesson_Cards_Avg_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lesson_cards". All fields are combined with a logical 'AND'. */
export type Lesson_Cards_Bool_Exp = {
  _and?: Maybe<Array<Lesson_Cards_Bool_Exp>>;
  _not?: Maybe<Lesson_Cards_Bool_Exp>;
  _or?: Maybe<Array<Lesson_Cards_Bool_Exp>>;
  card?: Maybe<Cards_Bool_Exp>;
  card_id?: Maybe<Int_Comparison_Exp>;
  card_position?: Maybe<Int_Comparison_Exp>;
  lesson?: Maybe<Lessons_Bool_Exp>;
  lesson_id?: Maybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "lesson_cards" */
export type Lesson_Cards_Max_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "lesson_cards" */
export type Lesson_Cards_Min_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "lesson_cards". */
export type Lesson_Cards_Order_By = {
  card?: Maybe<Cards_Order_By>;
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson?: Maybe<Lessons_Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** select columns of table "lesson_cards" */
export enum Lesson_Cards_Select_Column {
  /** column name */
  CardId = 'card_id',
  /** column name */
  CardPosition = 'card_position',
  /** column name */
  LessonId = 'lesson_id'
}

/** order by stddev() on columns of table "lesson_cards" */
export type Lesson_Cards_Stddev_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "lesson_cards" */
export type Lesson_Cards_Stddev_Pop_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "lesson_cards" */
export type Lesson_Cards_Stddev_Samp_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "lesson_cards" */
export type Lesson_Cards_Sum_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "lesson_cards" */
export type Lesson_Cards_Var_Pop_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "lesson_cards" */
export type Lesson_Cards_Var_Samp_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "lesson_cards" */
export type Lesson_Cards_Variance_Order_By = {
  card_id?: Maybe<Order_By>;
  card_position?: Maybe<Order_By>;
  lesson_id?: Maybe<Order_By>;
};

/** columns and relationships of "lessons" */
export type Lessons = {
  __typename?: 'lessons';
  course_id: Scalars['Int'];
  description: Scalars['String'];
  image_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  lesson_cards: Array<Lesson_Cards>;
  lesson_id: Scalars['Int'];
  name: Scalars['String'];
  price?: Maybe<Scalars['String']>;
  sales_description?: Maybe<Scalars['String']>;
  /** An array relationship */
  user_lessons: Array<User_Lessons>;
};


/** columns and relationships of "lessons" */
export type LessonsLesson_CardsArgs = {
  distinct_on?: Maybe<Array<Lesson_Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lesson_Cards_Order_By>>;
  where?: Maybe<Lesson_Cards_Bool_Exp>;
};


/** columns and relationships of "lessons" */
export type LessonsUser_LessonsArgs = {
  distinct_on?: Maybe<Array<User_Lessons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Lessons_Order_By>>;
  where?: Maybe<User_Lessons_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "lessons". All fields are combined with a logical 'AND'. */
export type Lessons_Bool_Exp = {
  _and?: Maybe<Array<Lessons_Bool_Exp>>;
  _not?: Maybe<Lessons_Bool_Exp>;
  _or?: Maybe<Array<Lessons_Bool_Exp>>;
  course_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  lesson_cards?: Maybe<Lesson_Cards_Bool_Exp>;
  lesson_id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<String_Comparison_Exp>;
  sales_description?: Maybe<String_Comparison_Exp>;
  user_lessons?: Maybe<User_Lessons_Bool_Exp>;
};

/** Ordering options when selecting data from "lessons". */
export type Lessons_Order_By = {
  course_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  lesson_cards_aggregate?: Maybe<Lesson_Cards_Aggregate_Order_By>;
  lesson_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  sales_description?: Maybe<Order_By>;
  user_lessons_aggregate?: Maybe<User_Lessons_Aggregate_Order_By>;
};

/** select columns of table "lessons" */
export enum Lessons_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Description = 'description',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  LessonId = 'lesson_id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  SalesDescription = 'sales_description'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** An array relationship */
  lesson_cards: Array<Lesson_Cards>;
  /** fetch data from the table: "lesson_cards" using primary key columns */
  lesson_cards_by_pk?: Maybe<Lesson_Cards>;
  /** fetch data from the table: "lessons" */
  lessons: Array<Lessons>;
  /** fetch data from the table: "lessons" using primary key columns */
  lessons_by_pk?: Maybe<Lessons>;
  /** An array relationship */
  user_lessons: Array<User_Lessons>;
  /** fetch data from the table: "user_lessons" using primary key columns */
  user_lessons_by_pk?: Maybe<User_Lessons>;
};


export type Query_RootCardsArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};


export type Query_RootCards_By_PkArgs = {
  card_id: Scalars['Int'];
};


export type Query_RootLesson_CardsArgs = {
  distinct_on?: Maybe<Array<Lesson_Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lesson_Cards_Order_By>>;
  where?: Maybe<Lesson_Cards_Bool_Exp>;
};


export type Query_RootLesson_Cards_By_PkArgs = {
  card_id: Scalars['Int'];
  lesson_id: Scalars['Int'];
};


export type Query_RootLessonsArgs = {
  distinct_on?: Maybe<Array<Lessons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lessons_Order_By>>;
  where?: Maybe<Lessons_Bool_Exp>;
};


export type Query_RootLessons_By_PkArgs = {
  lesson_id: Scalars['Int'];
};


export type Query_RootUser_LessonsArgs = {
  distinct_on?: Maybe<Array<User_Lessons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Lessons_Order_By>>;
  where?: Maybe<User_Lessons_Bool_Exp>;
};


export type Query_RootUser_Lessons_By_PkArgs = {
  lesson_id: Scalars['Int'];
  user_id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** An array relationship */
  lesson_cards: Array<Lesson_Cards>;
  /** fetch data from the table: "lesson_cards" using primary key columns */
  lesson_cards_by_pk?: Maybe<Lesson_Cards>;
  /** fetch data from the table: "lessons" */
  lessons: Array<Lessons>;
  /** fetch data from the table: "lessons" using primary key columns */
  lessons_by_pk?: Maybe<Lessons>;
  /** An array relationship */
  user_lessons: Array<User_Lessons>;
  /** fetch data from the table: "user_lessons" using primary key columns */
  user_lessons_by_pk?: Maybe<User_Lessons>;
};


export type Subscription_RootCardsArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};


export type Subscription_RootCards_By_PkArgs = {
  card_id: Scalars['Int'];
};


export type Subscription_RootLesson_CardsArgs = {
  distinct_on?: Maybe<Array<Lesson_Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lesson_Cards_Order_By>>;
  where?: Maybe<Lesson_Cards_Bool_Exp>;
};


export type Subscription_RootLesson_Cards_By_PkArgs = {
  card_id: Scalars['Int'];
  lesson_id: Scalars['Int'];
};


export type Subscription_RootLessonsArgs = {
  distinct_on?: Maybe<Array<Lessons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lessons_Order_By>>;
  where?: Maybe<Lessons_Bool_Exp>;
};


export type Subscription_RootLessons_By_PkArgs = {
  lesson_id: Scalars['Int'];
};


export type Subscription_RootUser_LessonsArgs = {
  distinct_on?: Maybe<Array<User_Lessons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Lessons_Order_By>>;
  where?: Maybe<User_Lessons_Bool_Exp>;
};


export type Subscription_RootUser_Lessons_By_PkArgs = {
  lesson_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** columns and relationships of "user_lessons" */
export type User_Lessons = {
  __typename?: 'user_lessons';
  /** An object relationship */
  lesson: Lessons;
  lesson_id: Scalars['Int'];
  status: Scalars['Int'];
  user_id: Scalars['String'];
};

/** order by aggregate values of table "user_lessons" */
export type User_Lessons_Aggregate_Order_By = {
  avg?: Maybe<User_Lessons_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Lessons_Max_Order_By>;
  min?: Maybe<User_Lessons_Min_Order_By>;
  stddev?: Maybe<User_Lessons_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Lessons_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Lessons_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Lessons_Sum_Order_By>;
  var_pop?: Maybe<User_Lessons_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Lessons_Var_Samp_Order_By>;
  variance?: Maybe<User_Lessons_Variance_Order_By>;
};

/** order by avg() on columns of table "user_lessons" */
export type User_Lessons_Avg_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_lessons". All fields are combined with a logical 'AND'. */
export type User_Lessons_Bool_Exp = {
  _and?: Maybe<Array<User_Lessons_Bool_Exp>>;
  _not?: Maybe<User_Lessons_Bool_Exp>;
  _or?: Maybe<Array<User_Lessons_Bool_Exp>>;
  lesson?: Maybe<Lessons_Bool_Exp>;
  lesson_id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "user_lessons" */
export type User_Lessons_Max_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "user_lessons" */
export type User_Lessons_Min_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "user_lessons". */
export type User_Lessons_Order_By = {
  lesson?: Maybe<Lessons_Order_By>;
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "user_lessons" */
export enum User_Lessons_Select_Column {
  /** column name */
  LessonId = 'lesson_id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "user_lessons" */
export type User_Lessons_Stddev_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "user_lessons" */
export type User_Lessons_Stddev_Pop_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "user_lessons" */
export type User_Lessons_Stddev_Samp_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** order by sum() on columns of table "user_lessons" */
export type User_Lessons_Sum_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "user_lessons" */
export type User_Lessons_Var_Pop_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "user_lessons" */
export type User_Lessons_Var_Samp_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** order by variance() on columns of table "user_lessons" */
export type User_Lessons_Variance_Order_By = {
  lesson_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

export type GetLessonsQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetLessonsQuery = (
  { __typename?: 'query_root' }
  & { user_lessons: Array<(
    { __typename?: 'user_lessons' }
    & Pick<User_Lessons, 'status'>
    & { lesson: (
      { __typename?: 'lessons' }
      & Pick<Lessons, 'lesson_id' | 'name' | 'description' | 'sales_description' | 'image_url' | 'price'>
    ) }
  )> }
);

export type GetDeckQueryVariables = Exact<{
  lessonId: Scalars['Int'];
}>;


export type GetDeckQuery = (
  { __typename?: 'query_root' }
  & { lesson_cards: Array<(
    { __typename?: 'lesson_cards' }
    & Pick<Lesson_Cards, 'card_id'>
    & { card: (
      { __typename?: 'cards' }
      & Pick<Cards, 'word' | 'ipa' | 'image_url' | 'audio_url'>
    ) }
  )> }
);


export const GetLessonsDocument = gql`
    query getLessons($uid: String!) {
  user_lessons(order_by: {lesson_id: asc}, where: {user_id: {_eq: $uid}}) {
    status
    lesson {
      lesson_id
      name
      description
      sales_description
      image_url
      price
    }
  }
}
    `;

/**
 * __useGetLessonsQuery__
 *
 * To run a query within a React component, call `useGetLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonsQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useGetLessonsQuery(baseOptions: Apollo.QueryHookOptions<GetLessonsQuery, GetLessonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLessonsQuery, GetLessonsQueryVariables>(GetLessonsDocument, options);
      }
export function useGetLessonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonsQuery, GetLessonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLessonsQuery, GetLessonsQueryVariables>(GetLessonsDocument, options);
        }
export type GetLessonsQueryHookResult = ReturnType<typeof useGetLessonsQuery>;
export type GetLessonsLazyQueryHookResult = ReturnType<typeof useGetLessonsLazyQuery>;
export type GetLessonsQueryResult = Apollo.QueryResult<GetLessonsQuery, GetLessonsQueryVariables>;
export const GetDeckDocument = gql`
    query getDeck($lessonId: Int!) {
  lesson_cards(
    order_by: {card_position: asc}
    where: {lesson_id: {_eq: $lessonId}}
  ) {
    card_id
    card {
      word
      ipa
      image_url
      audio_url
    }
  }
}
    `;

/**
 * __useGetDeckQuery__
 *
 * To run a query within a React component, call `useGetDeckQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeckQuery({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *   },
 * });
 */
export function useGetDeckQuery(baseOptions: Apollo.QueryHookOptions<GetDeckQuery, GetDeckQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeckQuery, GetDeckQueryVariables>(GetDeckDocument, options);
      }
export function useGetDeckLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeckQuery, GetDeckQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeckQuery, GetDeckQueryVariables>(GetDeckDocument, options);
        }
export type GetDeckQueryHookResult = ReturnType<typeof useGetDeckQuery>;
export type GetDeckLazyQueryHookResult = ReturnType<typeof useGetDeckLazyQuery>;
export type GetDeckQueryResult = Apollo.QueryResult<GetDeckQuery, GetDeckQueryVariables>;