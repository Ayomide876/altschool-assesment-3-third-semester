export const api = {
  async getAllPosts() {
    const res = await fetch('https://api.oluwasetemi.dev/posts');
    return await res.json();
  },

  async getPostById(id) {
    const res = await fetch(`https://api.oluwasetemi.dev/posts/${id}`);
    
    if (!res.ok) {
      throw new Error(`Post with ID ${id} not found`);
    }
    
    const data = await res.json();
    return data.data ? data.data : data;
  }
};