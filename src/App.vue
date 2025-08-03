<template>
  <div class="min-h-screen bg-neutral-950 text-zinc-50">
    <NavBar />
    <div class="min-h-full w-full flex justify-center">
      <div class="w-full max-w-[1280px] mx-2 sm:mx-6 z-10">
        <RouterView v-slot="{Component}">
          <Transition name="page" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from './store/languageStore';
import NavBar from './components/NavBar.vue'

const languageStore = useLanguageStore()
const { locale } = useI18n()

onBeforeMount(() => {
  // Check if there is a language in local storage
  if (localStorage.getItem('language')) {
    languageStore.changeLanguage(localStorage.getItem('language') as string)
    locale.value = languageStore.languageSelected.code
  }

})

watch (() => languageStore.languageSelected, (value) => {
  locale.value = value.code
})

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.35s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>