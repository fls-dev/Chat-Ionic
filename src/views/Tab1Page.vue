<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Chats</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Chats</ion-title>
        </ion-toolbar>
      </ion-header>
      <ChatsList />
    </ion-content>
  </ion-page>
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ChatsList from '@/components/ChatsList.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { ChatsList, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
});
</script>
