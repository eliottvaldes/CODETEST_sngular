<template>
    <div v-if="showResults" class="fade-in">
        <div class="row justify-content-center">
            <div class="col-11">
                <div class="card shadow p-3 mb-4 bg-body rounde">  
                    <div class="text-center">
                        <p>
                            El resultado de la serie cuando <var> n = {{result.numberSerie}} </var> es:
                        </p>
                        <h5 class="my-3">
                            <b> {{result.result}} </b>
                        </h5>
                    </div>                 
                </div>
            </div>
        </div>
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