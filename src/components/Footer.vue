<template>
    <footer class="relative w-full flex flex-col sm:flex-row outline-1 rounded-2xl items-center justify-center py-6 ">
        <GradientBlurBackground />
        <div class="z-10 text-sm text-center">
            © {{ new Date().getFullYear() }} João Vitor Tadeo. {{ t('Footer.text') }}
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import GradientBlurBackground from './GradientBlurBackground.vue';

const { t } = useI18n();
</script>