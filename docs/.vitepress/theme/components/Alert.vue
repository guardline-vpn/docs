<template>
  <div class="alert" :class="type">
    <p v-if="title || type" class="alert--title">
      {{ (title || type || "Info") + ":" }}
    </p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
type Types = "hint" | "information" | "warning";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    type: {
      type: String as PropType<Types>,
      default: "",
    },
    title: {
      type: String,
      defualt: "",
    },
  },
  setup() {},
});
</script>

<style lang="scss">
$types: (
  "information": #ebc55d,
  "warning": #bf3e3e,
  "hint": #5079ff,
);

.alert {
  padding: 0px 20px;
  background-color: #333232;
  border-radius: 6px;
  border: 2px solid;
  border-color: #6d6c6c;
  border-left-width: 8px;
  margin: 1.5rem 0;

  &--title {
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: capitalize;
    margin-bottom: 0px;
  }
}

@each $name, $type in $types {
  .alert.#{$name} {
    border-color: $type;
    background-color: #{$type}12;
    & a {
      color: $type;
      font-weight: bold;
      &:hover {
        color: #{scale-color($type, $lightness: 30%)};
      }
    }
  }
}
</style>