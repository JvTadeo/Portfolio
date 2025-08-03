import { defineStore } from "pinia";

export const useLanguageStore = defineStore('language', {
    state: () => ({
        languageSelected: {
            code: 'us',
            label: 'English'
        } as { code: string, label: string },
        languageList: [
            { code: 'us', label: 'English' },
            { code: 'br', label: 'Português' }
        ] as Array<{ code: string, label: string }>
    }),
    actions: {
        changeLanguage(code: string) {
            this.languageSelected = this.languageList.find(l => l.code === code) || this.languageSelected
            // Save on local storage
            localStorage.setItem('language', code)
        },        
    }
});