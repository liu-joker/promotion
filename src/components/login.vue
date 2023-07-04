<template>
  <div>
    <div class="login_model">
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
                <div class="btn_can btn_def btn_model">
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
  </div>
</template>

<script>
import{getToken,setToken} from '../utils/tool'
export default {
    data(){
        return{
            userId:'',
            key:'',
            token:getToken(),
        }
    }
}
</script>

<style lang="scss" scoped>
.login_model{
    position:fixed;
    top:0%;
    left:0;
    right:0;
    bottom:0;
    background:rgba($color: #000000, $alpha: .5);
    
    
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
</style>