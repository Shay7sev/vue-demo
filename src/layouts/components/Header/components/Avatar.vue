<template>
  <el-popover :width="200">
    <template #reference>
      <el-avatar
        v-if="storeUser.userInfo.picture"
        :src="storeUser.userInfo.picture"
      />
      <el-avatar v-else :icon="UserFilled" />
    </template>
    <template #default>
      <div style="display: flex; gap: 16px; flex-direction: column">
        <div>
          <p style="margin: 0; font-weight: 500">
            {{ storeUser.userInfo.name }}
          </p>
          <p style="margin: 0; font-size: 14px; color: #909399">
            open_id:{{ storeUser.userInfo.open_id }}
          </p>
        </div>
        <el-button type="primary" plain @click="handleExit">
          {{ $t('header.logout') }}
        </el-button>
      </div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { userStore } from '@/store/modules/user';
import { LOGIN_URL } from '@/config/config';
import { useRouter } from 'vue-router';
import { UserFilled } from '@element-plus/icons-vue';
const router = useRouter();

const storeUser = userStore();
const handleExit = () => {
  storeUser.resetState().then(() => {
    // router.push({
    //   name: 'login',
    // })
    router.replace(LOGIN_URL);
  });
};
</script>

<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
