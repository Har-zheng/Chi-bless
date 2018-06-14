<template>
    <div class="public">
        <!-- 导航 -->
        <div class="top">

            <div class="container">
                <div class="row">
                    <div class="col-xs-5">
                        <img src="../../static/images/logo.png" alt="">
                        
                    </div>
                    <div class="col-xs-7">
                        <ul>
                            <li> <router-link to="#">首页</router-link> </li>
                            <li> <router-link to="#">我的收藏</router-link> </li>
                            <li> <router-link to="#">委托查找</router-link> </li>
                            <li><router-link to="#">提交记录</router-link></li>
                            <li><router-link to="#">退出登录</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'publics'
    }
</script>

<style lang="less">
.public{
.top{
    padding: 10px 0;
    background: #f5f5f5;
}
    ul{
        display: flow-root;
        li{
        float: left;
        list-style: none;
        width: 20%;
        line-height: 45px;
        text-align: center;
        a{
            text-decoration: none;
            padding-bottom: 6px;
            color: #999999;
        }
        a:active{
            border-bottom: 2px solid #009EFF;
        }
    }
    }

}

.container{
    width: 1000px;
}
</style>
