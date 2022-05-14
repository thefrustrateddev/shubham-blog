import { shallowMount } from "@vue/test-utils";
import BlogBanner from "@/components/BlogBanner.vue";

describe("BlogBanner.vue", () => {
  it("renders blog-img when isDefault is false", async () => {
    const isDefault = false;
    const wrapper = shallowMount(BlogBanner, {
      props: { isDefault },
    });
    let div = await wrapper.findAll(".blog-img");
    expect(div.length).toBe(1);
  });

  it("renders hero-banner when isDefault is true", async () => {
    const isDefault = true;
    const wrapper = shallowMount(BlogBanner, {
      props: { isDefault },
    });
    let div = await wrapper.findAll(".hero-banner");
    expect(div.length).toBe(1);
  });

  it("renders img when isDefault is false", async () => {
    const isDefault = false;
    const wrapper = shallowMount(BlogBanner, {
      props: { isDefault },
    });
    let div = await wrapper.findAll(".blog-img>img");
    expect(div.length).toBe(1);
  });

  it("renders bannerText", async () => {
    const wrapper = shallowMount(BlogBanner, {
      props: {},
    });
    let divText = wrapper.find(".hero-banner>.centered").text();
    expect(divText).toBe("The Truecaller Blog");
  });
});
