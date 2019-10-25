<template>
    <div class="blog">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-center" id="descrição">
                    <h2>Algumas das ?? que<br>
                    <span>confiam no nosso trabalho</span></h2>
                    <p style="font-size: 1em !important;" class="my-1">Mais que uma simples área de clientes, na verdade, para cada uma das marcas abaixo há um serviço ou uma solução personalizada, pensadas detalhadamente e aplicadas com muito orgulho pela nossa equipe.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center" id="descriçãobottom">
                    Conheça nossos produtos
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">
                            
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
       name:'blog',
         data () {
            return {
                title:'Blog'
            }
        }
    }
</script>

<style scoped>
#descrição {
    padding: 100px 30%;
    background-color: #38013a;
    color: white;

}

#descrição span {
    color: #b11669 !important;
    font-size: 36px;
    font-weight: 600;
}

#descriçãobottom {
    background-color: #b11669 !important;
    padding: 40px;
    color: white;

}
 </style>