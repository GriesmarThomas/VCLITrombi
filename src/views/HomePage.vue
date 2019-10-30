<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ WelcomeMessage }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class HomePage extends Vue {
  WelcomeMessage = 'Ceci est le texte de bienvenue, contenu dans la variable WelcomeMessage.';


  // components: {
  //   HomePage,
  // },
}
</script>
