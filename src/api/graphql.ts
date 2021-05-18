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
  query {
    lessons ( order_by: {lesson_id: asc} ) {
      lesson_id
      name
      description
      image_url
      price
    },
  }
`;
