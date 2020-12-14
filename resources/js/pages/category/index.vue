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
                                <tr>
                                    <td>1</td>
                                    <td>morshed</td>
                                    <td>
                                        <a href="#" class="btn btn-primary btn-sm">edit</a>
                                        <a href="#" class="btn btn-danger btn-sm">delete</a>
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
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
