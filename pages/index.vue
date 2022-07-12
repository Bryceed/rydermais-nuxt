<template>
    <Head>
        <Title>My App</Title>
        <Meta name="description" content="My app description"/>
    </Head>
    <NuxtLayout>
        <div>
            <h1>About</h1>
            <button @click="enableCustomLayout">Update layout</button>
        </div>
    </NuxtLayout>
</template>


<script setup>
    const route = useRoute()
    function enableCustomLayout() {
        route.meta.layout = false
    }
    definePageMeta({
        layout: "default",
        title: "About",
    });
</script>