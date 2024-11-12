import Lang from "@/types/lang"

type Langs = {
    title: string,
    locale: Lang,
}

const langs : Langs[] = [
    {
        title: 'English',
        locale: 'en',
    },
    {
        title: 'العربية',
        locale: 'ar',
    },
    {
        title: 'Türkçe',
        locale: 'tr',
    },
]

export default langs