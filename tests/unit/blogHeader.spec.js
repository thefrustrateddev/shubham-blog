import { shallowMount } from "@vue/test-utils";
import BlogHeader from "@/layouts/BlogHeader.vue";

describe("BlogHeader.vue", () => {
  it("renders header", async () => {
    const wrapper = shallowMount(BlogHeader, {
      props: {},
    });
    let header = await wrapper.findAll(".header");
    let logo = await wrapper.findAll(".logo");
    expect(header.length).toBe(1);
    expect(logo.length).toBe(1);
  });
});
