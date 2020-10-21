<template>
  <div class="link-panel-wrapper">
    <RouterLink
      v-if="isInternal"
      class="link-panel"
      :to="link"
      :class="{ 'has-icon': icon }"
    >
      <div v-if="icon" class="w-full">
        <img :src="icon" class="no-zoom" alt />
      </div>
      <div class="px-6 py-4">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
        <ul v-if="items" class="w-full flex flex-wrap list-outside">
          <li v-for="(item, index) in items" :key="index" class="w-1/2 pr-3" >
              <RouterLink :to="item.link">
                {{ item.text }}
              </RouterLink>
          </li>
        </ul>
        <div v-if="!items" class="font-bold subtitle mt-2">Learn more -></div>
      </div>
      <!-- <div v-if="repo" class="repo-icon">
        <Octocat />
      </div> -->
    </RouterLink>
    <a
      v-else
      class="link-panel"
      :href="link"
      :target="target"
      :rel="rel"
      :class="{ 'has-icon': icon }"
    >
      <div v-if="icon" class="w-full">
        <img :src="icon" class="no-zoom" alt />
      </div>

      <div class="px-6 py-4">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
      </div>
      <!-- <div v-if="repo" class="repo-icon">
        <Octocat />
      </div> -->
    </a>
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
