<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
  <component :is="LayoutComponents[themeConfig.layout]" />
  <ThemeDrawer />
</template>

<script setup lang="ts" name="layout">
import { computed, type Component } from 'vue';
import { GlobalStore } from '@/store/modules/global';
import ThemeDrawer from './components/ThemeDrawer/index.vue';
import LayoutClassic from './LayoutClassic/index.vue';

const LayoutComponents: { [key: string]: Component } = {
  classic: LayoutClassic,
};

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
</script>

<style scoped lang="scss">
.layout {
  min-width: 760px;
}
</style>
