import { gql, useQuery } from '@apollo/client';

export const CREATE_USER = gql`
  mutation($userId: String!, $name: String!, $email: String!){
    insert_users(
      objects: [
        { user_id: $userId, name: $name, email: $email }
      ], 
      on_conflict: { 
        constraint: users_pkey, update_columns: [] 
      }
    ) {
      affected_rows
    }
  }
`

export const GET_LESSONS = gql`
  query ($uid: String!) {
    user_lessons(order_by: {lesson_id: asc}, where: {user_id: {_eq: $uid}}){
      status
      lesson {
        lesson_id
        name
        description
        image_url
        price
      }
    }
  }
`;

export const GET_DECK = gql`
  query {
    cards ( order_by: {card_id: asc} ) {
      card_id
      word
      ipa
      image_url
      audio_url
    },
  }
`;
