<template>
    <div class="border-2 m-2 border-beige rounded-lg h-auto w-1/2">
        <div class="p-2 flex flex-wrap justify-around">
            <span>
                <label>Количество вершин: </label>
                <input class="w-9" type="number" min="2" v-model="vertexCount" />
            </span>
            <span>
                <label>Вершина А: </label>
                <input class="w-9" type="number" min="1" @input="onInput" v-model="vertexA" />
            </span>
            <span>
                <label>Вершина В: </label>
                <input class="w-9" type="number" min="1" @input="onInput" v-model="vertexB" />
            </span>
        </div>
        <div class="p-2">
            <div v-for="(_, i) in matrix">
                <div class="inline-block" v-for="(_, j) in matrix[i]">
                    <input class="w-9" @input="changeArrayValue" type="number" min="0" v-model="matrix[i][j]"
                        :data-id="i" :data-jd="j" />
                </div>
            </div>
        </div>
    </div>
    <div class="border-2 m-2 border-beige rounded-lg h-auto w-1/2"></div>
</template>


<script>
import { SendMatrix } from './api/BruteForceApi';

export default {
    data() {
        return {
            vertexCount: 0,
            vertexA: 0,
            vertexB: 0,
            matrix: []
        };
    },

    methods: {
        changeArrayValue(event) {
            let targetInput = event.target;
            let id = targetInput.dataset.id;
            let jd = targetInput.dataset.jd;

            this.matrix[id][jd] = targetInput.value;
            this.matrix[jd][id] = targetInput.value;
        },

        onInput(event) {
            if (event.target.value > this.vertexCount) {
                event.target.value = this.vertexCount;
            }
        }

    },

    watch: {
        vertexCount(newValue) {
            this.matrix = new Array(newValue);

            for (let i = 0; i < this.matrix.length; i++) {
                this.matrix[i] = new Array(newValue).fill(0);
            }
        },
    }
};
</script>
<style>
</style>
