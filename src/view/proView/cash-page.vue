<template>
    <div class="pro_container">
        <div class="page_banner">
            <div class="banner_top">
                <div class="top_back" @click="goBack">
                    <img src="../../assets/image/back.png" alt="">
                </div>
                <div class="top_title">luck lami</div>
            </div>
            <div class="banner_point">
                <div class="amount_img">
                    <img  src="../../assets/image/amount.png" alt="">
                </div> 
                
                <!-- <div class="my_point">
                    <div> 我的积分</div>
                    <div class="point_en">My points</div>
                    <div class="point_count">3000.50</div>
                </div> -->
            </div>
        </div>

        <div class="page_home">
          <div class="page_title">
            <div class="page_title_cn">汇率换算</div>
            <div class="page_title_en">currency converter</div>
          </div>
          <div class="page_currency">
            <div class="currency_img">
                <img src="../../assets/image/currency.png" alt="">
            </div>
            <div class="currency_text">
                
                <div class="current_cur">1积分={{ amount}}</div>
                <div class="currency_select">
                    <select  v-model="currency" @change="getCurrency">
                        <option v-for="(i,index) in currency_options" :key='index' :value="i.currency">{{ i.currency }}</option> 
                    </select>
                </div>
            </div>
            <div class="cash_point">
                <div class="page_title" style="margin-top:0;">
                    <div class="page_title_cn">提现积分</div>
                    <div class="page_title_en">Withdrawal of points</div>
               </div>
               <!-- <div class="cur_point">
                当前积分余额
                <div class="cur_point_ico">
                    <img src="../../assets/image/gold.png" alt="">
                </div>
                66
               </div> -->
               <!-- <div class="page_input">
                <input type="text" placeholder="请输入USERID">
                <div class="input_ico">
                    <img src="../../assets/image/user.png" alt="">
                </div>
               </div>
               <div class="page_input">
                <input type="text" placeholder="请输入SECRET">
                <div class="input_ico">
                    <img src="../../assets/image/lock.png" alt="">
                </div>
               </div> -->
               <div class="point_list">
                <div class="point_tab" v-for="(i,index) in point_data" :key="index" 
                  :class="point==i.point?'choose_point':''" @click="getPoint(i.id)">
                    <div class="point_ico" >
                        <img src="../../assets/image/gold.png" alt="">
                    </div>
                  {{ i.point }}
                </div>
                
               </div>
               <div class="need_money ">预计到账金额：{{ amount_pay }} {{ currency }} </div>
            </div>
            <!-- <div class="cash_point">
                <div class="page_title" style="margin-top:0;">
                    <div class="page_title_cn">提现至</div>
                    <div class="page_title_en">Withdrawal to</div>
               </div>
               <div class="payment_list">
                <div class="payment_tab" @click="payment=1">
                    <div class="payment_ico">
                        <img src="../../assets/image/wechat.png" alt="" >                                    
                    </div>
                    <div class="paument_name">微信支付</div>  
                    <div class="paymet_choose">
                        <img src="../../assets/image/choose.png" alt="" v-if="payment==1">
                        <div class="paymet_no_choose" v-else></div>
                    </div>
                </div>
                <div class="payment_tab" @click="payment=2">
                    <div class="payment_ico">
                        <img src="../../assets/image/alipay.png" alt="">                                    
                    </div>
                    <div class="paument_name">支付宝</div>  
                    <div class="paymet_choose">
                        <img src="../../assets/image/choose.png" alt="" v-if="payment==2">
                        <div class="paymet_no_choose" v-else></div>
                    </div>
                </div>
                <div class="payment_tab" @click="payment=3">
                    <div class="payment_ico">
                        <img src="../../assets/image/bank.png" alt="">
                                                            
                    </div>
                    <div class="paument_name">银联支付</div>  
                    <div class="paymet_choose">
                        <img src="../../assets/image/choose.png" alt="" v-if="payment==3">
                        <div class="paymet_no_choose" v-else></div>
                    </div>
                </div>
               </div>
              
            </div> -->
          </div>
          <div class="btn_def btn_lg" style="margin-bottom:20px;background: #FCB40B;">
            <div>提现</div>
            <div class="btn_en">Withdrawal</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromotionCashPage',

    data() {
        return {
            currency_data:[],
            currency_options:[],
            currency:'',
            point:'',
            amount:'',
            amount_pay:'',
            point_data:[],
            payment:1,
           
            
        };
    },
    created(){
        this.getRechargeRatio()
    },
    mounted() {
        
    },

    methods: {
        goBack(){
            this.$router.go(-1)
        },
        getRechargeRatio(){
            this.$axiosApi.getRechargeRatio(2).then(res=>{
                let data = res.data
                this.currency_data = data
                // 去重
                let unique = data.filter((obj, index) =>data.findIndex((item) => item.currency === obj.currency) === index);                  
                this.currency_options = unique
                this.currency = unique[0].currency
                this.getCurrency()
                
            })

        },
        getCurrency(){
            console.log(this.currency)
            let currency = this.currency
            let data = this.currency_data
            let point_data = []
            data.map(v=>{
                if(v.currency==currency){
                    v.amount = (v.amount/100).toFixed(2)
                    // this.amount = v.amount
                    this.amount_pay = v.amount
                    let num = Number(v.amount)/v.point
                    this.amount = Math.ceil(num * 100) / 100;   
                    point_data.push(v)
                }
            })
            this.point_data = point_data
            this.getPoint(point_data[0].id)
            
        },
        getPoint(id){
            let point_data = this.point_data
            point_data.map(v=>{
                if(v.id == id){
                    this.point = v.point
                    // this.amount = v.amount
                    this.amount_pay = v.amount
                    let num = (Number(v.amount)/v.point)
                   
                    this.amount = Math.ceil(num * 100) / 100;  
                }
            })
        }

    },
};
</script>

<style lang="scss" scoped>
.page_home{
  border-radius: 25px 25px 0 0;
  position:absolute;
  top:160px;
  left:0;
  right:0;
  background:#F8F8F8;
  
}
</style>