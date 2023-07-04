<template>
   <div class="pro_container">
        <div class="page_banner">
            <div class="banner_top">
                <!-- <div class="top_back" @click="goBack">
                    <img src="../../assets/image/back.png" alt="">
                </div> -->
                <div class="top_title">
                    <div>代理后台</div>
                    <div class="title_en">Proxy backend</div>
                </div>
                <div class="msg_content">
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>注册人数</div>
                            <div class="tab_title_en">Enrollment</div>
                        </div>
                        <div class="tab_count">{{ userData.downCount }}</div>
                    </div>
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>新增充值人数</div>
                            <div class="tab_title_en">Number of new first deposits</div>
                        </div>
                        <div class="tab_count">{{ userData.downSum }}</div>
                    </div>
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>累计活跃人数</div>
                            <div class="tab_title_en">Active population</div>
                        </div>
                        <div class="tab_count">{{ userData.active_user }}</div>
                    </div>
                </div>
                <div class="amount_content">
                    <div class="amount_all">
                        <div class="amount_tab">
                        <div class="amount_title">
                            <div>红利</div>
                            <div class="amount_en">dividend</div>
                        </div>
                        <div class="amount_count">{{ userData.rewardsPoint}}</div>
                    </div>
                    <div class="amount_tab">
                        <div class="amount_title">
                            <div>返水</div>
                            <div class="amount_en">rakeback</div>
                        </div>
                        <div class="amount_count">{{ userData.profitPoint}}</div>
                    </div>
                    </div>
                    <div class="msg_content">
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>总输赢</div>
                            <div class="tab_title_en">Total Win Loss</div>
                        </div>
                        <div class="tab_count">{{ userData.win }}</div>
                    </div>
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>投注</div>
                            <div class="tab_title_en">Betting</div>
                        </div>
                        <div class="tab_count">{{ userData.bet }}</div>
                    </div>
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>投注人数</div>
                            <div class="tab_title_en">Number of Bets</div>
                        </div>
                        <div class="tab_count">{{ userData.bet_user }}</div>
                    </div>
                </div>
                    
                </div>
            </div>
         
        </div>
        <!-- 日活跃 -->
        <div class="page_home">
          <div class="page_title" style="margin-top:150px;">
            <div class="page_title_cn">汇率换算</div>
            <div class="page_title_en">currency converter</div>
            <div class="date_conetnt">
                <div class="date_ico">
                    <img src="../../assets/image/date.png" alt="">
                </div>
                <div class="date_time">{{ now_time }}</div>
            </div>
          </div>
          <div class="msg_content">
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>注册人数</div>
                            <div class="tab_title_en">Enrollment</div>
                        </div>
                        <div class="tab_count">{{ userData.dayDownCount }}</div>
                    </div>
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>新增充值人数</div>
                            <div class="tab_title_en">Number of new first deposits</div>
                        </div>
                        <div class="tab_count">{{ userData.dayDownSum }}</div>
                    </div>
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>活跃人数</div>
                            <div class="tab_title_en">Active population</div>
                        </div>
                        <div class="tab_count">{{ userData.day_active_user}}</div>
                    </div>
          </div>
          <div class="amount_content">
                    <div class="amount_all">
                        <div class="amount_tab">
                        <div class="amount_title">
                            <div>红利</div>
                            <div class="amount_en">dividend</div>
                        </div>
                        <div class="amount_count">{{ userData.dayRewardsPoint }}</div>
                    </div>
                    <div class="amount_tab">
                        <div class="amount_title">
                            <div>返水</div>
                            <div class="amount_en">rakeback</div>
                        </div>
                        <div class="amount_count">{{ userData.dayProfitPoint }}</div>
                    </div>
                    </div>
                    <div class="msg_content">
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>总输赢</div>
                            <div class="tab_title_en">Total Win Loss</div>
                        </div>
                        <div class="tab_count">{{ userData.day_win }}</div>
                    </div>
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>投注</div>
                            <div class="tab_title_en">Betting</div>
                        </div>
                        <div class="tab_count">{{ userData.day_bet }}</div>
                    </div>
                    <div class="msg_tab">
                        <div class="tab_title">
                            <div>投注人数</div>
                            <div class="tab_title_en">Number of Bets</div>
                        </div>
                        <div class="tab_count">{{ userData.day_bet_user }}</div>
                    </div>
                </div>
                    
                </div>
         
        </div>
        <!-- <div class="ecode_model">
            <div class="ecode_content">
                <div class="close" @click="show_code=false">
                    <img src="../../assets/image/guanbi.png" alt="">
                </div>
                <div class="ecode_img">
                    <img src="../../assets/image/qrcode.png" alt="">
                
                </div>
                <div class="ecode_text">
                    <div>您当前还不是代理哦~ <br> 联系客服成为代理</div>
                    <div class="ecode_en">You are not currently an agent~<br> customer service to become an agent</div>
                </div>
            </div>
            
        </div> -->
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return{
            time:'',
            userData:{},
            show_code:false,
        }
    },
    created(){
        this.now_time = moment().format('YYYY/MM/DD')
        this.getData()
    },
    methods:{
        getData(){
            let time = this.time
            this.$axiosApi.userData(time).then(res=>{
              if(res.code==200){
                this.userData = res.data
              }
                
            })
        }
    }

}
</script>

<style lang="scss" scoped>
.page_banner{
    background:#FCB40B;
    .top_title{
    font-size:24px;
    .title_en{
        font-size:12px;
    }
  }
  
}
.msg_content{
    padding:10px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .msg_tab{
        padding:0 4px;
        position:relative;
        .tab_title{
            font-size:16px;
            font-weight: 500;
            min-height:60px;
            .tab_title_en{
                font-size:8px;
                font-weight: 300;
                
            }
        }
        .tab_count{
            font-size:26px;
        }
        &:nth-child(2){
            &::before{
                content:'';
                position: absolute;
                width:1px;
                left:0;
                top:20%;
                bottom: 20%;
                background:#fff;
            }
            &::after{
                content:'';
                position: absolute;
                width:1px;
                right:0;
                top:20%;
                bottom: 20%;
                background:#fff;
            }
        }
    }
}
.amount_content{
    padding:0 20px;
    z-index: 999;
    position: relative;
    
    border-radius: 5px;
    .amount_all{
        display: flex;
        justify-content: space-around;
        background:#fff;
        border-radius: 5px 5px 0 0;
        .amount_tab{
            width:40%;
            margin-top:12px;
            .amount_title{
                font-size:14px;
                color:#333333;
                .amount_en{
                    font-size:8px;
                }
            }
            .amount_count{
                color:#FCB40B;
                font-size:34px;
            }
        }
    }
    .msg_content{
        background:#fff;
        border-radius: 0 0 5px 5px;
    }
    .msg_tab{
        &:nth-child(2){
            &::before{     
                background:#E6E6E6;
            }
            &::after{             
                background:#E6E6E6;
            }
        }
    }
    .tab_title{
        color:#ADADAD;
    }
    .tab_count{
        color:#333;
    }
  }
.page_home{
  border-radius: 25px 25px 0 0;
  position:absolute;
  top:250px;
  left:0;
  right:0;
  background:#F8F8F8;
  .date_conetnt{
    position: absolute;
    top:10px;
    right:0px;
    padding:5px;
    display: flex;
    align-items: center;
    color:#333;
    font-size:12px;

    .date_ico{
        width:14px;
        height:14px;
        margin-right:5px;
        >img{
            width:100%;
            height:100%;
        }
    }
  }
  .msg_content{
    color:#333;
    background:#fff;
    border-radius: 5px;
    
    .msg_tab{
        &:nth-child(2){
            &::before{     
                background:#E6E6E6;
                bottom:0;
                top:50px;
            }
            &::after{             
                background:#E6E6E6;
                bottom:0;
                top:50px;
            }
        }
        .tab_title{
            font-size:14px;
        }
        .tab_count{
            color:#07C160;
            font-size:22px;
        }
    }
  }
  .amount_content{
    padding:0;
    margin-top:20px;
    border-radius: 5px;
    color: #fff;
    overflow: hidden;
    .amount_all{
        background:#07C160;
        border-radius: 0;
        .amount_title{
            color: #fff;
        }
        .amount_en{
            color: #fff;
        }
        .amount_count{
            color:#fff;
        }
    }
    .msg_content{
        background:rgba($color: #07C160, $alpha: .8);
        border-radius: 0;
        .tab_title{
            color:#fff;
        }
        .tab_title_en{
            color:#fff;
        }
        .tab_count{
            color:#fff;
        }
    }
  }
  
}
.ecode_model{
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index: 999;
    background:rgba($color: #000000, $alpha: .5);
    .ecode_content{
        position: absolute;
        top: 20%;  
        left:calc(50% - 131px);
        width:262px;
        .ecode_img{
            padding:15px;
            background:#fff;
            border-radius: 5px;
          
        }
        .ecode_text{
            margin-top:15px;
            font-size:16px;
            color:#fff;
            .ecode_en{
                font-size:12px;
            }
        }
        .close{
            width:20px;
            height:20px;
            position: absolute;
            top:5px;
            right:5px;
            >img{
                width:100%;
                height:100%;

            }
}
    }
  }
</style>