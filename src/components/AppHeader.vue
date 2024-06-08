<script setup>

</script>

<template>

  <header class="row header">

    <button class="btn btn_outline header__btn icon_plus icon_plus_red"></button>

    <div class="row row_center header__profile">
      <div class="header__profile-icon">
        <img src="@/assets/images/header/user.png" alt="John Doe">
      </div>
      <div class="header__profile-name">
        John Doe
      </div>
    </div>

    <div class="lg"> <!-- lg - language -->
      <div class="row row_center lg__current-value chevron_icon chevron_down_icon">
        <div class="lg__icon">
          <img src="@/assets/images/header/uk.png" alt="En">
        </div>
        En
      </div>

      <div class="lg__dropdown">

        <div class="lg__dropdown-item">
          Ru
        </div>
        <div class="lg__dropdown-item">
          En
        </div>

      </div>
    </div>

  </header>

</template>

<style scoped>

</style>