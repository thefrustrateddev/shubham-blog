export class BaseService {
  constructor(baseURL, siteId) {
    this.baseURL = baseURL;
    this.siteId = siteId;
  }
  async getCall(url, searchParams, slug) {
    let genURL = `${this.baseURL}${this.siteId}${url}`;
    if (slug) {
      genURL = genURL + "/slug:" + slug;
    }
    if (searchParams) {
      let searchParamString = new URLSearchParams(searchParams);
      genURL = genURL + "/?" + searchParamString;
    }
    return await fetch(genURL);
  }
}
