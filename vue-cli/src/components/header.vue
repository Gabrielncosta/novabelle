<template>
    <div class="bs-docs-section clearfix">
        <div class="row">
          <div class="col-lg-12">
            <div class="bs-component">
              <nav class="navbar navbar-expand-lg navbar-dark bg-light">
              <div class="col-6 col-md-4">
                <img src="../assets/novabelle.png" class="img-fluid" alt="" style="width: 300px;">
              </div>

            <button class="navbar-toggler" style="background-color: #ccc !important;" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
              <div class="col-sm-6 col-sm-offset-1 col-md-offset-0 col-md-9 col-xs-6">

                <div class="collapse navbar-collapse" id="navbarColor02">
                  <ul class="navbar-nav">
                    
                      <router-link class="nav-link" tag="li" active-class="active" exact to="/"><a>Home</a></router-link>
                    
                    
                      <router-link class="nav-link" to="/sobre-nos"  tag="li" active-class="active" exact><a>QUEM SOMOS</a></router-link>
             
    
                      <router-link class="nav-link" to="/produtos"  tag="li" active-class="active" exact><a>Produtos</a></router-link>


                      <router-link class="nav-link" to="/contato"  tag="li" active-class="active" exact><a>Contato</a></router-link>
                  </ul>
                </div>
              </div>
              </nav>
            </div>
          </div>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar-nav a {
  font-size: 1.3em;
  color:rgba(0, 0, 0, 0.55);
 text-decoration: none;
  text-transform: uppercase;
}

</style>