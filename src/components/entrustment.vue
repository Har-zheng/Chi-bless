<template>
    <div class="entrustement">
        <div class="container">
            <!-- 检索区域  -->
            <div class="row">
                <p class="p1">基本要求</p>
            </div>
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
            <!-- 福利待遇 -->
            <div class="row">
                <p class="p_title">福利待遇</p>
                <p class="p5">
                    <span><input type="radio">五险一金</span>
                    <span><input type="radio">年底双薪</span>
                    <span><input type="radio">绩效奖金</span>
                    <span><input type="radio">带薪年假</span>
                    <span><input type="radio">保住</span>
                    <span><input type="radio">弹性工作</span>
                    <span><input type="radio">餐补</span>
                    <span><input type="radio">节日福利</span>
                </p>
            </div>
            <!-- 职位描述 -->
            <div class="row">

                <p class="p_title">职位描述</p>
                <div class="duty">
                    <p>工作职责</p>
                    <textarea name="" id="" cols="30" rows="10">

                    </textarea>
                </div>
            </div>
            <!-- 备注信息 -->
            <div class="row">
                <p class="p_title">职位描述</p>
                <div class="duty">
                    <textarea name="" id="" cols="30" rows="10">
                    </textarea>
                </div>
            </div>
            <div class="row">
                <router-link to="/immediate"><p class="weituo">立即委托</p></router-link>
            </div>
        </div>
                        <!-- 底部区域 -->

        <div class="bottom">
            <p class="p1">2010-2018 版权所有 © 卡佑天行 粤沪ICP备12043601号-1 沪公安网备44190002000538号</p>
            <p class="p1">地址：南昌市南城街道莞太路111号民间金融大厦1号楼28楼</p>
        </div>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                
            }
        }
    }
</script>
<style scoped lang="less">
.entrustement{
    .p1{
        margin: 0;
        line-height: 40px;
    }
    .p5{
        background: #f5f5f5;
        line-height: 45px;
        padding-left: 20px;
    }
    .p_title{
        margin: 0;
        line-height: 40px;
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
        // 职位描述
        .duty{
            background: #f5f5f5;
            padding: 20px;
            textarea{
                display: inline-block;
                resize: none;
                width: 100%;
                height: 300px;
                max-width: 100%;
                max-height: 300px;
            }
        }
        .weituo{
            background: #2A7FFF;
            text-align: center;
            color: #fff;
            margin: 20px 0;
            line-height: 36px;
        }
}
</style>
