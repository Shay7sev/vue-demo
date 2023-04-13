<template>
  <template v-for="subItem in menuList" :key="subItem.key">
    <el-sub-menu
      v-if="subItem.children && subItem.children.length > 0"
      :index="subItem.key"
    >
      <template #title>
        <!-- <el-icon>
          <component :is="subItem.icon"></component>
        </el-icon> -->
        <span>{{ subItem.name }}</span>
      </template>
      <SubMenu :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.key" @click="handleClickMenu(subItem)">
      <!-- <el-icon>
        <component :is="subItem.icon"></component>
      </el-icon> -->
      <template #title>
        <span>{{ subItem.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
defineProps<{ menuList: Menu.MenuOptions[] }>();

const router = useRouter();
const handleClickMenu = (subItem: Menu.MenuOptions) => {
  if (subItem.meta && subItem.meta.isLink)
    return window.open(subItem.meta.isLink, '_blank');
  subItem.key && router.push({ name: subItem.key });
};
</script>
