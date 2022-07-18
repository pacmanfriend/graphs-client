<template>
    <div class="border-2 m-2 border-beige rounded-lg h-auto w-1/2">
        <div class="p-2">
            <label>Количество вершин: </label>
            <input class="w-9" type="number" min="2" v-model="vertexCount" />
        </div>
        <div class="p-2">
            <div v-for="(_, i) in matrix">
                <div class="inline-block" v-for="(_, j) in matrix[i]">
                    <input @input="changeArrayValue" class="w-9" type="number" min="0" v-model="matrix[i][j]" />
                </div>
            </div>
        </div>
    </div>
    <div class="border-2 m-2 border-beige rounded-lg h-auto w-1/2"></div>
</template>

/**

 */

<script>
import { SendMatrix } from './api/BruteForceApi';

export default {
    data() {
        return {
            vertexCount: 2,
            matrix: []
        };
    },
    methods: {
        changeArrayValue(event) {
            console.log(event.target.value);
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
