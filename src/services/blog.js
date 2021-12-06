import { checkError, client } from './client';

export async function getBlogs() {
  const blogs = await client.from('blogs').select();
  return checkError(blogs);
}
