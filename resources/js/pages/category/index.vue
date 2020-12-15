<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-betwen align-items-center">
                        <h5>Product Categories</h5>
                        <router-link :to="{name:'create-category'}" class="btn btn-primary btn-sm">+ category</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Sl.</th>
                                    <th>Name</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="category in categories" :key="category.id">
                                    <td>{{category.id}}</td>
                                    <td>{{category.name}}</td>
                                    <td>
                                        <router-link :to="{name: 'edit-category', params:{id:category.id}}" class="btn btn-primary btn-sm">edit</router-link>
                                        <a @click="DeleteCategory(category.id)" href="#" class="btn btn-danger btn-sm">delete</a>
                                        </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                categories:[]
            }
        },
        methods:{
            loadCategories(){
                axios.get('/api/category').then(response=>{
                    //console.log(response);
                    this.categories = response.data;
                })
            },
            DeleteCategory(id){
                axios.delete(`/api/category/${id}`).then(response=>{
                    this.$toast.success({
                            title: 'success',
                            message: 'updated successfully'
                        });
                    this.loadCategories();
                })
            }
        },
        mounted() {
            this.loadCategories()
        }
    }
</script>
