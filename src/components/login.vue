<template>
  <div class="login">
    <!-- header -->
    <div class="container">
      <div class="row header">
        <div class="col-xs-12">
          <img src="../../static/images/logo.png" alt="">
          <div class="shuxian"></div>
          <span>欢迎登录</span>
        </div>
      </div>
    </div>
    <!-- 登录框 -->
    <div class="content">
      <div class="bg_img">
        <img src="../../static/images/beijing.png" alt="">
        <div class="denglu">
          <p class="font">用户登录</p>
          <p class="inp user_name"><input type="text" placeholder="请输入用户名"></p>
          <p class="inp paww"><input type="text" placeholder="请输入密码"></p>
          <p class="loin"><router-link to="/publics"><span> 立即登录 </span></router-link></p>
          <p class="xieyi xieyis"><span>请查看并同意卡佑天行的用户协议：</span></p>
          <p class="xieyi"><span><input type="checkbox">我接受卡佑天行的用户协议和隐私政策</span> </p>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer"> 
      <p class="footer_fot">2010-2018版权所有&copy;卡佑天行 粤沪ICP备<font color="#333">12043601号-1</font>沪公安44190002000538号</p>
      <p>地址：南昌市南城街道莞太路111号民间金融大厦1号楼28楼</p>
    </div>
  </div>
</template>

<script>
import plugins from './publics'
export default {
  
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
h1, h2, h3, h4, h5, h6{ font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; }
table { border-collapse:collapse; border-spacing:0; }
.header{
  padding: 22px 0;
}
.shuxian{
  display: inline-block;
  height: 38px;
  width: 1px;
  background: #ccc;
  position: relative;
  top: 10px;
  /* padding: 0 20px; */
  margin: 0 28px;
}
.content{
  position: relative;
  img{
    width: 100%;
    z-index: 1;
  }
  .denglu{
    top: 0;
    width: 493px;
    height: 395px;
    position: absolute;
    background: #fff;
    z-index: 99;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius:6px; 
    .font{
      font-size: 24px;
      color: #000;
      padding: 34px 0;
      text-align: center;
    }
    p{
      text-align: center;
    }
    .inp  input{
      outline: none;
      border-radius: 3px;
      border: 1px solid #ccc;
      height: 42px;
      width: 340px;
      margin-bottom: 10px;
      margin:auto;
      background: #f5f5f5;
      margin-bottom:26px;
      text-indent: 6px;
    }
    .inp input::-webkit-input-placeholder{
            color:#999;
    }
    .loin{
      span{
        display: inline-block;
        width: 340px;
        height: 42px;
        background: #009EFF;
        color: #fff;
        border-radius: 10px;
        line-height: 42px;
      }
    }
    .xieyi{
      span{
      font-size: 12px;
      display: inline-block;
      width: 340px;
      text-align: left;
      color: #999;
      }
    }
    .xieyis{
      margin-top: 16px;
    }
  }
}
.footer{
  height: 104px;
  background: #F5F5F5;
.footer_fot{
  // margin-top: 30px;
  position: relative;
  top: 30px;
}
p{
  color: #999;
  position: relative;
    text-align: center;
    top: 30px;
}
}
</style>
