import { BaseService } from "./base.service";

export class BlogService extends BaseService {
  constructor(baseURL, siteId) {
    super(baseURL, siteId);
  }
  async getBlogs(number = 20, pageNumber = 1, category) {
    let params = {
      fields: process.env.VUE_APP_BLOG_LIST_FIELDS,
      number,
      page: pageNumber,
    };
    if (category) {
      params = { ...params, category };
    }
    const response = await this.getCall("/posts", params);
    return response;
  }
  async getCategories() {
    const response = await this.getCall("/categories");
    return response;
  }
  async getBlogBySlug(slug) {
    const response = await this.getCall(
      "/posts",
      {
        fields: process.env.VUE_APP_BLOG_FIELDS,
      },
      slug
    );
    return response;
  }
}
