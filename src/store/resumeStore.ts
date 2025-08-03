import { defineStore } from 'pinia'

export const useResumeStore = defineStore('resume', {
    state: () => ({
        resumes: [
            {id: 'pt-br', link: 'https://drive.google.com/file/d/14dqn2BZVeeL3yd-JbE2b5CapOwERPXBF/view?usp=sharing'},
            {id: 'us', link: 'https://drive.google.com/file/d/11aGmCMBTa-z64LoXrjzkrVEdyURROws7/view?usp=sharing'}
        ]
    }),
    actions: {
        getCurrentResume() : string {
            const id = localStorage.getItem('language') || 'us'
            return this.resumes.find(resume => resume.id.includes(id))?.link || ''
        }
    }
})