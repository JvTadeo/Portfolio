<template>
  <nav class="w-full p-2 flex justify-center sticky top-0 z-20">
    <div
      class="max-w-[314px] p-2 grow rounded-3xl outline outline-neutral-600 bg-neutral-950 backdrop-blur-sm flex text-emerald-50 items-center justify-around"
    >
      <House
        strokeWidth="2"
        :size=22
        @click="$router.push('/')"
        class="cursor-pointer"
      />
      <SquareUser
        strokeWidth="2"
        :size=22
        @click="$router.push('/about')"
        class="cursor-pointer"
      />
      <Code
        strokeWidth="2"
        :size=22
        @click="$router.push('/projects')"
        class="cursor-pointer"
      />
      <!-- Linkedin -->
      <a
        href="https://www.linkedin.com/in/jvtadeo/"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer"
      >
        <Linkedin 
          strokeWidth="2"
          :size=22
        />
      </a>
      <!-- Github -->
      <a
        href="https://github.com/JvTadeo"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer"
      >
        <Github
          :size=22
          strokeWidth="2"
        />
      </a>
      <LanguageSelector/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Linkedin, House, SquareUser, Code, Github } from 'lucide-vue-next';
import LanguageSelector from './LanguageSelector.vue';
</script>