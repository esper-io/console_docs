<template>
  <div class="w-auto m-2 mt-4 bg-indigo-200 grid rounded-lg relative">
    <img
      class="max-w-lg object-contain no-zoom mt-10 rounded-md justify-self-center border-4 border-indigo-900"
      style="max-height: 32rem"
      :src="items[current].image"
      :key="current"
      alt
    />
    <div
      class="text-center text-indigo-900 leading-none text-lg px-8 mt-8 font-medium block mb-1"
    >
      {{ items[current].title }}
    </div>
    <div
      class="w-full flex flex-wrap justify-center p-4 mt-8 bg-indigo-900 rounded-b-lg"
    >
      <div>
        <button
          @click="slide(-1)"
          class="bg-white text-black inline-flex justify-center rounded-full py-2 px-6 hover:bg-gray-200"
        >
          Prev
        </button>
        <button
          @click="slide(1)"
          class="bg-indigo-500 inline-flex justify-center rounded-full py-2 px-6 ml-5 text-white hover:bg-indigo-600"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.link-panel-wrapper {
  @apply block w-1/2 relative p-2;
}

.link-panel {
  @apply rounded overflow-hidden shadow-lg border block w-full;
  transition: all 500ms cubic-bezier(0.16, 1, 0.3, 1);

  .title {
    @apply leading-none text-lg font-medium block mb-1;
  }

  .subtitle {
    @apply text-sm text-slate block leading-tight;
  }

  .repo-icon {
    @apply absolute;
    top: 0.9rem;
    right: 0.9rem;
  }

  &:hover {
    @apply no-underline !important;
    box-shadow: 0 0 36px rgba(74, 124, 246, 0.1);
    transform: translateY(-4px) translateZ(0);
  }

  &.has-icon {
    .link-panel-icon {
      @apply block w-6 h-6 absolute;
    }

    /* .title,
    .subtitle {
      padding-left: 2.25rem;
    } */
  }
}

@screen sm {
  .link-panel-wrapper {
    @apply w-1/2;
  }
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    slide(dir) {
      console.log("docs", dir, this.current, this.items);
      this.direction = dir;
      let len = this.items.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
  data: () => ({
    current: 0,
    direction: -1,
  })
};
</script>
