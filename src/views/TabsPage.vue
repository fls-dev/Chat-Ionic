<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button @click="presentActionSheet">
          <ion-icon :icon="addCircleOutline" />
          <ion-label>Add chat</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="chatbubblesOutline" />
          <ion-label>Chats</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="settingsOutline" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButton, actionSheetController } from '@ionic/vue';
import { chatbubblesOutline, settingsOutline, addCircleOutline, close, personOutline, peopleOutline} from 'ionicons/icons';
export default defineComponent ({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonButton, actionSheetController},
  setup() {
    return {
      chatbubblesOutline,
      settingsOutline,
      addCircleOutline
    }
  },
  methods: {
    async presentActionSheet() {
      const actionSheet = await actionSheetController
          .create({
            header: 'Выберите тип чата',
            cssClass: 'my-custom-class',
            buttons: [
              {
                text: 'Групповой чат',
                icon: peopleOutline,
                data: 10,
                handler: () => {
                  console.log('Share clicked')
                },
              },
              {
                text: 'Одиночный чат',
                icon: personOutline,
                handler: () => {
                  console.log('Favorite clicked')
                },
              },
              {
                text: 'Отменить',
                icon: close,
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked')
                },
              },
            ],
          });
      await actionSheet.present();

      const { role, data } = await actionSheet.onDidDismiss();
    },
  },
});
</script>
