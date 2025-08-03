<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-7 h-7 p-0 rounded-full cursor-pointer">
        <img
          :src="`https://flagcdn.com/w40/${languageStore.languageSelected.code}.png`"
          :alt="languageStore.languageSelected.label"
          class="w-full h-full object-cover rounded-full"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      class="bg-zinc-800 text-zinc-50 border-zinc-700"
    >
      <DropdownMenuItem
        v-for="language in languageStore.languageList"
        :key="language.code"
        @click="languageStore.changeLanguage(language.code)"
        class="cursor-pointer"
        :class="{
          'bg-zinc-700': language.code === languageStore.languageSelected.code,
        }"
      >
        <img
          :src="`https://flagcdn.com/w40/${language.code}.png`"
          :alt="language.label"
          class="w-4 h-4 mr-2 rounded-full"
        />
        {{ language.label }}
      >
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu'

import { useLanguageStore } from '../store/languageStore';

const languageStore = useLanguageStore();
</script>