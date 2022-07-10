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
    <ion-item>
    <ion-avatar slot="start">
      <img src="/assets/icon/mA.jpeg">
    </ion-avatar>
    <ion-label>
     Testov
      <p>Последнее собщение</p>
    </ion-label>
    <div class="last-data">2022-06-29 14:30:20</div>
    </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonButton,
  actionSheetController,
  IonContent
} from '@ionic/vue';

export default defineComponent({
  components: { IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonButton, actionSheetController},
  name: 'MessegesChatList',
  methods:{

  }
});
</script>

<style scoped>


</style>
