<template>
  <el-tooltip effect="dark" placement="top" :show-after="200">
    <template #content>
      {{ $t('header.componentSize') }}
    </template>
    <el-dropdown trigger="click" @command="setAssemblySize">
      <i :class="'iconfont icon-contentright'" class="toolBar-icon"></i>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in assemblySizeList"
            :key="item"
            :disabled="assemblySize === item"
            :command="item"
          >
            <!-- {{ assemblySizeListCh[item] }} -->
            {{ $t(`header.${item}Size`) }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-tooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { GlobalStore } from '@/store/modules/global';
import { AssemblySizeType } from '@/store/interface';

const globalStore = GlobalStore();
const assemblySize = computed(() => globalStore.assemblySize);

const assemblySizeList: AssemblySizeType[] = ['default', 'large', 'small'];
// const assemblySizeListCh = reactive<{ [key: string]: string }>({
//   default: '默认',
//   large: '大型',
//   small: '小型',
// });

const setAssemblySize = (item: AssemblySizeType) => {
  if (assemblySize.value === item) return;
  globalStore.setAssemblySizeSize(item);
};
</script>
