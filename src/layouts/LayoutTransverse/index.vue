<!-- 横向布局 -->
<template>
  <el-container class="layout" style="flex-direction: column">
    <el-affix :offset="0" style="z-index: 999">
      <el-header>
        <div class="logo flx-align-center">
          <img src="@/assets/logo.png" alt="logo" />
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            :router="true"
            menu-trigger="click"
            :ellipsis="false"
            background-color="#162132"
            text-color="#fff"
            active-text-color="#ffffff"
          >
            <template v-for="item in menus" :key="item.key">
              <el-sub-menu
                v-if="item.children?.length"
                :index="item.key"
                :key="item.key"
              >
                <template #title>
                  <span style="font-size: 18px; font-weight: 400">
                    {{ item.name }}
                  </span>
                </template>
                <SubMenu :menuList="item.children" />
              </el-sub-menu>
              <el-menu-item
                v-else
                style="font-size: 18px; font-weight: 400"
                @click="menuItemClick"
                :index="item.key"
                :route="{ name: item.key }"
              >
                {{ item.name }}
              </el-menu-item>
            </template>
          </el-menu>
        </div>
        <ToolBarRight />
      </el-header>
    </el-affix>
    <Main />
  </el-container>
</template>

<script setup lang="ts" name="layoutTransverse">
import { computed, ComputedRef, ref, watch } from 'vue';
import { userStore } from '@/store/modules/user';
import { useRoute } from 'vue-router';
import Main from '@/layouts/components/Main/index.vue';
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue';
import SubMenu from '@/layouts/components/Menu/SubMenu.vue';

const route = useRoute();

const activeIndex = ref('dataset');

const storeUser = userStore();

const menus: ComputedRef<Menu.MenuOptions[]> = computed(() => {
  return [
    { key: 'cloud', name: '环卫云', icon: '', groups: ['0'] },
    { key: 'cloud_index', name: '环卫云', icon: '', groups: ['0'] },
  ].filter((n) => n.groups.includes(storeUser.userInfo.group + ''));
});

const key = computed(() => {
  return route.meta.activeMenu || route.name || '';
});

watch(
  () => key,
  () => {
    // console.log('key', key);
    activeIndex.value = key.value as string;
  },
  { deep: true, immediate: true }
);

const menuItemClick = (val: any) => {
  if (val.index === 'simulation') {
    window.localStorage.setItem('currentModuleIndex', '0');
  }
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>

<style lang="scss">
.transverse {
  // 横向菜单布局
  .el-menu--horizontal {
    .el-menu-item,
    .el-sub-menu {
      height: 54px !important;
      .el-sub-menu__title {
        height: 100%;
      }
    }
    .el-sub-menu__hide-arrow {
      width: 54px !important;
    }
  }
  .el-menu,
  .el-menu--popup {
    .el-menu-item {
      &.is-active {
        color: #ffffff;
        background: #060708;
        &::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          content: '';
          background: var(--el-color-primary);
        }
      }
    }
  }

  // guide
  #driver-highlighted-element-stage {
    background-color: #606266 !important;
  }
}
</style>
