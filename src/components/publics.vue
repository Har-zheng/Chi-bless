<template>
    <div class="public">
        <!-- 导航 -->
        <div class="top">

            <div class="container">
                <div class="row">
                    <div class="col-xs-5">
                       <img src="../../static/images/logo.png" alt="">
                        
                    </div>
                    <div class="col-xs-5 pull-right">
                        <ul class="ul_list">
                            <li> <router-link to="/home">首页</router-link> <i></i> </li>
                            <li> <router-link to="/collection">我的收藏</router-link> </li>
                            <li> <router-link to="/entrustment">委托查找</router-link> </li>
                            <li><router-link to="#">退出登录</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- content   内容区域 -->
        <div class="content">

        </div>
        <!-- 底部区域 -->

        <!-- <div class="bottom">
            <p class="p1">2010-2018 版权所有 © 卡佑天行 粤沪ICP备12043601号-1 沪公安网备44190002000538号</p>
            <p class="p2">地址：南昌市南城街道莞太路111号民间金融大厦1号楼28楼</p>
        </div> -->
    </div>
</template>
<script>
// import home from './home'
// import collection from './my_collection'
    export default{
        name: 'Publics',
        data () {
            return {

            }
        },
        mounted () {
            // 获取导航的ul li的内容    绑定点击事件
            $('.ul_list li').on('click',function(){
                //删除  要添加的样式类
                $('.ul_list li').removeClass('xian_i');

                //当前点击的元素 下 子元素  a标签  添加类
                $(this).addClass('xian_i');
            });

        },
        methods:{

        }
    }
</script>

<style lang="less">
.public{
.top{
    padding: 16px 0;
    background: #f5f5f5;
}
.pull-right{
    padding: 0;
}
    ul{
        // display: flow-root;0
        height: 1px;
        margin: 0;
        padding: 0;
        width: 100%;
        li{
            position: relative;
            float: left;
            list-style: none;
            width: 25%;
            line-height: 45px;
            text-align: center;
        a{
            display: inline-block;
            text-decoration: none;
            padding-bottom: 6px;
            color: #999999;
            
        }
        .active{
            border-bottom: 2px solid #009EFF;
        }
       
    }
     .xian_i{
            display: inline-block;
            border-bottom: 2px solid #009EFF;
        }
    }

}
.bottom{
    padding: 20px 0;
    position: absolute;
    // bottom: 0;
    width: 100%;
    background: #5C5F63;
    p{
        color: #D6E0E9;
        text-align: center;
    }
}

.container{
    width: 1000px;
}
</style>
