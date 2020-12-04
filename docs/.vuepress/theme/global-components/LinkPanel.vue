<template>
  <div class="link-panel-wrapper block w-1/2 relative p-2">
    <RouterLink
      v-if="isInternal"
      class="link-panel rounded overflow-hidden shadow-lg border block w-full"
      :to="link"
      :class="{ 'has-icon': icon }"
    >
      <div v-if="icon" class="w-full">
        <img :src="icon" class="no-zoom" alt />
      </div>
      <div class="px-6 py-4">
        <div class="leading-none text-lg font-medium block mb-1">{{ title }}</div>
        <div class="text-sm text-slate block leading-tight">{{ subtitle }}</div>
        <ul v-if="items" class="w-full flex flex-wrap list-outside">
          <li v-for="(item, index) in items" :key="index" class="w-1/2 pr-3" >
              <RouterLink :to="item.link">
                {{ item.text }}
              </RouterLink>
          </li>
        </ul>
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

@screen sm {
  .link-panel-wrapper {
    @apply w-1/2 mx-2 py-0;
  }
}

@screen md {
  .link-panel-wrapper {
    @apply w-1/3 mx-2 py-0;
  }
}

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
