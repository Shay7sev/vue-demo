<template>
  <div class="theme-setting">
    <el-tooltip effect="dark" placement="top" :show-after="200">
      <template #content>
        {{ $t('header.layoutConfig') }}
      </template>
      <i
        :class="'iconfont icon-zhuti'"
        class="toolBar-icon"
        @click="openDrawer"
      ></i>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import mittBus from '@/utils/mittBus';
const openDrawer = () => {
  mittBus.emit('openThemeDrawer');
};
</script>
