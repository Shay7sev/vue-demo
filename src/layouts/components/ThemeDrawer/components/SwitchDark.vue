<template>
  <el-switch
    v-model="themeConfig.isDark"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
    @change="onAddDarkChange"
  />
</template>

<script setup lang="ts" name="SwitchDark">
import { computed } from 'vue';
import { GlobalStore } from '@/store/modules/global';
import { Sunny, Moon } from '@element-plus/icons-vue';
import { useTheme } from '@/hooks/useTheme';
const globalStore = GlobalStore();

const { switchDark } = useTheme();

const themeConfig = computed(() => globalStore.themeConfig);

const onAddDarkChange = () => {
  switchDark();
};
</script>
