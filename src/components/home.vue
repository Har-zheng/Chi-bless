<template>
<!-- 首页-->
<div class="home">
        <div class="container">
            <div class="row nav_top">
                <div class="col-xs-3">
                    <span class="spn1">首页</span>
                    >
                    <span class="spn2">司机列表</span>
                </div>
            </div>
            <!-- 首页 检索区域 -->
            <div class="row retrieval">
                <div class="col-xs-12">
                    <div class="retrieval_cont">
                        <div class="key_word">
                            <p>关键词 <input class="pull-right" type="text" placeholder="请输入关键词搜索"></p>
                        </div>

                        <div class="content_p">
                            <p class="p1">从业年限 <input type="text" placeholder="请选择从业年限"> <i></i></p>
                            <p class="p2">常开车型 <input type="text" placeholder="请选择驾照类别"> <i></i></p>
                        </div>
                        <div class="content_three">
                            <p class="p3">工作地区<input type="text" placeholder="请选择工作地区"></p>
                            <p class="p4">
                                <span>
                                    学历要求 
                                <select class="education_select" name="" id="">
                                    <option value="">大专及以上</option>
                                    <option value="">本科</option>
                                    <option value="">研究生</option>
                                    <option value="">硕士</option>
                                    <option value="">博士</option>
                                </select>
                                </span>
                                <span>
                                    工作经验
                                <select name="" id="" class="education_select">
                                    <option value="">无工作经验</option>
                                    <option value="">一年以下工作经验</option>
                                    <option value="">1-3年工作经验</option>
                                    <option value="">3-5年工作经验</option>
                                    <option value="">5年以上工作经验</option>
                                </select>
                                </span>
                                
                            </p>
                        </div>
                        <div class="anniu">
                            <span class="search_anniu">搜索</span>
                            <span>清空搜索条件</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 搜索后的 司机列表 -->
            <div class="row retrieval_two">
                <div class="col-xs-12">
                    <span>以为您搜索1200位司机</span>
                    <span>
                        <input type="text" list="itemlist" placeholder="当前状态">

                        <datalist id="itemlist">
                            <option>入职</option>
                            <option>离职</option>
                        </datalist>

                    </span>
                    <span>
                        <input type="text"  placeholder="发布司机时间">
                    </span>
                    <span>
                        <input type="text" placeholder="驾龄">
                    </span>
                </div>
                <!-- 司机列表 -->
            </div>
            <div class="row">
                <div class="col-lg-12 driver_list">
                    <div class="information">
                        <div class="tltle">
                            <div class="tltle_left">
                                <p>
                                    <span class="xm_name">某先生</span>
                                    <span class="xm_bt">希望跳槽</span>
                                    </p>
                                <p>男| 35岁| 在职 | 现居上海</p>
                                <p class="p4">期望薪资 20k</p>
                            </div>
                            <div class="tltle_min">
                                <p>
                                    <span>重型货车司机</span>
                                    
                                </p>
                                <p> 驾照 C </p>
                            </div>
                            <div class="tltle_right">
                                <p>驾龄</p>
                                <p>从业年限：9年</p>
                            </div>
                        </div>
                        <div class="tltle_rgt">
                            <p>能力天空长途运输公司</p>
                            <p>
                                <span>已收藏</span>

                                <router-link to="/information"><span class="spn">更多信息</span></router-link>
                            </p>
                            
                        </div>
                    </div>
                    <div class="information">
                        <div class="tltle">
                            <div class="tltle_left">
                                <p>
                                    <span class="xm_name">某先生</span>
                                    <span class="xm_bt">希望跳槽</span>
                                    </p>
                                <p>男| 35岁| 在职 | 现居上海</p>
                                <p class="p4">期望薪资 20k</p>
                            </div>
                            <div class="tltle_min">
                                <p>
                                    <span>重型货车司机</span>
                                    
                                </p>
                                <p> 驾照 C </p>
                            </div>
                            <div class="tltle_right">
                                <p>驾龄</p>
                                <p>从业年限：9年</p>
                            </div>
                        </div>
                        <div class="tltle_rgt">
                            <p>能力天空长途运输公司</p>
                            <p>
                                <span>已收藏</span>

                                <router-link to="/information"><span class="spn">更多信息</span></router-link>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <nav aria-label="Page navigation">
                        <ul class="pagination">
                            <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">上一页</span>
                            </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                                <span aria-hidden="true">下一页</span>
                            </a>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                        </nav>
                </div>
            </div>
        </div>


        <!-- 悬浮提示框  固定定位 -->
        <div class="pos_fixt">
            <img src="../../static/images/bg_tu.png" alt="">
            <router-link to="/entrustment"><span>立即委托</span></router-link>
        </div>
                <!-- 底部区域 -->

        <div class="bottom">
            <p class="p1">2010-2018 版权所有 © 卡佑天行 粤沪ICP备12043601号-1 沪公安网备44190002000538号</p>
            <p class="p2">地址：南昌市南城街道莞太路111号民间金融大厦1号楼28楼</p>
        </div>
    </div>
</template>
<script>
import information from '@/components/information'
    export default{
        name: 'home',
        data(){
            return{

            }
        }
    }
</script>
<style scoped lang="less">
    .home{
        nav{
            text-align: center;
        }
        .nav_top{
            padding: 20px 0;
            span{
                font-size: 14px;
            }
            .spn1{
                color: #666;
            }
            .spn2{
                color: #333;
            }
        }
    /* 首页 检索区域*/
        .retrieval{
            background: #f5f5f5;
            .retrieval_cont{
                padding: 30px 10px;
                font-size: 14px;
                height: 321px;
                div{
                    padding-bottom: 10px;
                }
                p{
                    height: 40px;
                    line-height: 40px;
                }
                .key_word{
                    p{
                        height: 40px;
                        letter-spacing: 8px;
                        line-height: 40px;
                        // text-align: center;
                    }
                    input{
                        width: 90%;
                    }
                }
                input{
                    height: 40px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    text-indent: 6px;
                    outline: none;
                    background: #fff;
                }
                .content_p{
                    p{
                        // text-align: center;
                        width: 49%;
                        display: inline-block;
                        position: relative;
                        height: 40px;
                        
                        input{
                            width: 80%;
                            float: right;
                        }
                        i{
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            background: url('../../static/images/bg_xuanzhe.png')no-repeat scroll right center transparent;
                            position: absolute;
                            left: 424px;
                            top: 5px;
                        }
                    }
                    .p2{
                        float: right;
                    }
                }
                .content_three{
                    p{
                        width: 49%;
                        display: inline-block;
                    }
                    .p3{
                        input{
                            width: 80%;
                            float: right;
                        }
                    }
                    .p4{
                        float: right;
                        span{
                            width: 49%;
                            display: inline-block;
                        }
                    }
                        .education_select{
                            float: right;
                            border: 1px solid #ddd;
                            width: 60%;
                            outline: none;
                            background: #fff;
                            height: 40px;
                            border-radius: 6px; 
                        }
                    }
                .anniu{
                    padding: 30px 0;
                    text-align: center;
                    .search_anniu{
                        color: #fff;
                        display: inline-block;
                        background: #009EFF;
                        padding: 10px 20px;
                        border-radius: 6px;
                        font-size: 18px;
                    }
                }    
            }
        }
    /*检索区域 司机列表*/
    .retrieval_two{
        padding: 30px 0;
    
    }
    .driver_list{
        border: 1px solid #ddd;
        /* height: 1287px; */
        padding: 0;
        padding-bottom: 48px;
        }
        .information{
            border-bottom: 1px solid #ddd;
            padding: 10px 30px;

            .tltle{
                display: inline-block;
                height: 100%;
                div{
                    height: 100%;
                    display: inline-block;
                }
                .xm_name{
                   font-size: 18px;
                   color: #09458D; 
                }
                .xm_bt{
                    color: #F5A331;
                }
                .p4{
                    color: #F5A331;
                }
                .tltle_min{
                    padding: 0 110px;
                }
            }
            .tltle_rgt{
                float: right;
                padding: 0 30px;
                position: relative;
                top: 10px;
                border-left: 1px solid #ddd;
                span{
                    display: inline-block;
                    border:1px solid #ccc;
                    padding: 6px 3px;
                    border-radius: 6px;
                    color: #ccc;
                }
                .spn{
                    border: 1px solid #009EFF;
                    color: #009eff;
                }

            }
        }
        .pos_fixt{
            position: fixed;
            top: 20%;
            right: 0;
            img{
                width: 16vw;
            }
            span{
                position: absolute;
                bottom: 30px;
                padding: 8px 10px;
                border: 1px solid #009EFF;
                border-radius: 6px; 
                left: 5vw;
            }
        }
    }

</style>
