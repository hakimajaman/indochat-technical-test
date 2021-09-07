<template>
  <section class="section-container">
    <div class="section-image">
      <div class="left-section">
        <div class="left-section-1">
          <span>Booked Tool</span>
          <span>enables you to</span>
        </div>
        <p>create Interactive Advertisement</p>
      </div>
    </div>
    <div class="booked-container">
      <div class="booked-text">
        <h3>Please log in to start using</h3>
        <h1>Booked Tool</h1>
      </div>
      <div class="booked-input">
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button>Login</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-image {
  background-color: #f3f6f4;
  height: 50vh;
  display: flex;
  .left-section {
    background-image: url("../assets/laptop-glasses.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 50%;
    text-align: right;
    &-1 {
      span {
        margin: 0;
        margin-right: 5px;
        &:first-child {
          font-size: 30px;
          font-weight: 500;
        }
      }
    }
    p {
      margin: 0;
    }
  }
}
.booked-container {
  background-color: #e2e3e2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  .booked-text {
    h3 {
      margin: 0;
      font-weight: 200;
    }
    h1 {
      margin: 0;
      font-size: 32px;
    }
    margin-right: 50px;
  }
  .booked-input {
    input {
      height: 40px;
      margin-right: 10px;
      padding: 0px 10px;
      outline: none;
      border-color: transparent;
      border-radius: 5px;
      -webkit-box-shadow: 0 rgba(70, 74, 80, 0.3);
      -moz-box-shadow: 0 rgba(70, 74, 80, 0.3);
      box-shadow: 0 rgba(70, 74, 80, 0.3);
    }
    button {
      height: 40px;
      width: 70px;
      background-color: #428ecb;
      border: 1px solid #428ecb;
      border-radius: 5px;
      color: #ffff;
    }
  }
}
</style>
