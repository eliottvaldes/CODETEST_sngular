<template>
    <div class="container">

        <nav class="navbar fixed-top navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Eliot Valdes - Code Test
                </a>
            </div>
        </nav>

        <div class="row">
            <div class="col-12">
                <h1 class="heading-page">
                    Reto Series
                </h1>
            </div>
        </div>

        <div id="errorAlert"></div>

        <div class="row justify-content-center">
            <div class="col-11">
                <div class="card p-4 rounded" id="container-components">
                    <div class="row">
                        <div class="col-12">
                            <SeriesForm 
                                :isInputDisabled="isInputDisabled" 
                                @execute-serie="solveSerie" 
                            />

                            <br><br>

                            <SeriesResults 
                                :showResults="showResults" 
                                :result="serieResult" 
                            />
                        </div>
                        <div v-if="tryAgain" class="col-12">
                            <button type="button" class="try-again" @click="resetApp">
                                Intentar de nuevo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
h1 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
    margin-top: 90px;
    text-align: center;
}
button.try-again{
    float: right;    
    margin-top: 25px;
}

#container-components{
    border: 1px solid #f7b334;
    /* set a shadow */
    box-shadow: 0 0 7px #f7b334;
}
</style>