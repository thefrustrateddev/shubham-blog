<template>
  <div class="col-3 col-lg-4 col-sm-6 col-xs-12">
    <div
      class="card ml-20 mr-20 mt-20 mb-20"
      @click="routeToBlog()"
      :data-cy="cardSlug"
    >
      <div class="header pl-20 pr-20 pt-20 pb-20">
        <div class="circle" :class="modCardCategory.slug"></div>
        <div class="text pl-10">{{ modCardCategory.name }}</div>
      </div>
      <div class="image">
        <img :src="cardImage" />
      </div>
      <div class="body pl-30 pr-30 pt-25 pb-25">
        <div class="title pb-20" v-html="modCardTitle"></div>
        <div class="posted">{{ modCardDate }} ago</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  inheritAttrs: false,
};
</script>
<script setup>
import { defineProps, computed, toRaw } from "vue";
import { useRouter } from "vue-router";
import { timeSince } from "@/utils";

let props = defineProps({
  cardImage: {
    type: String,
    required: true,
    default: `${require("@/assets/notfound.jpeg")}`,
  },
  cardCategory: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  cardTitle: {
    type: String,
    required: true,
    default: "No Title",
  },
  cardSlug: {
    type: String,
    required: true,
    default: "",
  },
  cardPostedDate: {
    type: String,
    required: true,
    default: "",
  },
});

const router = useRouter();

// eslint-disable-next-line no-unused-vars
let modCardTitle = computed(() => {
  if (props.cardTitle.length > 26) {
    return `${props.cardTitle.substring(0, 26)}...`;
  }
  return props.cardTitle;
});
// eslint-disable-next-line no-unused-vars
let modCardCategory = computed(() => {
  let cardCategories = [];
  for (let category in toRaw(props.cardCategory)) {
    cardCategories.push(toRaw(props.cardCategory)[category]);
  }

  return cardCategories[0];
});

// eslint-disable-next-line no-unused-vars
let modCardDate = computed(() => {
  return timeSince(
    new Date(Date.now() - new Date(props.cardPostedDate).getTime())
  );
});

const routeToBlog = async () => {
  console.log({ a: props.cardSlug });
  router.push({
    name: "blog",
    params: {
      slug: props.cardSlug,
    },
  });
};
</script>

<style scoped lang="scss">
@import "../styles/variables";
.card {
  cursor: pointer;
  background-color: $color-white;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(166, 166, 166, 0.4);
  -moz-box-shadow: 0px 0px 10px 1px rgba(166, 166, 166, 0.4);
  box-shadow: 0px 0px 5px 1px rgba(166, 166, 166, 0.4);
  border-radius: 2px;
  .header {
    display: flex;
    .circle {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: $color-category-tech;

      &.diversity-and-inclusion {
        background-color: $color-category-div;
      }
      &.app-features {
        background-color: $color-category-app;
      }
      &.scam-alert {
        background-color: $color-category-scam;
      }
    }
    .text {
      font-size: 14px;
      font-weight: 700;
    }
  }
  .image {
    height: 140px;
    img {
      width: 100%;
      max-height: 100%;
    }
  }
  .body {
    .title {
      height: 35px;
      font-size: 18px;
      font-weight: 700;
    }
    .posted {
      color: $color-gray;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
