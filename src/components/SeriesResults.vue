<template>
    <div v-if="showResults">
        El resultado de la serie cuando <var> n = {{ result.numberSerie }} </var> es:
        <b> {{ result.result }} </b>
    </div>
</template>

<script>
export default {
    name: 'SeriesResults',
    props: {
        result: {
            type: Object,
            required: true
        },
        showResults: {
            type: Boolean,
            default: false,
            required: true
        }
    }

}
</script>

<style scoped>

</style>