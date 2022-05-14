import { BlogService } from "@/services/blogs.service";
import { filterCategories } from "@/utils";
/**
 * Initiliasing BlogService
 */
const blogService = new BlogService(
  process.env.VUE_APP_BLOG_BASE_URL,
  process.env.VUE_APP_BLOG_SITE_ID
);

const state = {
  blogs: [],
  blog: {},
  blogCount: 0,
  currentPageNumber: 1,
  totalPages: 1,
  categories: [],
  selectedBlogSlug: "",
  selectedCategorySlug: "",
};

const getters = {
  getAllBlogs: (state) => state.blogs,
  getBlog: (state) => state.blog,
  getPageNumber: (state) => state.currentPageNumber,
  getTotalPage: (state) => state.totalPages,
  getCategorySlug: (state) => state.selectedCategorySlug,
  getCategories: (state) => state.categories,
};

const mutations = {
  SET_BLOGS: (state, blogs) => {
    state.blogs = blogs;
  },
  SET_BLOG_COUNT: (state, blogCount) => {
    state.blogCount = blogCount;
  },
  SET_TOTAL_PAGE: (state, totalPages) => {
    state.totalPages = totalPages;
  },
  SET_CATEGORIES: (state, categories) => {
    state.categories = filterCategories(categories);
  },
  SET_CATEGORY_SLUG: (state, categorySlug) => {
    state.selectedCategorySlug = categorySlug;
  },
  SET_BLOG_SLUG: (state, blogSlug) => {
    state.selectedBlogSlug = blogSlug;
  },
  SET_BLOG_DATA: (state, blogData) => {
    state.blog = blogData;
  },
  SET_CURRENT_PAGE_NUMBER: (state, currentPageNumber) => {
    state.currentPageNumber = currentPageNumber;
  },
};

const actions = {
  async FETCH_BLOGS({ state, commit }) {
    let response = await blogService.getBlogs(
      20,
      state.currentPageNumber,
      state.selectedCategorySlug
    );
    let processedResponse = await response.json();
    commit("SET_BLOGS", processedResponse.posts);
    commit("SET_BLOG_COUNT", processedResponse.found);
    commit("SET_TOTAL_PAGE", Math.ceil(processedResponse.found / 20));
  },
  async FETCH_CATEGORIES({ commit }) {
    let response = await blogService.getCategories();
    let processedResponse = await response.json();
    commit("SET_CATEGORIES", processedResponse.categories);
  },
  // eslint-disable-next-line no-unused-vars
  async FETCH_BLOG_BY_SLUG({ commit }, slug) {
    let response = await blogService.getBlogBySlug(slug);
    let processedResponse = await response.json();
    console.log({ processedResponse });
    commit("SET_BLOG_DATA", processedResponse);
  },
  SET_CATEGORY({ commit }, categorySlug) {
    commit("SET_CATEGORY_SLUG", categorySlug);
  },
  SET_CURRENT_PAGE_NUMBER({ commit }, currentPageNumber) {
    commit("SET_CURRENT_PAGE_NUMBER", currentPageNumber);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
