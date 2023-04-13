<template>
  <Maximize v-if="themeConfig.maximize" />
  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform">
        <keep-alive :include="keepAliveStore.keepAliveName">
          <component :is="Component" v-if="isRouterShow" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount, provide, watch } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { GlobalStore } from '@/store/modules/global';
import { KeepAliveStore } from '@/store/modules/keepAlive';
import Maximize from './components/Maximize.vue';

const globalStore = GlobalStore();
const keepAliveStore = KeepAliveStore();
const themeConfig = computed(() => globalStore.themeConfig);
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);

// 刷新当前页面
const isRouterShow = ref(true);
const refreshCurrentPage = (val: boolean) => (isRouterShow.value = val);
provide('refresh', refreshCurrentPage);

// 监听当前页是否最大化，动态添加 class
watch(
  () => themeConfig.value.maximize,
  () => {
    const app = document.getElementById('app') as HTMLElement;
    if (themeConfig.value.maximize) app.classList.add('main-maximize');
    else app.classList.remove('main-maximize');
  },
  { immediate: true }
);

// 监听窗口大小变化，折叠侧边栏
const screenWidth = ref(0);
const listeningWindow = useDebounceFn(() => {
  screenWidth.value = document.body.clientWidth;
  if (!isCollapse.value && screenWidth.value < 1200)
    globalStore.setThemeConfig({ ...themeConfig.value, isCollapse: true });
  if (isCollapse.value && screenWidth.value > 1200)
    globalStore.setThemeConfig({ ...themeConfig.value, isCollapse: false });
}, 100);
window.addEventListener('resize', listeningWindow, false);
onBeforeUnmount(() => {
  window.removeEventListener('resize', listeningWindow);
});
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
