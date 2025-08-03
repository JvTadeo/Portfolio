<template>
  <div
    class="absolute inset-0 z-0 backdrop-blur-md rounded-2xl bg-gradient-to-br"
    :class="gradientClasses"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const gradientVariantKeys = ['default', 'blue', 'purple'] as const
type GradientVariant = typeof gradientVariantKeys[number]

const props = defineProps<{
  variant?: GradientVariant
}>()

const gradientVariants: Record<GradientVariant, string> = {
  default: 'from-zinc-900/60 via-zinc-800/50 to-zinc-950/50',
  blue: 'from-blue-900/60 via-blue-800/50 to-blue-950/50',
  purple: 'from-purple-900/60 via-purple-800/50 to-purple-950/50'
}

const gradientClasses = computed(() => {
  return gradientVariants[props.variant ?? 'default']
})

</script>