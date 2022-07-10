<template>
  <ion-page>
<ion-header>
  <ion-toolbar>
    <ion-title>Chats</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content  class="ion-padding" :fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="small">Chats</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-item-sliding>
    <ion-item @click="openChat()">
      <ion-avatar slot="start">
        <img src="/assets/icon/mA.jpeg">
      </ion-avatar>
      <ion-label>
        Максим Разбицкий
        <p>Последнее собщение</p>
      </ion-label>
      <div class="last-data">2022-06-29 14:30:20</div>
    </ion-item>


    <ion-item-options side="start">
      <ion-item-option color="primary">Edit</ion-item-option>
    </ion-item-options>

    <ion-item-options side="end">
      <ion-item-option color="danger">Delete</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-content>
</ion-page>
  </template>



<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonLabel, IonPage, IonTitle, IonToolbar, IonAvatar
} from "@ionic/vue";

export default defineComponent({
  components: {IonContent, IonLabel, IonHeader, IonToolbar, IonTitle, IonPage, IonAvatar},
  name: 'ChatsList',
  methods:{
    openChat(){
      // this.$router.push({path: '/tabs/message'})
      this.$router.push ({path: '/tab1/message', replace: true})

      // this.router.go('/tabs/message')
    }
  }
});
</script>

<style scoped>
.ion-item-sliding{position: relative;}
.tabs-link{text-decoration: none}
.last-data{
  position: absolute;
  font-size: 9px;
  top: 0; right: 0;
}
</style>
