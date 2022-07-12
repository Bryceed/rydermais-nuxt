import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    meta: {
        title: 'RyderMais',
    },
    modules: [
        '@nuxt/content',
        '@nuxtjs/color-mode'
    ],
    content: {
        base: '/api/content'
    },
    markdown: {
        tags: {
            marquee: 'MyCustomParagraph'
        },
        remarkPlugins: {
            'remark-emoji': {
                emoticon: true
            },
            'remark-gfm': false,
            'remark-oembed': {
                providers: {
                    youtube: {
                        endpoint: 'https://www.youtube.com/oembed',
                        embeddable: true,
                        maxWidth: 800
                    },
                    vimeo: {
                        endpoint: 'https://vimeo.com/api/oembed.json',
                        embeddable: true,
                        maxWidth: 800
                    },
                    twitter: {
                        endpoint: 'https://publish.twitter.com/oembed?',
                        embeddable: true,
                        maxWidth: 800
                    }
                }
            }
        },
        rehypePlugins: [
            'rehype-figure'
        ]
    },
})
