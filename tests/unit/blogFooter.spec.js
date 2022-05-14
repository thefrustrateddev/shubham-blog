import { shallowMount } from "@vue/test-utils";
import BlogFooter from "@/layouts/BlogFooter.vue";

describe("BlogFooter.vue", () => {
  it("renders footer", async () => {
    const wrapper = shallowMount(BlogFooter, {
      props: {},
    });
    let footerText = await wrapper.find(".footer>.wrapper").text();
    expect(footerText).toBe("© True Software Scandinavia AB");
  });
});
