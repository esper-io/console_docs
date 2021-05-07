<template>
  <div class="info-hud">
    <v-popover placement="right">
      <svg
        v-if="type === 'prompt'"
        role="img"
        class="info-circle fill-current text-yellow-500 opacity-60"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
        />
      </svg>
      <svg
        v-else-if="type === 'partial'"
        role="img"
        class="info-circle ml-3 fill-current text-grey-500 opacity-60"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-else-if="type === 'supported'"
        role="img"
        class="info-circle fill-current text-green-500 opacity-60"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-else
        role="img"
        class="info-circle fill-current text-red-500 opacity-60"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        />
      </svg>
      <template slot="popover">
        <slot></slot>
      </template>
    </v-popover>
  </div>
</template>

<script>
import Vue from "vue";
import VTooltip from "v-tooltip";

Vue.use(VTooltip);
VTooltip.options.autoHide = false;

export default {
  props: ["type"],
};
</script>

<style>
.info-hud {
  display: inline-block;
}

.info-hud .v-popover {
  color: #b8c2cc;
  display: inline-block;
  line-height: 0;

  /* & > span {
    outline: none;
  } */
}

.info-hud .v-popover:hover,
.info-hud .v-popover.open {
  cursor: pointer;
  color: #a5b2be;
}

.tooltip {
  max-width: 250px;
}

.info-circle {
  width: 18px;
  height: 18px;
  top: -1px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.tooltip {
  user-select: none;
  pointer-events: none;
  border-radius: 3px;
  display: block !important;
  z-index: 10000;
  background-color: var(--tooltip-bg-color);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
  padding: 24px;
}

.tooltip .tooltip-arrow {
  @apply absolute w-0 h-0;
  border-style: solid;
  margin: 12px;
  border-color: var(--tooltip-bg-color);
}

.tooltip[x-placement^="top"] {
  margin-bottom: 12px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 12px 12px 0 12px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -12px;
  left: calc(50% - 12px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 12px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 12px 12px 12px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -12px;
  left: calc(50% - 12px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 12px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 12px 12px 12px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -12px;
  top: calc(50% - 12px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 12px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 12px 0 12px 12px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -12px;
  top: calc(50% - 12px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
