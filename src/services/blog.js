import { checkError, client } from './client';

export async function getBlogs() {
  const blogs = await client.from('blogs').select(`*, authors(name)`);
  return checkError(blogs);
}
// export async function getAuthorByID() {
//   const authorName = await client.from('blog').select(`authog_id(name)`);
//   return checkError(authorName);
// }
