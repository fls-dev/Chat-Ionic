<template>
  <div id="container">
    <ion-item>
    <ion-avatar slot="start">
      <img src="/assets/icon/mA.jpeg">
    </ion-avatar>
    <ion-label>
      Максим Разбицкий
      <p>Последнее собщение</p>
    </ion-label>
    <div class="last-data">2022-06-29 14:30:20</div>
    </ion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessegesChatList',
  methods:{

  }
});
</script>

<style scoped>


</style>
