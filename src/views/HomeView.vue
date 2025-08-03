<template>
  <div class="w-full space-y-20 my-16">
    <!-- Profile Section (Really Small) -->
    <section
      class="relative overflow-hidden outline-1  flex flex-col lg:flex-row items-center justify-center py-8 rounded-2xl sm:py-16 sm:gap-12">
      <GradientBlurBackground />
      <!-- Content (esquerda no desktop) -->
      <div class="relative z-10 flex flex-col items-center lg:items-start gap-2">
        <Avatar class="w-48 h-48 mb-4 lg:hidden">
          <AvatarImage src="src/assets/images/PersonalPhoto.webp" alt="@PersonalPhoto" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p class="font-bold text-xl lg:text-2xl text-center lg:text-left">{{ t('HomePage.ProfileSection.introduction')
          }}</p>
        <p class="text-neutral-500 text-center lg:text-left lg:text-lg">{{ t('HomePage.ProfileSection.description') }}
        </p>
        <section class="w-full flex flex-row flex-wrap justify-center lg:justify-start items-center gap-2">
          <Button as="a" href="https://www.linkedin.com/in/jvtadeo/" target="_blank" variant="secondary">
            <Linkedin :size="16" />
            {{ t('HomePage.ProfileSection.linkedinButton') }}
          </Button>
          <Button
            as="a"
            :href=useResumeStore().getCurrentResume()
            target="_blank"
            variant="secondary"
          >
            {{ t('HomePage.ProfileSection.resumeButton') }}
            <MoveDown :size="16" />
          </Button>
        </section>
      </div>
      <!-- Avatar (direita no desktop, escondido no mobile) -->
      <div class="relative z-10 lg:flex-shrink-0 hidden lg:block">
        <Avatar class="w-48 h-48 lg:w-56 lg:h-56">
          <AvatarImage src="src/assets/images/PersonalPhoto.webp" alt="@PersonalPhoto"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </section>

    <!-- About Me -->
    <div class="relative overflow-hidden outline-1 rounded-2xl w-full px-4 py-12 flex flex-col items-center">
      <!-- Main Title -->
      <GradientBlurBackground />
      <div class="relative z-10 w-full flex flex-col items-center">
        <h1 class="text-4xl font-bold text-center">{{ t('HomePage.ProfessionallyIntroducedSection.title') }}</h1>
        <p class="text-lg text-neutral-500 mt-2 sm:mt-6  text-center max-w-xl">
          {{t('HomePage.ProfessionallyIntroducedSection.description') }}
        </p>

        <!-- Cards Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 w-full max-w-6xl sm:px-0">
          <!-- About -->
          <div
            class="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300">
            <div class="flex items-center gap-2 mb-3 sm:mb-4">
              <span class="text-xl sm:text-2xl">👨‍💻</span>
              <p class="font-bold text-base sm:text-lg">Background</p>
            </div>
            <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {{ t('HomePage.ProfessionallyIntroducedSection.backgroundDescription') }}
            </p>
          </div>

          <!-- Tech Stack -->
          <div
            class="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300">
            <div class="flex items-center gap-2 mb-3 sm:mb-4">
              <span class="text-xl sm:text-2xl">🛠️</span>
              <p class="font-bold text-base sm:text-lg">{{ t('HomePage.ProfessionallyIntroducedSection.techStackTitle')
                }}</p>
            </div>

            <!-- Tech Categories -->
            <div class="space-y-3">
              <!-- Frontend -->
              <div>
                <p class="text-xs font-medium text-neutral-400 mb-1">Frontend</p>
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span
                    v-for="stack in useTechStackStore().frontEndStack"
                    :key="stack.name"
                    :class="stack.color"
                    class="bg-gradient-to-r text-white text-xs px-2 py-1 rounded-md font-medium"
                  >
                    {{ stack.name }}
                  </span>                  
                </div>
              </div>
              <!-- Backend -->
              <div>
                <p class="text-xs font-medium text-neutral-400 mb-1">Backend</p>
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span
                    v-for="stack in useTechStackStore().backEndStack"
                    :key="stack.name"
                    :class="stack.color"
                    class="bg-gradient-to-r text-white text-xs px-2 py-1 rounded-md font-medium"
                  >
                    {{ stack.name }}
                  </span>                  
                </div>
              </div>
              <!-- Tools -->
              <div>
                <p class="text-xs font-medium text-neutral-400 mb-1">Tools & Others</p>
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span
                    v-for="stack in useTechStackStore().toolsAndOtherStack"
                    :key="stack.name"
                    :class="stack.color"
                    class="bg-gradient-to-r text-white text-xs px-2 py-1 rounded-md font-medium"
                  >
                    {{ stack.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Button -->
          <div class="mt-10 self-start cursor-pointer">
            <a @click="$router.push('/about')"
              class="bg-white text-black font-medium px-6 py-2 rounded hover:bg-gray-200 transition">
              {{ t('HomePage.ProfessionallyIntroducedSection.learnMoreAboutMeButton') }} →
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div class="relative verflow-hidden outline-1 rounded-2xl w-full px-4 py-12 flex flex-col items-center">
      <GradientBlurBackground />
      <div class="relative z-10">
        <!-- Main Title -->
        <div class="rounded-lg p-6 mb-4">
          <h2 class="text-3xl font-bold text-center mb-2">{{ t('HomePage.ProjectsSection.title') }}</h2>
          <p class="text-center text-gray-400">
            {{ t('HomePage.ProjectsSection.description') }}
          </p>
        </div>
        <!-- Projects -->
        <section class="space-y-8">
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
        </section>
        <div class="mt-10 cursor-pointer">
          <a @click="$router.push('/projects')"
            class="bg-white text-black font-medium px-6 py-2 rounded hover:bg-gray-200 transition">
            {{ t('HomePage.ProjectsSection.viewAllProjectsButton') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Github, Linkedin, MoveDown } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import { useResumeStore } from '../store/resumeStore';
import { useTechStackStore } from '../store/techStackStore';
import GradientBlurBackground from '../components/GradientBlurBackground.vue';

const { t, tm } = useI18n();

</script>