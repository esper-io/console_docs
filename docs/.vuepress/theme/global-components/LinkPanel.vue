<template>
  <div :class="{ 'has-icon': icon }" class="rounded block w-full p-2 md:w-1/2">
    <div class="shadow-lg h-full overflow-hidden rounded">
      <div
        class="h-full link-panel shadow-lg border-opacity-60 overflow-hidden"
      >
        <img
          class="lg:h-32 md:h-36 w-full object-cover object-center"
          :src="icon"
          alt="blog"
        />

        <div class="px-6 py-4">
          <div class="title leading-none text-lg font-medium block mb-1">
            {{ title }}
          </div>
          <div class="subtitle text-sm text-slate block leading-tight mb-4">
            {{ subtitle }}
          </div>
          <RouterLink
            v-if="isInternal"
            :to="link"
            class="font-bold text-sm block leading-tight mt-2"
            >Learn more</RouterLink
          >
        </div>
      </div>
    </div>
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
