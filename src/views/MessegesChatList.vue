<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{chatName}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content  class="ion-padding" :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="small">{{ chatName }}</ion-title>
        </ion-toolbar>
      </ion-header>

        <ion-item v-for="mess in chats.messages" lines="full" class="el-chat">
          <ion-label class="elem-list">
            {{ mess.name }} 43
            <p>{{ mess.message.text.slice(0, 90) }}</p>
          </ion-label>
          <div class="last-data">{{mess.data}}</div>
        </ion-item>

      <!-- Textarea in an item with a placeholder -->
      <ion-item>
        <ion-textarea placeholder="Enter message..."></ion-textarea>
      </ion-item>

    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import '@/theme/chatList.css';
import {
  IonContent,
  IonHeader,
  IonLabel, IonPage, IonTitle, IonToolbar, IonAvatar, IonIcon, IonTextarea
} from "@ionic/vue";

export default defineComponent({
  components: {IonContent, IonLabel, IonHeader, IonToolbar, IonTitle,IonIcon, IonPage, IonAvatar, IonTextarea},
  name: 'MessegesChatList',

  data() {
    return {
      chatName: this.$route.params.id,
      chats: {
        "chats": [
          {
            "id": "1",
            "group": true,
            "count":11,
            "author_id": "1",
            "avatar": "assets/icon/meeting.png",
            "nameChat": "Групповой чат",
            "dataLastMessage": "2022-06-29 14:30:20",
            "lastMessage": "Привет групповой чат Привет групповой чат Привет групповой чат Привет групповой чат Привет"
          },
          {
            "id": "2",
            "group": false,
            "count":0,
            "author_id": "1",
            "avatar": "assets/icon/mA.jpeg",
            "nameChat": "Максим Разбицкий",
            "dataLastMessage": "2022-05-30 14:30:20",
            "lastMessage": "Привет чат 2"
          },
          {
            "id": "3",
            "group": false,
            "count":2,
            "author_id": "1",
            "avatar": "assets/icon/1.jpg",
            "nameChat": "Yana Hlibotskaya",
            "dataLastMessage": "2022-04-30 14:30:20",
            "lastMessage": "Привет чат 3"
          },
          {
            "id": "4",
            "group": true,
            "count":0,
            "author_id": "1",
            "avatar": "assets/icon/meeting.png",
            "nameChat": "Групповой чат без Олега",
            "dataLastMessage": "2022-06-30 11:30:20",
            "lastMessage": "Привет групповой чат 4"
          },
          {
            "id": "5",
            "group": true,
            "count":0,
            "author_id": "1",
            "avatar": "assets/icon/meeting.png",
            "nameChat": "Групповой чат 23",
            "dataLastMessage": "2022-04-30 11:30:20",
            "lastMessage": "Привет групповой чат 4"
          },
          {
            "id": "6",
            "group": true,
            "count":0,
            "author_id": "1",
            "avatar": "assets/icon/meeting.png",
            "nameChat": "Групповой чат 56",
            "dataLastMessage": "2022-04-30 11:30:20",
            "lastMessage": "Привет групповой чат 4"
          },
          {
            "id": "7",
            "group": true,
            "count":0,
            "author_id": "1",
            "avatar": "assets/icon/meeting.png",
            "nameChat": "Групповой чат ТП",
            "dataLastMessage": "2022-04-30 11:40:20",
            "lastMessage": "Привет групповой чат 4"
          },
          {
            "id": "8",
            "group": true,
            "count":0,
            "author_id": "1",
            "avatar": "assets/icon/meeting.png",
            "nameChat": "Групповой чат",
            "dataLastMessage": "2022-04-30 11:30:20",
            "lastMessage": "Привет групповой чат 4"
          },
          {
            "id": "9",
            "group": true,
            "count":0,
            "author_id": "1",
            "avatar": "assets/icon/meeting.png",
            "nameChat": "Групповой чат",
            "dataLastMessage": "2022-04-30 11:30:20",
            "lastMessage": "Привет групповой чат 4"
          },
          {
            "id": "10",
            "group": true,
            "count":0,
            "author_id": "1",
            "avatar": "assets/icon/meeting.png",
            "nameChat": "Групповой чат",
            "dataLastMessage": "2022-04-30 11:30:20",
            "lastMessage": "Привет групповой чат 4"
          }
        ],
        "messages": [
          {
            "id": "1",
            "id_chat": "1",
            "autor_id": "1",
            "name": "Maksim",
            "data": "2022-06-30 14:20:20",
            "message": {
              "text": "Первое сообщение 22",
              "media": [],
              "file": []
            }
          },
          {
            "id": "2",
            "id_chat": "1",
            "autor_id": "1",
            "name": "Maksim",
            "data": "2022-06-30 14:25:20",
            "message": {
              "text": "Первое сообщение",
              "media": [],
              "file": []
            }
          },
          {
            "id": "3",
            "id_chat": "1",
            "autor_id": "1",
            "name": "Maksim",
            "data": "2022-06-30 14:35:20",
            "message": {
              "text": "Первое сообщение",
              "media": [],
              "file": []
            }
          },
          {
            "id": "4",
            "id_chat": "1",
            "autor_id": "2",
            "name": "Pavel Misko",
            "data": "2022-06-30 14:24:20",
            "message": {
              "text": "Привет групповой чат Привет групповой чат Привет групповой чат Привет групповой чат Привет групповой чат Привет групповой чат",
              "media": [],
              "file": []
            }
          },
          {
            "id": "5",
            "id_chat": "1",
            "autor_id": "2",
            "name": "Pavel Misko",
            "data": "2022-06-30 14:50:20",
            "message": {
              "text": "Привет групповой чат Привет групповой чат Привет групповой чат Привет групповой чат Привет групповой чат Привет групповой чат",
              "media": [],
              "file": []
            }
          },
          {
            "id": "6",
            "id_chat": "1",
            "autor_id": "1",
            "name": "Maksim",
            "data": "2022-06-30 14:45:20",
            "message": {
              "text": "Первое сообщение",
              "media": [],
              "file": []
            }
          },
          {
            "id": "7",
            "id_chat": "1",
            "autor_id": "2",
            "name": "Pavel Misko",
            "data": "2022-06-30 14:40:20",
            "message": {
              "text": "Привет групповой чат",
              "media": [],
              "file": []
            }
          },
          {
            "id": "8",
            "id_chat": "1",
            "autor_id": "1",
            "name": "Maksim",
            "data": "2022-06-30 14:20:20",
            "message": {
              "text": "Первое сообщение",
              "media": [],
              "file": [{
                "url":"/public/exemple-file.word",
                "name":"exemple-file.word"
              },
                {
                  "url":"/public/exemple-file.word",
                  "name":"pdf-exemple-file.csv"
                }
              ]
            }
          },
          {
            "id": "9",
            "id_chat": "1",
            "autor_id": "2",
            "name": "Pavel Misko",
            "data": "2022-06-30 14:25:20",
            "message": {
              "text": "Привет групповой чат",
              "media": ['icon/1.jpg', 'icon/meeting.png'],
              "file": [{
                "url":"/public/exemple-file.word",
                "name":"exemple-file.word"
              },
                {
                  "url":"/public/exemple-file.word",
                  "name":"pdf-exemple-file.csv"
                }
              ]
            }
          },
          {
            "id": "10",
            "id_chat": "1",
            "autor_id": "2",
            "name": "Pavel Misko",
            "data": "2022-06-30 14:25:20",
            "message": {
              "text": "",
              "media": [],
              "file": [{
                "url":"/public/exemple-file.word",
                "name":"exemple-file.word"
              },
                {
                  "url":"/public/exemple-file.word",
                  "name":"pdf-exemple-file.csv"
                }
              ]
            }
          },
          {
            "id": "11",
            "id_chat": "1",
            "autor_id": "1",
            "name": "Maksim",
            "data": "2022-05-30 14:30:20",
            "message": {
              "text": "",
              "media": ['icon/1.jpg', 'icon/meeting.png', 'icon/1.jpg', 'icon/meeting.png','icon/1.jpg', 'icon/meeting.png','icon/1.jpg', 'icon/meeting.png'],
              "file": []
            }
          },
          {
            "id":"1",
            "id_chat": "3",
            "autor_id": "1",
            "name": "Maksim",
            "data": "2022-08-30 14:30:20",
            "message": {
              "text": "второе сообщение",
              "media": [],
              "file": []
            }
          },
          {
            "id":"2",
            "id_chat": "3",
            "autor_id": "2",
            "name": "Maksim",
            "data": "2022-08-30 14:30:10",
            "message": {
              "text": "Чат с картинкой",
              "media": ['icon/1.jpg', 'icon/meeting.png'],
              "file": []
            }
          }
        ]
      }
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  }
});
</script>

<style>
.ion-item-sliding{position: relative;}
.tabs-link{text-decoration: none}
.last-data{
  position: absolute;
  font-size: 9px;
  top: 0; right: 4px;
}

:host(.ios) .item-native,
:host(.ios) .item-native {
  :host(.item-native),
  :host(.item-native) {
    padding-left: 0px !important;
    background-color: red !important;
  }
}


</style>
