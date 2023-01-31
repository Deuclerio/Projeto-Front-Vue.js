<template>
    <div class="form-row">
        <div class="form-group col-md-2">
            <label for="inputEmail4">Data Início Emissão</label>
            <input type="Data Início Emissão" class="form-control" id="inputEmail4" placeholder="Data Início Emissão">
        </div>
        <div class="form-group col-md-2">
            <label for="inputPassword4">Data Final Emissão</label>
            <input type="Data Final Emissão" class="form-control" id="inputPassword4" placeholder="Data Final Emissão">
        </div>

        <div class="form-group col-md-2">
            <label for="inputPassword4">Cpf-Cnpj</label>
            <input type="Cpf-Cnpj" class="form-control" id="inputPassword4" placeholder="Cpf-Cnpj">
        </div>

        <div class="form-group col-md-3">
            <label for="inputPassword4">Nome Emitente</label>
            <input type="Nome Emitente" class="form-control" id="inputPassword4" placeholder="Nome Emitente">
        </div>

        <div class="form-group col-md-3">
            <label for="inputPassword4">Nome Produto</label>
            <input type="Nome Produto" class="form-control" id="inputPassword4" placeholder="Nome Produto">
        </div>
        <div class="form-group col-md-5">
            <button type="submit" class="btn btn-primary">Pesquisar</button>
        </div>
     
    </div>



</template>

<script>
export default {
    name: 'BuscarDados',
    data() {
        return {
            termo: '',
        }
    },
}
</script>

<style scoped>

</style>