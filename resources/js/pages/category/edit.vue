<template>
  <div class="container">
      <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-head">
                    <h5>Edit Category</h5>
                    <a href="#">back to categories</a>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 offset-3">
                            <form @submit.prevent="UpdateCategory">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input v-model="categoryForm.name" type="text" name="name"
                                    class="form-control" :class="{ 'is-invalid': categoryForm.errors.has('name') }">
                                    <has-error :form="categoryForm" field="name"></has-error>
                                </div>
                                <div class="from-group">
                                    <button type="submit" class="btn btn-success">Update Category</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import {Form} from 'vform'
export default {
    data(){
        return{
           categoryForm: new Form({
                name: ''
            })
        }

    },
    methods:{
        UpdateCategory(){
            let id  = this.$route.params.id
            this.categoryForm.put(`/api/category/${id}`)
            .then(()=> {
                this.$toast.success({
                    title: 'success',
                    message: 'updated successfully'
                });
            })
        },
        loadCategory(){
            let id  = this.$route.params.id
            axios.get(`/api/category/${id}/edit`).then(response => {
                this.categoryForm.name = response.data.name
            })
        }
    }, mounted(){
        this.loadCategory()
    }
}
</script>

<style>

</style>
