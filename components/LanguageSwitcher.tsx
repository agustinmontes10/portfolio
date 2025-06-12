'use client'
import '@/styles/languageSwitcher.scss'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const [checked, setChecked] = useState(i18n.language === 'en')

    useEffect(() => {
        setChecked(i18n.language === 'en')
    }, [i18n.language])

    const changeLanguage = (lng: 'es' | 'en') => {
        i18n.changeLanguage(lng)
    }

    const handleSelect = (lng: 'es' | 'en') => {
        if ((lng === 'en' && !checked) || (lng === 'es' && checked)) {
            changeLanguage(lng)
            setChecked(lng === 'en')
        }
    }

    return (
        <div className='flex gap-2 items-center'>
            <div className={`language-switch__flags ${i18n.language === 'en' ? 'bg-en' : 'bg-es'} `}>
                <div
                    className={`flag-bg flag-bg-es flag-selectable ${!checked ? 'active' : 'inactive'}`}
                    onClick={() => handleSelect('es')}
                    tabIndex={0}
                    role="button"
                    aria-label="Seleccionar Español"
                >
                    <Image src="/assets/iconSpanish.png" alt="Español" width={24} height={24} />
                </div>
                <div
                    className={`flag-bg flag-bg-en flag-selectable ${checked ? 'active' : 'inactive'}`}
                    onClick={() => handleSelect('en')}
                    tabIndex={0}
                    role="button"
                    aria-label="Select English"
                >
                    <Image src="/assets/iconEnglish.png" alt="English" width={24} height={24} />
                </div>
            </div>
        </div>
    )
}