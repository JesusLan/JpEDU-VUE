<template>
    <div>
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="用户名" prop="username">
                <el-input type="text" placeholder="请输入邮箱" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="类型">
                <el-radio v-model="form.provider"  label="students">学生</el-radio>
                <el-radio v-model="form.provider" label="teachers">教师</el-radio>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登陆</el-button>
                <el-button type="primary" @click="lineLogin">Line登陆</el-button>
            </el-form-item>
        </el-form>

        <el-dialog
                title="温馨提示"
                :visible.sync="dialogVisible"
                width="30%"
                >
            <span>请输入账号和密码</span>
            <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
        </el-dialog>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { lineLoginUrl } from '../../api/line'

    export default {
        name: "Login",
        components: {
        },
        data() { // 将输入框绑定到data的数据中，即v-model，当文本框中输入数据时，data中的数据会实时更新
            return {
                form: {
                    username: '',
                    password: '',
                    provider: 'students'
                },
                // 表单验证，需要在 el-form-item 元素中增加 prop 属性
                rules: {
                    username: [
                        {required: true, message: '账号不可为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不可为空', trigger: 'blur'}
                    ]
                },

                // 对话框显示和隐藏
                dialogVisible: false

            }
        },
        methods: {
            ...mapActions([
                'loginHandle'
            ]),
            lineLogin() {
                window.location.href = lineLoginUrl(this.form.provider)
            },
            onSubmit() {
                this.loginHandle(this.form).then(() => {
                    this.$router.push({name: 'Home'})
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-box {
        border: 1px solid #DCDFE6;
        width: 350px;
        margin: 80px auto;
        padding: 35px 35px 15px 35px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        box-shadow: 0 0 25px #909399;
    }

    .login-title {
        text-align: center;
        margin: 0 auto 40px auto;
        color: #303133;
    }
</style>