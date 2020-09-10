<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" class="register-box">
            <h3 class="register-title">欢迎注册</h3>
            <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="form.password_confirmation" type="password"></el-input>
            </el-form-item>
            <el-form-item label="类型">
                <el-radio v-model="form.provider"  label="students">学生</el-radio>
                <el-radio v-model="form.provider" label="teachers">教师</el-radio>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { studentRegister } from '../../api/student'
    import { teacherRegister } from '../../api/teacher'
    import { setToken } from '../../utils/auth'

    export default {
        name: "Register",
        components: {
        },
        data() {
            return {
                form: {
                    name:"",
                    email:"",
                    password:"",
                    password_confirmation: "",
                    provider: "students",
                }
            }
        },
        methods: {
            onSubmit() {
                let register = this.form.provider === "students" ? studentRegister(this.form) : teacherRegister(this.form)
                register.then((response) => {
                    let token = response.data.data
                    this.$store.commit('SET_TOKEN', {token})
                    setToken(token).then(() => {
                        this.$notify({
                            title: "成功",
                            message: "注册成功, 请登录",
                            type: "success"
                        })
                        this.$router.push({name: "Home"})
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .register-box {
        border: 1px solid #DCDFE6;
        width: 350px;
        margin: 80px auto;
        padding: 35px 35px 15px 35px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        box-shadow: 0 0 25px #909399;
    }

    .register-title {
        text-align: center;
        margin: 0 auto 40px auto;
        color: #303133;
    }
</style>