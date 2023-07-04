<template>
    <div class="form_lang">
        <select @change="getLang($event)" v-model="lang" >
            <option value="zh-CN">中文</option>
            <option value="zh-EN">English</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'PromotionLang',

    data() {
        return {
            lang: 'zh-CN'
        };
    },

    mounted() {
        
    },

    methods: {
        getLang(e){
            console.log(e,this.lang)
            this.$i18n.locale = this.lang;
        }
    },
};
</script>

<style lang="scss" scoped>
.form_lang{
    position: absolute;
    top:1.25rem;
    right:1.25rem;
   
    z-index: 999;
    select{
        border-radius: .625rem;
    }
}
</style>