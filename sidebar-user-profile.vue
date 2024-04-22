<template>
  <div class="block-shadow grid justify-items-center">
    <user-avatar />
    <h2 class="profile-name heading-h2-black mt-4">{{ userInfosDisplay?.name ?? "???" }}</h2>
    <div class="cartridge-label mt-4">{{ userInfosDisplay.formation }} | {{ userInfosDisplay.statut }}</div>
  </div>
</template>

<script setup lang="ts">
import { useUserInfosStore } from "~/stores/user-infos";

const userInfos = useUserInfosStore();
const userInfosDisplay = userInfos.infos;
</script>

<style lang="less" scoped>
@import "~/styles/charte-graphique-vars.less";

.vxp-avatar--circle {
  width: 120px;
  height: 120px;
  font-size: 45px;
  background-size: contain;
}
.profile-name {
  margin-top: @spacing-s;
}

.block-shadow {
  @media (max-width: 1280px) {
    width: 33%;
    margin-right: 1rem;
  }
  
}

</style>
