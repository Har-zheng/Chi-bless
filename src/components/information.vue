<template>
    <div class="information">
        <div class="container">
            <div class="row conten">
                <div class="col-xs-12">
                    <!-- 头部个人信息块 -->
                    <div class="info">
                        <div class="block">
                            <img class="touxiang" src="../../static/images/1.png" alt="">
                        </div>
                        <div class="block block_two">
                            <p>某先生</p>
                            <p>男|35岁|初中|已婚</p>
                            <p>当前状态 在职</p>
                            <p>常驾车型 重型货车司机</p>
                            <p>驾照c</p>
                            <p>驾龄  9</p>
                            <p>工作经验9年</p>
                            <p><span>收藏</span></p>
                        </div>
                        <div class="block block_three">
                            <p><span>猜你喜欢</span><span>换一批</span></p>
                            <p><img src="../../static/images/2.png" alt=""></p>
                            <p><img src="../../static/images/3.png" alt=""></p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12">
                    <!--详细信息 选项卡 -->
                    <div class="info_two">
                        <!-- one -->
                        <div class="list_info">
                            <div class="list_info_one">
                                <ul>
                                    <li><a href="#div1" class="smooth">个人信息</a></li>
                                    <li><a href="#div2" >工作经历</a></li>
                                    <li><a href="#div3" >教育经历</a></li>
                                    <li><a href="#div4" >荣誉证书</a></li>
                                    <li><a href="#div5" >有无事故</a></li>
                                </ul>
                                <div class="gern_info" id="div1">
                                    <p>某先生</p>
                                    <p>男|35岁|初中|已婚</p>
                                    <p>户籍 上海</p>
                                    <p>现住地址： 上海市嘉定区安亭镇108号</p>
                                    <p>家庭住址：上海市嘉定区安亭镇昌吉路108号</p>
                                    <p>身份证号码：130324188916033724</p>
                                    
                                </div>
                            </div>
                           <div class="list_info_two" id="div2">
                               <p class="p1">工作经历</p>
                               <p class="p2">2014.8-至今</p>
                               <p>盛阳****公司 司机</p>
                               <p>公司名称： 广州市潮骏航空客货运代理有限公司起止年月：2009-03 ～ 2009-08 </p>
                               <p> 公司性质： 私营企业所属行业</p>
                               <p>担任职务： 物流跟单文员 </p>
                               <p>工作描述： 接受客户的委托完成货物运输的每一个环节或与此有关的环节，涉及这方面的工作都可以直接或间接的找货代来完成，主要工作是， 统计每月的出入账，收支情况，货款跟踪，货物跟踪，货物查询，订舱，考勤，国航网上数据采集.</p>
                                
                                <p>公司名称： 吴川市港丰商场起止年月：2007-06 ～ 2007-09 </p>
                               <p>公司性质： 民营企业所属行业：日用生活服务</p>
                               <p>担任职务： 促销员 </p>
                               <p>工作描述： 任职商场康师傅产品促销、导购，积极的工作态度,热情的服务，。在工作中取得良好的成绩.</p>
                               <p></p>
                               <p></p>
                           </div>
                           <!-- 教育经历 -->
                           <div class="list_info_three" id="div3">
                               <p class="p1">教育经历</p>
                               <p class="p2">毕业院校： 河源紫金初中 </p>
                               <p>最高学历： 高中 毕业日期： 1999-07-01 </p>
                               <p>所学专业一： 司机 所学专业二：</p>
                               <p> 受教育培训经历： 起始年月 终止年月 学校（机构） 专　业 获得证书 证书编号 1996-09 1999-06 河源紫金学 文科 高中毕业证，持A2牌驾照</p>
                              
                           </div>
                           <!-- 荣誉证书 -->
                           <div class="list_info_three list_info_for" id="div4">
                               <p class="p1">荣誉证书</p>
                               <p class="p2"> </p>
                               <p></p>
                               <p></p>
                               <p></p>
                           </div>
                           <!-- 有无事故 -->
                            <div class="list_info_three" id="div5">
                               <p class="p1">有无事故</p>
                               <p class="p2"> </p>
                               <p></p>
                               <p></p>
                               <p></p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <!-- 底部区域 -->

        <div class="bottom">
            <p class="p1">2010-2018 版权所有 © 卡佑天行 粤沪ICP备12043601号-1 沪公安网备44190002000538号</p>
            <p class="p2">地址：南昌市南城街道莞太路111号民间金融大厦1号楼28楼</p>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'information',
        data () {
            return {
                
            }
        },
        mounted () {
            //  $(".smooth").click(function(){
            //      console.log('66')
            //     var href = $(this).attr("href");
            //     var pos = $(href).offset().bottom;
            //     $("html,body").animate({scrollTop: pos}, 100);	
            //     return false;
            // });   
        }
    }
</script>
<style scoped lang="less">

.information{
    .conten{

        .info{
            height: 321px;
            border: 1px solid #ddd;
            margin-top: 20px;
            // padding: 6px 0;
            .block{
                margin-top: 32px;
                .touxiang{
                    height: 240px;
                    width: 236px;
                }
                // display: inline-block;
                float: left;

            }
            .block_two{
                padding-left: 36px ;
            }
            .block_three{
                    float: right;
                }
        }

        // 下部样式
        .info_two{
            padding: 0 30px;
            height: 1320px;
            margin-top: 20px;
            border: 1px solid #dddd;
            background: #f5f5f5;
            padding-top: 20px;
            .list_info{
                 
                height: 1220px;
                border: 1px solid #ddd;
                .list_info_one{
                    
                    width: 100%;
                    ul{
                        position: relative;
                        width: 100%;
                        padding: 0;
                        margin: 0;
                    }
                        ul li{
                        list-style: none;
                        float: left;
                        width: 20%;
                        text-align: center;
                        line-height: 53px;
                        border-bottom: 1px solid #ddd;
                        border-right: 1px solid #ddd;
                        border-top: 2px solid #f5f5f5;
                        a{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            text-decoration: none;
                        }
                    }
                    ul li:hover{
                        border-top: 2px solid #54B3FF;
                    }
                    ul li:last-child{
                        border-right: none;
                    }
                    .gern_info{
                        clear: both;
                        background: #fff;
                        padding: 30px 0;
                        padding-left: 20px;
                    }
                }
                .list_info_two{
                    // padding-left: 20px;
                    background: #fff;
                    padding-bottom: 20px;
                    .p1{
                        line-height: 43px;
                        background: #ddd;
                        padding-left: 20px;
                        font-size: 16px;
                    }
                    .p2{
                        padding-top: 20px;
                    }
                    p{
                        padding-left: 20px;                        
                        font-size: 14px;
                    }
                }
                //教育经历
                .list_info_three{
                    background: #fff;
                    padding-bottom: 20px;
                    .p1{
                        line-height: 43px;
                        background: #ddd;
                        padding-left: 20px;
                        font-size: 16px;
                    }
                    .p2{
                        padding-top: 20px;
                    }
                    p{
                        padding-left: 20px;                        
                        font-size: 14px;
                    }
                }
                .list_info_for{
                    height: 150px;
                }
                
            }
        }
    }
}

</style>
