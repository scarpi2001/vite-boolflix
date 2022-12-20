<script >
export default {
    name: "MovieLanguage",
}
</script>

<template>
    <div>
        <img v-if="details.original_language === 'en'" src="../../assets/img/gb.svg" alt="">
        <img v-else-if="details.original_language === 'it'" src="../../assets/img/it.svg" alt="">
        <img v-else-if="details.original_language === 'fr'" src="../../assets/img/fr.svg" alt="">
        <img v-else src="../../assets/img/unknown.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 40px;
}
</style>
