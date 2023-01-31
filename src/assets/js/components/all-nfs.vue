<template>


    <div id="all-nfs">
        <h1>Todas Nf Sefaz</h1>

        <AllFilters></AllFilters>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Chave Acesso</td>
                <td>Data Emissão</td>
                <td>Situação</td>
                <td>Cliente</td>
                <td>Produto</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="product in products">
                    <td>{{ product.ChaveAcesso }}</td>
                    <td>{{ product.DataEmissao }}</td>
                    <td>{{ product.Situacao }}</td>
                    <td>{{ product.NomeCliente }}</td>
                    <td>{{ product.NomeProduto }}</td>

                 
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import AllFilters from './all-filters.vue';

    export default{
    data() {
        return {
            products: [],
            originalProducts: [],
            buscarNotaFiscal: "",
        };
    },
    created: function () {
        this.fetchProductData();
    },
    methods: {
        fetchProductData: function () {
            this.$http.get("url_aplicacao").then((response) => {
                this.products = response.body;
                this.originalProducts = this.products;
            }, (response) => {
            });
        },
        searchProducts: function () {
            if (this.buscarNotaFiscal == "") {
                this.products = this.originalProducts;
                return;
            }
            var searchedProducts = [];
            for (var i = 0; i < this.originalProducts.length; i++) {
                var productName = this.originalProducts[i]["name"].toLowerCase();
                if (productName.indexOf(this.buscarNotaFiscal.toLowerCase()) >= 0) {
                    searchedProducts.push(this.originalProducts[i]);
                }
            }
            this.products = searchedProducts;
        }
    },
    components: { AllFilters }
}
</script>
