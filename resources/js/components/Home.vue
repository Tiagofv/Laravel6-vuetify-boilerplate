<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>vix</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <Codirc></Codirc> 
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text ">vix {{new Date().getFullYear()}}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Codirc from "./codirc/Codirc";
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    components: {
        Codirc,
    },
  }
</script>