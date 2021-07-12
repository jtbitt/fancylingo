
declare module '*/lessonQueries.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetLessons: DocumentNode;
  export const GetCards: DocumentNode;
  export const GetDeck: DocumentNode;

  export default defaultDocument;
}
    