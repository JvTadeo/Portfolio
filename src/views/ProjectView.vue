<template>
  <div class="flex flex-col justify-center items-center w-full space-y-16 my-16">
    <!-- Header -->
    <Card class="relative overflow-hidden outline-1 w-full border-0 bg-transparent text-zinc-50">
      <GradientBlurBackground />
      <div class="relative z-10 flex flex-col w-full">
        <CardHeader>
          <p class="font-bold text-lg">{{ t('ProjectPage.title') }}</p>
        </CardHeader>
        <CardContent>
          <p class="text-gray-400">{{ t('ProjectPage.description') }}</p>
        </CardContent>
      </div>
    </Card>
    <!-- Category -->
    <Card class="relative overflow-hidden outline-1 w-full border-0 bg-transparent text-zinc-50">
      <GradientBlurBackground />
      <!-- Web & Mobile -->
      <div class="relative z-10 flex flex-col w-full">
        <Card class="w-full border-0 bg-transparent text-zinc-50">
          <CardHeader class="w-full flex flex-row items-center mb-4 gap-2">
            <Globe />
            <p class="font-bold text-lg">{{ t('ProjectPage.WebAndMobileSection.title') }}</p>
          </CardHeader>
          <CardContent class="w-full flex flex-col space-y-5">
            <Card v-for="(project, index) in tm('ProjectPage.WebAndMobileSection.projects')" :key="project"
              class="overflow-hidden p-0 w-full bg-zinc-800 border-0 text-zinc-50">
              <div class="flex flex-col lg:flex-row" :class="{ 'lg:flex-row-reverse': Number(index) % 2 === 1 }">
                <!-- Image -->
                <div class="lg:w-1/2 aspect-video overflow-hidden">
                  <img :src="project.image" :alt="project.altImage"
                    class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" />
                </div>

                <!-- Content -->
                <div class="lg:w-1/2 flex flex-col">
                  <CardContent class="flex flex-col flex-grow p-4 sm:p-6 lg:p-8">
                    <!-- Title -->
                    <h3 class="font-bold text-lg sm:text-xl mb-2">{{ project.title }}</h3>

                    <!-- Description -->
                    <p class="text-gray-400 text-sm sm:text-base mb-3 flex-grow leading-relaxed">
                      {{ project.description }}
                    </p>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      <Badge v-for="tag in project.tags" :key="tag" variant="secondary" class="text-xs">
                        {{ tag }}
                      </Badge>
                    </div>

                    <!-- Footer -->
                    <div>
                      <Button as="a" :href="project.githubLink" target="_blank" rel="noopener" class="w-full sm:w-auto">
                        <Github :size="16" class="mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
      <Separator class="z-10" />
      <!-- Game Developer -->
      <div class="relative z-10 flex flex-col w-full">
        <Card class="w-full border-0 bg-transparent text-zinc-50">
          <CardHeader class="w-full flex flex-row items-center mb-4 gap-2">
            <Gamepad />
            <p class="font-bold text-lg">{{ t('ProjectPage.GameDevSection.title') }}</p>
          </CardHeader>
          <CardContent class="w-full flex flex-col space-y-5">
            <!-- Pong -->
              <Card v-for="(project, index) in tm('ProjectPage.GameDevSection.projects')" :key="project"
              class="overflow-hidden p-0 w-full bg-zinc-800 border-0 text-zinc-50">
              <div class="flex flex-col lg:flex-row" :class="{ 'lg:flex-row-reverse': Number(index) % 2 === 1 }">
                <!-- Image -->
                <div class="lg:w-1/2 aspect-video overflow-hidden">
                  <img :src="project.image" :alt="project.altImage"
                    class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" />
                </div>

                <!-- Content -->
                <div class="lg:w-1/2 flex flex-col">
                  <CardContent class="flex flex-col flex-grow p-4 sm:p-6 lg:p-8">
                    <!-- Title -->
                    <h3 class="font-bold text-lg sm:text-xl mb-2">{{ project.title }}</h3>

                    <!-- Description -->
                    <p class="text-gray-400 text-sm sm:text-base mb-3 flex-grow leading-relaxed">
                      {{ project.description }}
                    </p>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      <Badge v-for="tag in project.tags" :key="tag" variant="secondary" class="text-xs">
                        {{ tag }}
                      </Badge>
                    </div>

                    <!-- Footer -->
                    <div>
                      <Button as="a" :href="project.githubLink" target="_blank" rel="noopener" class="w-full sm:w-auto">
                        <Github :size="16" class="mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Globe, Gamepad, Github } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import GradientBlurBackground from '../components/GradientBlurBackground.vue';
import CardHeader from '../components/ui/card/CardHeader.vue';
import Separator from '../components/ui/separator/Separator.vue';

const { t, tm } = useI18n();
</script>