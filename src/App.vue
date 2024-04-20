<script setup lang="ts">
import { onLaunch, onShow, onHide, onLoad } from "@dcloudio/uni-app";
onLaunch(() => {
    const updateManager = uni.getUpdateManager();

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate);
    });
    
    updateManager.onUpdateReady(function (res) {
      uni.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        }
      });
    
    });
    
    updateManager.onUpdateFailed(function (res) {
      // 新的版本下载失败
    });

  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
onLoad(() => {
  console.log("app load");
});
</script>
<style lang="less"></style>
