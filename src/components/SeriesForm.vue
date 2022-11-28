<template>
    <div>
        <label for="valueId">
            Asigna un valor para <b><i>n</i></b>
        </label>
        <input 
            v-model.trim="numberSerie" 
            :disabled="isInputDisabled" 
            type="text" 
            pattern="[0-9]*"         
            inputmode="numeric"
            aria-describedby="valueId" 
            placeholder="4" 
            required
        >
        <small v-if="errMsg">
            {{ errMsg }}
            <br>
        </small>

        <small id="helpId">
            * Entre mayor sea el valor de n mayor será el tiempo de ejecución
        </small>

        <button @click="this.disableButton(), $emit('executeSerie', parseInt(numberSerie))" :disabled="isButtonDisabled"
            type="button">
            Calcular serie >
        </button>
    </div>
</template>


<script>
export default {
    name: 'SeriesForm',
    props: {
        isInputDisabled: {
            type: Boolean,
            default: false,
            required: true
        },
    },
    data() {
        return {
            numberSerie: null,
            isButtonDisabled: true,
            errMsg: null
        }
    },
    watch: {
        isInputDisabled(value) {
            if (!value) {
                this.numberSerie = null
            }
        },
        numberSerie(value) {
            // general validations
            if (value == "") {
                this.errMsg = "El campo no puede estar vacio"
                this.disableButton()
            }
            else if (isNaN(value)) {
                this.errMsg = 'El valor debe ser un número'
                this.disableButton()
            }
            else if (value < 0) {
                this.errMsg = 'El valor debe ser mayor a 0'
                this.disableButton()
            }
            else if (value > 35) {
                this.errMsg = '*Para evitar un consumo excesivo de memoria el valor maximo es 35*'
                this.disableButton()
            }
            else if (value % 1 != 0) {
                this.errMsg = 'El valor debe ser un número entero'
                this.disableButton()
            }
            // all validations passed
            else {
                this.enableButton()
                this.errMsg = null;
            }
        }
    },
    methods: {
        disableButton() {
            this.isButtonDisabled = true;
        },
        enableButton() {
            this.isButtonDisabled = false;
        },
    }

}
</script>

<style scoped>

</style>