<template>
  <div class="header">
    <div class="com-container">
      <div class="com-container logo-navigation">
        <img class="logo" src="@/assets/logo.png" />
        logo
      </div>
      <navigation-menu />
    </div>
    <personal-info />
  </div>
</template>

<script>
import NavigationMenu from './NavigationMenu.vue';
import PersonalInfo from './PersonalInfo.vue';

export default {
  components: {
    PersonalInfo,
    NavigationMenu
  },
  setup () {

  }
};
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 10px;
  }

  .com-container {
    display: flex;
    align-items: center;
  }

  .logo-navigation {
    margin-right: 50px;
    width: 100px;
    transition: width 0.5s;
    -webkit-transition: width 0.5s; /* Safari */
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 768px) {
    .logo-navigation {
      width: 0px;
      margin: 0px;
    }
  }
</style>