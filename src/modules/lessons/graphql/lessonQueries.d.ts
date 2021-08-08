
declare module '*/lessonQueries.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetLessons: DocumentNode;
export const GetUserCards: DocumentNode;
export const GetCard: DocumentNode;
export const GetDeck: DocumentNode;
export const SaveCard: DocumentNode;

  export default defaultDocument;
}
    