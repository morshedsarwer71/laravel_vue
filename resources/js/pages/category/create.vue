<template>
  <div class="container">
      <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-head">
                    <h5>Create Category</h5>
                    <a href="#">back to categories</a>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 offset-3">
                            <form @submit.prevent="CreateCategory">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input v-model="categoryForm.name" type="text" name="name"
                                    class="form-control" :class="{ 'is-invalid': categoryForm.errors.has('name') }">
                                    <has-error :form="categoryForm" field="name"></has-error>
                                </div>
                                <div class="from-group">
                                    <button type="submit" class="btn btn-success">Create Category</button>
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
        CreateCategory(){
            //console.log('form submitted')
            //let obj = this
            // let category = {
            //     name: this.categoryName
            // };
            // axios.post('/api/category',category).then(response => {
            //     console.log(response.data[1]['name'])
            // });

            this.categoryForm.post('/api/category')
            .then(({data})=> {
                this.categoryForm.name= ''
                this.$toast.success({
                    title: 'success',
                    message: 'added successfully'
                });

            })
        }
    }
}
</script>

<style>

</style>
