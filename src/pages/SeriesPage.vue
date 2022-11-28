<template>
    <div>

        <SeriesForm 
            :isInputDisabled="isInputDisabled" 
            @execute-serie="solveSerie" 
        />
        <br><br>

        <SeriesResults 
            :showResults="showResults" 
            :result="serieResult" 
        />

        <div v-if="tryAgain">
            <button type="button" @click="resetApp">
                Intentar de nuevo
            </button>
        </div>

    </div>
</template>

<script>

import Series from '@/classes/Serie.class'

import SeriesForm from '@/components/SeriesForm'
import SeriesResults from '@/components/SeriesResults'

export default {
    name: 'SeriesPage',
    components: {
        SeriesForm,
        SeriesResults
    },
    data() {
        return {
            showError: false,
            isInputDisabled: false,
            showResults: false,
            serieResult: {},
            tryAgain: false,
        }
    },
    computed: {
        serieInstance() {
            return new Series();
        }
    },
    methods: {
        solveSerie(numberSerie) {
            try {

                this.serieInstance.setNumber = numberSerie

                this.serieResult = {
                    result: this.serieInstance.getSerie(),
                    numberSerie
                };
                
                this.showResults = true

                this.isInputDisabled = true
                this.tryAgain = true

            } catch (error) {
                this.createErrorAlert(error)
            }
        },
        resetApp() {
            this.tryAgain = false
            this.showResults = false
            this.serieResult = {}
            this.isInputDisabled = false
        },
        createErrorAlert(error) {
            alert(error)
        }

    },

}
</script>

<style scoped>

</style>