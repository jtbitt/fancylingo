
declare module '*/lessonQueries.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getLessons: DocumentNode;
export const getDeck: DocumentNode;

  export default defaultDocument;
}
    