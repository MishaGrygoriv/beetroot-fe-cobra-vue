<template>
  <div class="home">
    <a-card hoverable style="width: 240px">
     <img
      slot="cover"
      alt=""
      :src="randomCocktail.strDrinkThumb"
     />
     <a-card-meta :title="randomCocktail.strDrink">
      <template slot="description">
       {{ randomCocktail.strInstructions }}
      </template>
    </a-card-meta>
  </a-card>
  </div>
</template>

<script>
import {cocktailsUrls} from '../http';

export default {
  name: 'Home',
  data() {
    return {
      randomCocktail: [],
    }
  },
  methods: {
    async getRandomCocktail() {
      try {
    const res = await fetch(cocktailsUrls.random);
    const parsedRes = await res.json();
    return parsedRes;
  } catch (error) {
console.error(error);
  }
  },
},
async created() {
  const data = await this.getRandomCocktail();
  this.randomCocktail = data.drinks[0];
}
};
</script>
<style lang="scss">

</style>
