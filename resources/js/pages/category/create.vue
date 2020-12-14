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
                                    <input type="text" v-model="categoryName" class="form-control" placeholder="category name">
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
export default {
    data(){
        return{
            categoryName: ''
        }

    },
    methods:{
        CreateCategory(){
            //console.log('form submitted')
            //let obj = this
            let category = {
                name: this.categoryName
            };
            axios.post('/api/category',category).then(response => {
                console.log(response)
            });
        }
    }
}
</script>

<style>

</style>
