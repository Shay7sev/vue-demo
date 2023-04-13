<template>
  <div class="fullscreen">
    <el-tooltip effect="dark" placement="top" :show-after="200">
      <template #content>
        {{ $t('header.fullScreen') }}
      </template>
      <i
        :class="['iconfont', isFullscreen ? 'icon-suoxiao' : 'icon-fangda']"
        class="toolBar-icon"
        @click="toggle"
      ></i>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';
const { toggle, isFullscreen } = useFullscreen();
</script>
