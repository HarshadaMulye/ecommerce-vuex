<template>
  <div>
     
      <nav class="navbar navbar-expand navbar-dark bg-dark">
          <div class="container">
          <div class="nav navbar-nav">
             
              <router-link to="/" class="nav-tem nav-link active">Home</router-link>
              <a class="nav-item nav-link" href="#">Product</a>
          </div>
          <div>
          <div class="dropdown open">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                    {{cartItemCount}} Cart  </button>
                    <div @click='$event.stopPropagation()'>
                        <Minicart/>
                    </div>
              
          </div>
          </div>
          </div>
      </nav>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Minicart from './Minicart.vue'
export default {
components:{
    Minicart

},
computed:
{
...mapGetters(["cartItemCount"])

/*cartItemCount(){
    return this.$store.getters.cartItemCount
}*/
}
}

</script>

<style>

</style>