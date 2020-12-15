<template>
  <div class="block w-1/2 sm:w-1/2 relative p-2 flex flex-col">
    <RouterLink
      v-if="isInternal"
      class="link-panel rounded overflow-hidden shadow-lg border block w-full"
      :to="link"
      :class="{ 'has-icon': icon }"
    >
      <div v-if="icon" class="w-full relative pb-2/3 h-48">
        <img :src="icon" class="no-zoom absolute h-full w-full object-cover" alt />
      </div>
      <div class="px-6 py-4">
        <div class="title leading-none text-lg font-medium block mb-1">{{ title }}</div>
        <div class="subtitle text-sm text-slate block leading-tight mb-4">{{ subtitle }}</div>
        <div v-if="items" class="w-full flex flex-wrap list-outside">
          <div v-for="(item, index) in items.slice(0,3)" :key="index" class="w-1/2 mt-1 pr-3 flex flex-wrap" >
            <div class="w-5 mr-2">👉</div>
            <RouterLink class="w-5/6" style="color: var(--sidebar-link-color)" :to="item.link">
                {{ item.text }}
              </RouterLink>
          </div>
          <div v-if="items.length > 3" class="w-1/2 mt-1 pr-3 flex flex-wrap" >
            <div class="w-5 mr-2">+</div>
            <RouterLink class="w-5/6" style="color: var(--sidebar-link-color)" :to="items[0].link">
                More items
              </RouterLink>
          </div>
        </div>
        <div v-if="!items" class="font-bold text-sm text-slate block leading-tight mt-2">Learn more -></div>
      </div>
    </RouterLink>
    <a
      v-else
      class="link-panel rounded overflow-hidden shadow-lg border block w-full"
      :href="link"
      :target="target"
      :rel="rel"
      :class="{ 'has-icon': icon }"
    >
      <div v-if="icon" class="w-full">
        <img :src="icon" class="no-zoom" alt />
      </div>

      <div class="px-6 py-4">
        <span class="leading-none text-lg font-medium block mb-1">{{ title }}</span>
        <span class="text-sm text-slate block leading-tight">{{ subtitle }}</span>
      </div>
    </a>
  </div>
</template>

<style lang="postcss">

.link-panel {
  transition: all 500ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    @apply no-underline !important;
    box-shadow: 0 0 36px rgba(74, 124, 246, 0.1);
    transform: translateY(-4px) translateZ(0);
  }

  /* &.has-icon {
    .link-panel-icon {
      @apply block w-6 h-6 absolute;
    }
  } */
}

/* @screen sm {
  .link-panel-wrapper {
    @apply w-1/2 py-0;
  }
}

@screen md {
  .link-panel-wrapper {
    @apply w-1/3 py-0;
  }
} */

</style>

<script>
import { isExternal, isMailto, isTel, ensureExt } from "../util";
import Octocat from "../icons/Octocat";

export default {
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    link: {
      type: String,
    },
    repo: {
      type: String,
    },
    items: {
      type: Array,
    },
  },
  components: {
    Octocat,
  },
  computed: {
    isNonHttpURI() {
      return isMailto(this.link) || isTel(this.link);
    },

    isBlankTarget() {
      return this.target === "_blank";
    },

    isInternal() {
      return !isExternal(this.link) && !this.isBlankTarget;
    },

    target() {
      if (this.isNonHttpURI) {
        return null;
      }
      return isExternal(this.link) ? "_blank" : "";
    },

    rel() {
      if (this.isNonHttpURI) {
        return null;
      }
      return this.isBlankTarget ? "noopener noreferrer" : "";
    },
  },
};
</script>
