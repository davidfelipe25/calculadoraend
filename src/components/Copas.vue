<template>
<div>
 <header>
    <h1>Calculadora</h1>
 </header>
    <section>	
	 	<input type="number" name="calc1" v-model.number="valor1">
	 	<input type="number" name="calc2" v-model.number="valor2">
	 	<input type="number" name="calc3" v-model.number="resultados">	
    </section>
    <section>
		 <button v-on:click="zerar">C</button>
		 <button v-on:click="calc('somar')">+</button >
		 <button v-on:click="calc('subtrair')">-</button>
		 <button v-on:click="calc('multiplicar')">X</button>
		 <button v-on:click="calc('dividir')">%</button >
	</section>
</div>	
</template>
<script>
export default {
  	name: 'Copas',
  	data() {
   		return{
   		 resultados:null,
   		 valor1:0,
   		 valor2:0,
  		}
 	},
 	methods:{
   		calc(operador){
   			if(operador === 'somar'){
   			 	this.resultados = this.valor1 + this.valor2 
   			} else if (operador==='subtrair'){
   			  	this.resultados = this.valor1 - this.valor2
   			}else if (operador==='multiplicar'){
   				this.resultados = this.valor1 * this.valor2
   			}else{
   				this.resultados = this.valor1 / this.valor2
   			}
		},
		zerar(){
			this.valor1=0
			this.valor2=0
			this.resultados=null
		}
	}
}
</script>
<style scoped>
	
</style>