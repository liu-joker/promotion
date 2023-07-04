<template>
  <div class="pro_container">
    <div class="page_banner">
            <div class="banner_top">
                <div class="top_back" @click="goBack">
                    <img src="../../assets/image/back.png" alt="">
                </div>
                <div class="top_title">
                    <div>添加银行卡</div>
                    <div class="title_en">add bank card</div>
                </div>
            </div>
         
        </div>
    <div class="page_home">
        <div class="page_title">
            <div class="page_title_cn">填写银行卡信息</div>
            <div class="page_title_en">Fill in bank card information</div>
          </div>
        <div class="acrd_input_cont">
            <div class="card_input">
                <div class="input_lebal">银行卡号：</div>
                <input v-model="bank.bankCard" type="text" placeholder="请输入银行卡号">
            </div>
            <div class="card_input">
                <div class="input_lebal">开户银行：</div>
                <input v-model="bank.bankName" type="text" placeholder="请输入开户银行">
            </div>
            <div class="card_input">
                <div class="input_lebal">开户人姓名：</div>
                <input v-model="bank.userName" type="text" placeholder="请输入开户人姓名">
            </div>
            <div class="card_input">
                <div class="input_lebal">预留手机号：</div>
                <input v-model="bank.phone" type="text" placeholder="请输入预留手机号">
            </div>

            
          
        </div>
        <div class="btn_def btn_lg" style="margin-bottom:20px;background: #07C160;">
            <div>添加银行卡</div>
            <div class="btn_en">add bank card</div>
          </div>
    </div>
    
  </div>
</template>
<script>

export default {
    name:'addCard',
    data(){
        return{
            bank:{
                bankCard:'',
                bankName:'',
                userName:'',
                phone:'',
            }
        }
    },
    created(){

    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.page_banner{
    height:100px;
    background:#FCB40B;
    .top_back{
        top: 20px !important;

    }
    .title_en{
      font-size:12px;
   }
}

.page_home{
  border-radius: 25px 25px 0 0;
  position:absolute;
  top:80px;
  left:0;
  right:0;
  background:#F8F8F8;
  .acrd_input_cont{
   .card_input{
      height:50px;
      color:#333;
      position: relative;
      margin-bottom:15px;
      input{
        padding-left:106px;
        background:#fff;
        border:none;
      }
      .input_lebal{
        font-size: 14px;
        position:absolute;
        top:14px;
        left:15px;
        font-weight: 500;
      }
   }
  }
}
</style>