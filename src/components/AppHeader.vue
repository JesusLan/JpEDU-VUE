<template>
    <el-header>
        <el-row>
            <el-col :span="18">
                <router-link to="/">JPEDU</router-link>
            </el-col>
            <el-col :span="6">
                <div class="right">
                    <el-button icon="el-icon-user-solid" type="primary" v-if="!isLogin" @click.native="login">登陆</el-button>
                    <el-button icon="el-icon-s-promotion" type="primary" v-if="!isLogin" @click.native="register">注册</el-button>
                    <el-dropdown v-if="isLogin">
                        <el-button type="primary">
                            <i class="el-icon-user-solid"></i>
                            <i class="el-icon-arrow-down el-icon--right"></i>
                            用户中心
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-s-tools" @click.native="personalCenter">我的资料</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-info" @click.native="logout">退出登陆</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex' // 引入 Vuex 辅助函数

    export default {
        name: 'AppHeader', // 组件名称
        data() {
            return {
            }
        },
        methods: {
            ...mapActions([ // ... 是拓展运算符，使用 [] 是解构赋值，将actions映射到methods
                "logoutHandle" // 将 this.logoutHandle() 映射为 this.$store.dispatch('logoutHandle')
            ]),
            personalCenter(){ // 判断个人中心跳转
                let name = this.provider === 'students' ? 'StudentPersonalCenter' : 'TeacherPersonalCenter'
                this.$router.push({name})
            },
            login () { //push 是路由的一个方法，用来跳转到一个新的地址
                this.$router.push({name: 'Login'})
            },
            register () {
                this.$router.push({name: 'Register'})
            },
            logout ()  {
                this.logoutHandle()
                this.$router.push({name: 'Login'})
            }
        },
        computed: {
            ...mapGetters([ // 将getters映射到computed，将 store 中的 getter 如 isLogin、provider 映射到局部计算属性,拿到的是数据，不是函数
                'isLogin', // 等价于 isLogin() { return this.$store.getters.isLgoin }
                'provider' // 等价于 provider() { return this.$store.getters.provider }
            ]),
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-header {
        background-color: #409EFF;
        color: #fff;
        line-height: 60px;
    }
    .el-button {
        border:none;
    }
    .right {
        float:right;
    }
    a {
        text-decoration:none;
    }
</style>