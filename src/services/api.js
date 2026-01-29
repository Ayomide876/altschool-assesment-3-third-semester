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
    // If the API returns { data: { ... } }, we extract it. 
    // Otherwise, we take the whole object.
    return data.data ? data.data : data;
  }
};