<template>
    <el-tabs type="border-card">
        <el-tab-pane label="个人信息">
            <el-row class="user-row">
                <el-col :span="2">
                    <strong>姓名</strong>
                </el-col>
                <el-col :span="22">
                    {{ me.name }}
                </el-col>
            </el-row>
            <el-row class="user-row">
                <el-col :span="2">
                    <strong>登录邮箱</strong>
                </el-col>
                <el-col :span="22">
                    {{ me.email }}
                    <el-input
                            placeholder="请输入登陆邮箱"
                            v-if="isShowBindEmail"
                            v-model="email">
                        <el-button slot="append" @click="bindEmail">绑定</el-button>
                    </el-input>
                </el-col>
            </el-row>
            <el-row class="user-row">
                <el-col :span="2">
                    <strong>Line</strong>
                </el-col>
                <el-col :span="22">
                    <span v-if="me.bind_line">已绑定</span>
                    <el-button type="text" v-if="!me.bind_line" @click="bindLine()">未绑定，点击绑定</el-button>
                </el-col>
            </el-row>
        </el-tab-pane>
        <el-tab-pane label="关注我的学生">
            <div v-for="student in students" :key="student.id">
                <el-row>
                    <el-col>
                        {{ student.name }}
                    </el-col>
                </el-row>
                <el-divider></el-divider>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import { me, students, bindEmail, bindLine } from '../../api/teacher'
    import { lineBindUrl } from '../../api/line'

    export default {
        name: "TeacherPersonalCenter",
        data() {
            return {
                email: '',
                me: {},
                isShowBindEmail: false,
                students: []
            }
        },
        methods: {
            bindLine() {
                window.location.href = lineBindUrl("teacher-bind")
            },
            bindEmail() {
                if (this.email) {
                    bindEmail(this.email).then(() => {
                        this.$notify({
                            title: "成功",
                            message: "绑定邮箱成功",
                            type: "success"
                        })
                        this.me.email = this.email
                        this.isShowBindEmail = false
                    })
                }
            },
            handleBind() {
                let bindResult = this.$route.query.result
                if (! bindResult || this.me.bind_line) {
                    return false
                }
                let result = JSON.parse(bindResult)
                if (!result.status) {
                    this.$notify({
                        title: "绑定失败",
                        message: result.message,
                        type: "warning"
                    })
                    return false
                }
                bindLine(result.oauth_id).then(() => {
                    this.$notify({
                        title: "成功",
                        message: "绑定Line成功",
                        type: "success"
                    })
                    this.me.bind_line = true
                })
            }
        },
        created() {
            me().then(response => {
                this.me = response.data.data
                this.email = this.me.email
                if (!this.email) {
                    this.isShowBindEmail = true
                }
                this.handleBind()
            })
            students().then(response => {
                this.students = response.data.data
            })
        }
    }
</script>

<style scoped>
    .user-row {
        margin-bottom: 15px;
    }
</style>