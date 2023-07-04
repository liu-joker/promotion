<template>
    <div class="pro_container">   
        <div class="home_banner">
            <img class="banner_bg" src="../../assets/image/bg.png" alt="">  
            <div class="banner_swiper">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide>
                        <img class="silder_img" src="../../assets/image/Banner.png" alt="">
                    </swiper-slide>   
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="login_out" @click="login_out=true" v-show="token">
                <img src="../../assets/image/login_out.png" alt="">
            </div>
        </div>        
        <div class="page_home">
         <div class="cash_container">
            <div class="cash_btn btn_def" @click="toCharge('cash-page')">
                <div>充值</div>
                <div class="btn_en">RECHARGE</div>
            </div>
            <div class="cash_btn cash_on btn_def" @click="toCashOut('charge-page')">
                <div>提现</div>
                <div class="btn_en">WITHDRAWAL</div>
            </div>
         </div>
         <div class="btn_def btn_lg" @click="toAdmin">
            <div>代理后台</div>
            <div class="btn_en">Proxy backend</div>
         </div>
         <div class="page_title">
            <div class="page_title_cn">客户交易实时显示</div>
            <div class="page_title_en">Real time display of customer transactions</div>
         </div>
         <div class="cash_water">
            <vue-seamless-scroll :data="dataList" class="warp" :class-option="defaultOption">
               <div class="cash_htumb" v-for="(i,index) in dataList" :key="index">
                <div class="cash_point">
                    <img src="../../assets/image/point.png" alt="">
                </div>
                <div class="cash_text" >
                    <div class="cash_zn">{{i.type=='cut'?'充值':'提现'}}</div>
                    <div class="cash_en text_en">{{ i.type=='cut'?'RECHARGE':'Withdrawal'}}</div>
                    <div class="cash_id">{{ i.id }}</div>
                </div>
                <div class="cash_msg" >
                    <div class="cash_amount " :class="i.type=='cut'?'amount_cut':'amount_add'">{{ i.type=='cut'?'-':'+' }} {{ i.amount }}</div>
                    <div class="cash_time">{{ i.date }}</div>
                </div>
               </div>              
           </vue-seamless-scroll>


          </div>
          <div class="btn_share" @click="share">
            <div class="btn_def btn_lg">
            <div>分享</div>
            <div class="btn_en">share</div>
          </div>
          </div>
        
         
        </div>
        
        <div class="login_model" v-show="!token&&next_to">
            <div class="moldel_bg">
                <div class="login_title">
                <div class="login_zn">登录</div>
                <div class="login_en">login</div>
            </div>
            <div class="login_input">
                <input type="text" v-model="userId" placeholder="userId">
            </div>
            <div class="login_input">
                <input type="text" v-model="key" placeholder="secret">
            </div>
            <div class="login_msg">登录游戏查看密钥</div>
            <div class="login_btn">
                <div class="btn_can btn_def btn_model" @click="next_to=false">
                    <div>取消</div>
                    <div class="text_en">CANCEL</div>
                </div>
                <div class="btn_def btn_model" @click="login">
                    <div>确定</div>
                    <div class="text_en">confirm</div>
                </div>
            </div>
            </div>
            
        </div>
<!-- 退出登录 -->
         <div class="login_model" v-show="login_out">
            <div class="moldel_bg">
                <div class="login_title">
                <div class="login_zn">退出登录？</div>
                <div class="login_en">login out?</div>
            </div>
        
            <div class="login_btn">
                <div class="btn_can btn_def btn_model" @click="login_out=false">
                    <div>取消</div>
                    <div class="text_en">CANCEL</div>
                </div>
                <div class="btn_def btn_model" @click="loginOut">
                    <div>确定</div>
                    <div class="text_en">confirm</div>
                </div>
            </div>
            </div>
            
        </div>
        <div class="login_model" v-show="show_code">
            <div id="qrcode" ref="courseInfo">
                <div class="close" @click="show_code=false">
                    <img src="../../assets/image/guanbi.png" alt="">
                   
                </div>
              
            </div>
            <div class="save_text">
                <div class="btn_def" @click="saveImg">
                    <div>保存图片</div>
                    <div class="text_en">Save Picture</div>
                </div>
            </div>
        </div>
        <div class="ecode_model" v-show="server_qrCode">
            <div class="ecode_content">
                <div class="close" @click="server_qrCode=false">
                    <img src="../../assets/image/guanbi.png" alt="">
                </div>
                <div class="ecode_img">
                    <img src="../../assets/image/qrcode.png" alt="">
                
                </div>
                <div class="ecode_text">
                    <div>请先添加客服</div>
                   <div class="ecode_en">Please contact customer service</div>
                </div>
            </div>
            
        </div>
        <!-- <remote-js src="https://luckylami.oss-ap-southeast-3.aliyuncs.com/image/qrcode.min.js"></remote-js> -->
    </div>
    
</template>

<script>
import moment from 'moment'
import {getToken,setToken,setUrl,getUrl} from '../../utils/tool'
import QRCode from 'qrcodejs2'
import html2canvas from 'html2canvas';

export default {
    name: 'PromotionDownloadPage',
    inject:['reload'],
    data() {
        return {
            key:'',
            userId:'',
            token:getToken(),
            url:'',
            show_code:false,
            next_to:false,
            server_qrCode:false,
            login_out:false,
            swiperOptions:{
                // 需要调整Swiper组件的所有属性都在swiperOptions中定义即可
                pagination:'.swiper-pagination',
                // 循环不间断图片连在一起
                // loop:true,
                // 循环时间(毫秒)
                autoplay:2000,
                // 展示多少张图片
                // slidesPerView:4,
                // 图片间的间隔
                spaceBetween :20
            },
            dataList: [],
            qrcode:'',
        



        };
    },
    created(){
        // setToken('eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMDEzMzgiLCJpYXQiOjE2ODc5MzQwMTUsImV4cCI6MTY4ODAyMDQxNX0.BDeRfqyoNIbrftYoUUN5oP1LQyZprD4acN074L31rJU')
       this.getData()
    //    this.token = getToken()
    // console.log('token',this.token)
    //    console.log('randomDate',this.randomDate())
    },

    mounted() {
      let qrcode =  new QRCode(document.getElementById("qrcode"), {
                    // text: 'http://web.luckylami.com/lmmyweb/download.html?invite=VmWTOP&from=gmweb', // 更改为你的链接
                    text:this.url,
                    width: 200,
                    height: 200,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    // correctLevel : QRCode.CorrectLevel.H
      });
      this.qrcode = qrcode
    },

    methods: {
        toCharge(){
            if(!this.token){
                this.next_to = true
                return
            }
            this.$router.push('/charge-page')
        },
        toCashOut(){
            if(!this.token){
                this.next_to = true
                return
            }
         this.server_qrCode = true
        
        
            // this.$message('Please contact customer service')
            // this.$router.push('/cash-page')
        },
        toAdmin(){
            if(!this.token){
                this.next_to = true
                return
            }
            this.$router.push('/agentAdmin')
        },
        randomDate(m,d){
            // 随机生成0-11的数字
            // const randomMonthNum = Math.floor(Math.random * 11);
            // 随机生成1-30数字
            // const randomDateNum = Math.ceil(Math.random() * 30);
            // 随机生成1-24 数字
            const randomHourNum = Math.ceil(Math.random() * 24);
            // 随机生成1-60 数字
            // const randomMinuteNum = Math.ceil(Math.random() * 60);         
            return moment()
                .month(m)
                .date(d)
                .hour(randomHourNum)
                .minutes(Math.ceil(Math.random() * 24))
                .seconds(Math.ceil(Math.random() * 24))
                .format('YYYY-MM-DD HH:mm:ss');
        },
        // 生成滚动交易数据
        getData(){
            let data = []
            // let startMonth = moment().startOf('month').toDate();
            
            let now = moment().valueOf()
            let value =0
            console.log('startMonth',now);
            // let month = moment().month()
            // let today = moment().date()
            let count = 0
            for(let i=0;i<1000;i++){
                count = count+1
                let num =  Math.ceil(Math.random() * 10);
                value = Number((num*12300+value).toFixed())
                let  value_time = Number((now - value).toFixed())
                let code = ''+parseInt(Math.random()*1000000);
                // console.log('code',code)
                let reg = /^(\d{1})\d+(\d{1})$/;
                code = code.replace(reg, "$1 **** $2");
                let obj = {}
                let time = moment(value_time).format('YYYY-MM-DD HH:mm:ss') 
                obj.id = code
                // console.log('time',time,value)
                // if(count<=10){
                //    time = this.randomDate(month,today-1)
                // }else{
                //     time = this.randomDate(month,today-(count/10))
                // }
                
                // let dataValue =Number( moment(time).startOf('seconds').format('x'))
               
                obj.date = time
                // obj.dataValue = dataValue
                
                if(0<num &&num<=2){
                 
                    obj.amount = 10
                }
                if(2<num&&num<=4){
                    obj.amount = 50
                }
                if(4<num&&num<=6){
                    obj.amount = 100
                }
                 if(6<num&&num<=8){
                    obj.amount = 200
                }
               if(8<num) {
                    obj.amount = 300
                }
  
                if(num % 2 == 0 ){
                    obj.type = 'add'
                }else{
                    obj.type = 'cut'
                }
                
                data.push(obj)
              
            }
            
            // let dataList = data.sort((a, b) => a.dataValue - b.dataValue);
            let dataList = this.sortKey(data,'dataValue')
            // console.log('data',data,dataList)
            this.dataList = dataList
        },

        sortKey(array,key){
                return array.sort(function(a,b){
                    var x = a[key];
                    var y = b[key];
                    return ((x>y)?-1:(x<y)?1:0)
                })
        },
        login(){
            let userId = this.userId
            let key = this.key
            if(!userId){
                this.$message({
                    message: 'Please fill in userId',
                });
                return
            }
            if(!key){
                this.$message({
                    message: 'Please fill in secret',
                });
                return
            }
            this.$axiosApi.getToken(userId,key).then(res=>{
               console.log(res)
                if(res.code == 200){
                    setToken(res.data.apiToken)
                    setUrl(res.data.url)
                    this.next_to = false
                    this.token=res.data.apiToken

                    this.$message({
                    message: '登录成功',
                   });
                   
                }
               
            })
        },
        share(){
            if(!this.token){
                this.next_to = true
                return
            }
            
            this.show_code = true
            this.url = getUrl()
            this.qrcode.makeCode(this.url)
            console.log('url',this.url)
           
        
        },
        loginOut(){
            let that = this
            let loadingInstance = this.$loading.service();
            setTimeout(() => {
                setToken('');
                setUrl('');
                loadingInstance.close();
                that.$message('已退出登录')
                that.login_out = false
                that.reload()
             
            }, 1500);

           
            
        },
      
        // 生成海报方法
        saveImg () {
        html2canvas(this.$refs.courseInfo).then(canvas => {
            let link = document.createElement('a')
            link.href = canvas.toDataURL()
            link.setAttribute('download', 'coupon.png')
            link.style.display = 'none'
            document.body.appendChild(link)
            link.click()
        })
    },





    },
    computed: {
    defaultOption() {
      return {
        step: 2, // 数值越大速度滚动越快
        limitMoveNum: this.dataList.length, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },

};
</script>

<style lang="scss" scoped>
.page_home{
    display: flex;
    flex-direction: column;
    .cash_container{
        border-radius: 5px;
        background:#fff;
        margin-top:68px;
        padding:20px 15px;
        display: flex;
        justify-content: space-between;
        .cash_btn{
            width:145px;        
            // border-radius: 6px;
            // background: #07C160;
            // font-weight:600;
            // font-size:16px;
            // padding:5px 0;
            .btn_en{
                font-size:10px;
            }
        }
        .cash_on{
            align-self: flex-end;
            background:#FCB40B;
        }
    }
    .cash_water{
        overflow: hidden;
        max-height:350px;
        .cash_htumb{
            width:100%;
            background:#fff;
            color:#333;
            font-size:14px;
            display: flex;
            align-items: center;
            margin-bottom:10px;
            height:75px;
            border-radius: 5px;
            .cash_point{
                width:60px;
                height:40px;
            }
            .cash_text{
              text-align: left;
              padding:10px 0;
              .cash_id{
                color:#ADADAD;
                font-size:12px;
                margin-top:5px;
              }

            }
            .cash_msg{
                padding:10px 15px 10px 0;
                
                flex:1;
                text-align: right;
            
                .cash_amount{
                    font-size:20px;
                    font-weight: 600;
                }
                .amount_add{
                    color:#07C160;
                }
                .amount_cut{
                    color:#FCB40B;
                }
                .cash_time{
                  margin-top:10px;
                  color:#ADADAD;
                  font-size:12px;
                }
            }
        }

    }
}
.home_banner{
    width:100%;
    // height:160px;
    border-radius: 0 0 1.875rem 1.875rem;
    background: #07C160;
    position:relative;
    .banner_bg{
        width:100%;
        height:auto;
    }
    .banner_swiper{
        position:absolute;
        top:105px;
        left:0px;
        right:0px;
        height:125px;
        .silder_img{
            width:100%;
            height: auto;
        }
    }
    .login_out{
        position:absolute;
        top:10px;
        right:20px;
        width:32px;
        height:32px;
        >img{
            width: 100%;
            height:auto;
        }

    }
    
}
.login_model{
    position:fixed;
    top:0%;
    left:0;
    right:0;
    bottom:0;
    background:rgba($color: #000000, $alpha: .5);
    
    .save_text{
        position: absolute;
        top:480px;
        width:50%;
        left:25%;
        font-size: 14px;
        .btn_def{
           border-radius: 22px; 
        }

    }
    z-index:99;
    .moldel_bg{
        position:absolute;
        top:30%;
        left:20px;
        right:20px;
        background:#fff;
        border-radius: 5px;
        padding:20px;
        z-index:999;
    }
    .login_title{
        font-size:20px;
        color:#333;
        font-weight: 600;
        .login_en{
            font-size:12px;
        }

    }
    .login_input{
        width:100%;
        height:40px;
        margin:15px 0 5px;
        >input{
            height:100%;
            padding-left:5px;
        }
    }
    .login_msg{
        font-size:10px;
        color:#FF445E;
        text-align: left;
    }
    .login_btn{
        margin-top:10px;
        display: flex;
        justify-content: space-between;
        .btn_model{
            width:48%;
            .text_en{
                font-weight: 500;
            }
        }
        .btn_can{
            background:#F5F4F4;
            color:#ADADAD;
           
        }
    }
}
#qrcode{
    width:200px;
    height:200px;
   position:fixed;
   top:200px;
   left:calc(50% - 125px);
   background:#fff;
   border-radius: 5px;
   padding:30px 25px 25px;
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