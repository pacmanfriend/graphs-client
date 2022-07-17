<template>
    <div class="border-2 m-2 border-beige rounded-lg h-auto w-2/3">
        <div class="p-2">
            <label>Количество вершин: </label>
            <input class="w-9" type="number" min="2" v-model="vertexCount" />
        </div>
        <div class="p-2">
            <div>{{ matrix }}</div>
        </div>
    </div>
    <div class="border-2 m-2 border-beige rounded-lg h-auto w-1/3">

    </div>
</template>

<script>
export default {
    data() {
        return {
            vertexCount: 2,
        };
    },
    computed: {
        matrix() {
            let m = new Array(this.vertexCount);

            for (let i = 0; i < m.length; i++) {
                m[i] = new Array(this.vertexCount).fill(0);
            }

            return m;
        }
    }
};
</script>
<style>
</style>
