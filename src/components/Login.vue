<template>
  <v-container id="login_wrap" class="login_wrap" align-center justify-center>
    <v-layout column wrap text-xs-center>
      <h1 class="headline">단쿠키 잡포럼 로그인</h1>
      <v-flex justify-center class="btn_wrap">
        <v-btn round color="primary" dark justify-center>
          <span class="icon_wrap">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M12,13C9.33,13 4,14.33 4,17V20H20V17C20,14.33 14.67,13 12,13M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4M12,14.9C14.97,14.9 18.1,16.36 18.1,17V18.1H5.9V17C5.9,16.36 9,14.9 12,14.9M12,5.9A2.1,2.1 0 0,1 14.1,8A2.1,2.1 0 0,1 12,10.1A2.1,2.1 0 0,1 9.9,8A2.1,2.1 0 0,1 12,5.9Z" />
            </svg>
          </span>
          단쿠키 계정으로 로그인
        </v-btn>
      </v-flex>
      <v-flex justify-center class="btn_wrap">
        <v-btn round color="google" dark justify-center>
          <span class="icon_wrap">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#ffffff" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
            </svg>
          </span>
          구글 계정으로 로그인
        </v-btn>
      </v-flex>
      <v-flex justify-center class="btn_wrap">
        <v-btn round color="facebook" dark justify-center>
          <span class="icon_wrap">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#ffffff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
            </svg>
          </span>
          페이스북 계정으로 로그인
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import User from '../models/user.js';

export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    SignUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created(){
    User.init();
    console.log(User.data.me)
  }
}
</script>

<style scoped lang="scss">

.headline {
  font-size: 18px;
  margin: 3em 0 1em;
}

.login_wrap {
  display: flex;
  height: 100vh;
  background: url('https://s3.ap-northeast-2.amazonaws.com/dankookie/static/character.jpg') no-repeat calc(50% - 15px) 30px / 150px;

  .btn_wrap {
    display: flex;

    .btn {
      width: 230px;
      margin-right: 25px;

      & > div {
        justify-content: space-around;
      }
    }
  }
}

.icon_wrap {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}


</style>
