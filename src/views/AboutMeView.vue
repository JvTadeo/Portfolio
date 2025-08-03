<template>
  <div class="flex flex-col justify-center items-center w-full space-y-8 my-16">
    <!-- Profile -->
    <section
      class="relative w-full overflow-hidden flex flex-col lg:flex-row items-center outline-1  justify-center py-8 rounded-2xl sm:py-16 sm:gap-12">
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
        <section class="w-full flex flex-row flex-wrap justify-center items-center gap-2 mt-4">
          <Badge
            v-for="badge in useTechStackStore().badgeAboutMe"
            :key="badge"
            variant="secondary"
          >
            {{ badge }}
          </Badge>
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
    <!-- Professioanl Summary -->
    <Card class="relative overflow-hidden w-full mt-14 border-0 outline-1 bg-transparent text-zinc-50">
      <GradientBlurBackground />
      <div class="relative z-10flex flex-col w-full">
        <CardHeader class="flex flex-row w-full mb-4">
          <User />
          <p class="font-bold text-lg">{{ t('AboutPage.ProfessionalSection.title') }}</p>
        </CardHeader>
        <CardContent>
          <p class="text-justify">{{ t('AboutPage.ProfessionalSection.description') }}</p>
        </CardContent>
      </div>
    </Card>
    <!-- Education -->
    <Card class="relative overflow-hidden w-full border-0 outline-1 bg-transparent text-zinc-50">
      <GradientBlurBackground />
      <div class="relative z-10flex flex-col w-full">
        <CardHeader class="flex flex-row w-full mb-4">
          <GraduationCap />
          <p class="font-bold text-lg">{{ t('AboutPage.EducationSection.title') }}</p>
        </CardHeader>
        <CardContent>
          <section>
            <p class="font-semibold">{{ t('AboutPage.EducationSection.Degree.title') }}</p>
            <p class="text-sm">{{ t('AboutPage.EducationSection.Degree.institution') }}</p>
            <p class="text-sm text-neutral-500">{{ t('AboutPage.EducationSection.Degree.date') }}</p>
          </section>
        </CardContent>
      </div>
    </Card>
    <!-- Skills Technologies -->
    <Card class="relative overflow-hidden w-full border-0 outline-1 bg-transparent text-zinc-50">
      <GradientBlurBackground />
      <div class="relative z-10 flex flex-col w-full">
        <CardHeader class="flex flex-row w-full items-center mb-4 gap-2">
          <Code />
          <p class="font-bold text-lg">{{ t('AboutPage.TechnologiesSection.title') }}</p>
        </CardHeader>
        <CardContent class="space-y-5">
          <!-- Languages -->
          <section class="flex flex-col w-full ">
            <div class="flex flex-row w-full mb-2 items-center gap-2">
              <Code />
              <p class="font-bold text-md">{{ t('AboutPage.TechnologiesSection.languages') }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">HTML</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">C#</Badge>
              <Badge variant="secondary">ADVPL</Badge>
            </div>
          </section>
          <!-- Frameworks -->
          <section class="flex flex-col w-full">
            <div class="flex flex-row w-full mb-2 items-center gap-2">
              <Code />
              <p class="font-bold text-md">{{ t('AboutPage.TechnologiesSection.frameworks') }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Vue.js</Badge>
              <Badge variant="secondary">Quasar</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">Shadcn/UI</Badge>
              <Badge variant="secondary">Express</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Pinia</Badge>
              <Badge variant="secondary">Vite</Badge>
            </div>
          </section>
          <!-- Back-end & Infrastructure -->
          <section class="flex flex-col w-full">
            <div class="flex flex-row w-full mb-2 items-center gap-2">
              <Code />
              <p class="font-bold text-md">{{ t('AboutPage.TechnologiesSection.backend') }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Express</Badge>
              <Badge variant="secondary">Redis</Badge>
              <Badge variant="secondary">RabbitMQ</Badge>
              <Badge variant="secondary">WebSocket</Badge>
              <Badge variant="secondary">MySQL</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
            </div>
          </section>
          <!-- Tools & Platforms -->
          <section class="flex flex-col w-full">
            <div class="flex flex-row w-full mb-2 items-center gap-2">
              <Code />
              <p class="font-bold text-md">{{ t('AboutPage.TechnologiesSection.tools') }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">GitHub</Badge>
              <Badge variant="secondary">Postman</Badge>
              <Badge variant="secondary">VS Code</Badge>
              <Badge variant="secondary">Figma</Badge>
            </div>
          </section>
        </CardContent>
      </div>
    </Card>
    <!-- Experience -->
    <Card class="relative overflow-hidden w-full border-0 outline-1 bg-transparent text-zinc-50">
      <GradientBlurBackground />
      <div class="relative z-10 flex flex-col w-full">
        <CardHeader class="flex flex-row w-full items-center mb-4 gap-2">
          <Building2 />
          <p class="font-bold text-lg">{{ t('AboutPage.ExperienceSection.title') }}</p>
        </CardHeader>
        <CardContent class="w-full">
          <section class="w-full space-y-1">
            <!-- Role and date -->
            <div class="flex flex-row justify-between items-center w-full">
              <p class="font-semibold text-base">{{ t('AboutPage.ExperienceSection.HTMEletronica.jobTitle') }}</p>
              <span class="text-sm text-neutral-400">{{ t('AboutPage.ExperienceSection.HTMEletronica.date') }}</span>
            </div>

            <!-- Company and location -->
            <p class="text-sm font-semibold text-neutral-400">{{
              t('AboutPage.ExperienceSection.HTMEletronica.companyTitle') }}</p>
            <p class="text-sm text-neutral-500">{{ t('AboutPage.ExperienceSection.HTMEletronica.location') }}</p>

            <!-- Responsibilities -->
            <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-neutral-400">
              <li v-for="experience in tm('AboutPage.ExperienceSection.HTMEletronica.responsibilities')"
                :key="experience">
                {{ experience }}
              </li>
            </ul>
          </section>
        </CardContent>
      </div>
    </Card>
    <!-- Courses / -->
    <Card class="relative overflow-hidden w-full border-0 outline-1 bg-transparent text-zinc-50">
      <GradientBlurBackground />
      <div class="relative z-10 flex flex-col w-full">
        <CardHeader class="flex flex-row w-full items-center mb-4 gap-2">
          <GraduationCap />
          <p class="font-bold text-lg">{{ t('AboutPage.CourseSection.webTitle') }}</p>
        </CardHeader>
        <!-- Certifications -->
        <CardContent class="space-y-3 text-sm text-neutral-500">
          <!-- General Web & Mobile -->
          <div v-for="certificate in tm('AboutPage.CourseSection.courses')" :key="certificate">
            <a :href="certificate.certificateLink" target="_blank" class="underline hover:text-stone-600">
              {{ certificate.title }}
            </a>
            <p>{{ certificate.institutionAndDate }}</p>
          </div>
          <!-- Game Dev -->
          <Separator />
          <p class="font-bold text-md text-neutral-400">{{ t('AboutPage.CourseSection.gameDevTitle') }}</p>
          <div v-for="certificate in tm('AboutPage.CourseSection.gameDevCourses')" :key="certificate">
            <a :href="certificate.certificateLink" target="_blank" class="underline hover:text-stone-600">
              {{ certificate.title }}
            </a>
            <p>{{ certificate.institutionAndDate }}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarImage } from '../components/ui/avatar';
import { User, GraduationCap, Code, Building2 } from 'lucide-vue-next';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useI18n } from 'vue-i18n';
import { useTechStackStore } from '../store/techStackStore';
import GradientBlurBackground from '../components/GradientBlurBackground.vue';

const { t, tm } = useI18n();

</script>