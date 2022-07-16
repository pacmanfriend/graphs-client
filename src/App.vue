<template>
    <div class="">
        <div class="p-2">
            <label class="text-lg">Количество вершин: </label>
            <input type="number" min="2" v-model="vertexCount" />
        </div>
        <div class="p-2">Graph matrix</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vertexCount: 2,
        };
    },
};
</script>
<style scoped>
input {
    width: 50px;
}
</style>
