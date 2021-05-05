import gql from 'graphql-tag';

export const getLessons = gql`
 query {
   lessons (
     order_by: {
       created_at: desc
     }
    ) 
  }
`;
