<template>
  <section class="section-container" id="home">
    <div class="section-image">
      <div class="left-section">
        <div class="left-section-1">
          <span>Booked Tool</span>
          <span>enables you to</span>
          <p>create Interactive Advertisement</p>
          <button>What is it?</button>
        </div>
      </div>
      <div class="right-section">
        <img src="https://picsum.photos/id/26/4209/2769" alt="picsum-image" />
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
  height: 600px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 991px) {
    display: block;
    height: 100%;
  }
  .left-section {
    background-image: url("../assets/laptop-glasses.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 50%;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-1 {
      margin-left: auto;
      margin-right: 15%;
      span {
        margin: 0;
        margin-right: 5px;
        &:first-child {
          font-size: 30px;
          font-weight: 600;
        }
      }
      p {
        margin-top: 0;
        margin-bottom: 12px;
      }
      button {
        height: 45px;
        width: 140px;
        background-color: #428ecb;
        border: 1px solid #428ecb;
        border-radius: 5px;
        color: #ffff;
        font-size: 18px;
      }
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
      height: 500px;
    }
    @media only screen and (max-width: 767px) {
      &-1 {
        background-color: #f7f7f7;
        margin-left: 10px;
        border-radius: 10px;
        padding: 5px;
        text-align: center;
      }
    }
  }
  .right-section {
    position: absolute;
    width: 53%;
    height: 65vh;
    right: 0;
    img {
      width: 100%;
      height: 85%;
    }
    @media only screen and (max-width: 991px) {
      position: relative;
      // display: flex;
      display: none;
      align-items: center;
      img {
        width: 80%;
        height: 300px;
        border-radius: 10px;
        margin-left: auto;
        // margin-right: 20px;
      }
    }
  }
}
.booked-container {
  background-color: #e2e3e2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }
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
    @media only screen and (max-width: 991px) {
      h1 {
        font-size: 28px;
      }
    }
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
      @media only screen and (max-width: 991px) {
        width: 150px;
      }
    }
    button {
      height: 40px;
      width: 70px;
      background-color: #428ecb;
      border: 1px solid #428ecb;
      border-radius: 5px;
      color: #ffff;
    }
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      text-align: center;
    }
  }
}
</style>
