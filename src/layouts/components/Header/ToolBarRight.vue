<template>
  <div class="tool-bar-ri">
    <div class="header-icon">
      <AssemblySize id="assemblySize" />
      <Language id="language" />
      <ThemeSetting id="themeSetting" />
      <Fullscreen id="fullscreen" />
    </div>
    <span class="avatar"><Avatar /></span>
  </div>
</template>

<script setup lang="ts">
import Fullscreen from './components/Fullscreen.vue';
// import Message from './components/Message.vue'
import Language from './components/Language.vue';
import ThemeSetting from './components/ThemeSetting.vue';
import AssemblySize from './components/AssemblySize.vue';
import Avatar from './components/Avatar.vue';
</script>

<style scoped lang="scss">
.tool-bar-ri {
  display: flex;
  align-items: center;
  justify-content: center;
  .header-icon {
    display: flex;
    align-items: center;
    & > * {
      margin-left: 21px;
    }
  }
  .avatar {
    margin-left: 20px;
    display: flex;
  }
}
</style>
