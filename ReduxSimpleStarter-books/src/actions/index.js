export function selectBook(book) {
  console.log('A book has been selecte: ', book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
