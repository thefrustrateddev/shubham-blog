import { shallowMount } from "@vue/test-utils";
import BlogCard from "@/components/BlogCard.vue";

jest.mock("vue-router", () => ({
  useRouter: () => ({}),
}));

jest.mock("@/utils", () => ({
  timeSince: () => ({}),
}));

describe("BlogBanner.vue", () => {
  it("renders img when cardImg is sent", async () => {
    const cardImage = "test";
    const cardCategory = {
      "App Features": {
        ID: 41272464,
        name: "App Features",
        slug: "app-features",
        description: "News about the Truecaller app",
        post_count: 280,
        meta: {
          links: {
            self: "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:app-features",
            help: "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories/slug:app-features/help",
            site: "https://public-api.wordpress.com/rest/v1.1/sites/107403796",
          },
        },
        parent: 0,
      },
    };
    const cardTitle = "test";
    const cardSlug = "test";
    const cardPostedDate = "2021-04-06T10:55:00+02:00";

    const wrapper = shallowMount(BlogCard, {
      props: { cardImage, cardCategory, cardTitle, cardSlug, cardPostedDate },
    });

    let img = await wrapper.findAll(".card .image>img");
    let cardTitleData = await wrapper.find(".card .header>.text").text();
    expect(img.length).toBe(1);
    expect(cardTitleData).toBe("App Features");
  });
});
