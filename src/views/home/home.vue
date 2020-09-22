<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="老师列表">
                <el-table
                        :data="teachers"
                        style="width: 100%">
                    <el-table-column
                            prop="name"
                            label="名称">
                    </el-table-column>
                    <el-table-column
                            prop="email"
                            label="邮箱">
                    </el-table-column>
                    <el-table-column
                            prop="created_at"
                            label="加入时间">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="200">
                        <template slot-scope="scope">
                            <el-button @click="pushMessage()" type="text" size="small">发消息</el-button>
                            <el-button @click="subscribe(scope.row)" v-if="isShowSubscribe(scope.row)" type="text" size="small">关注</el-button>
                            <el-button @click="unsubscribe(scope.row)" v-if="isShowUnsubscribe(scope.row)" type="text" size="small">取消关注</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="学生列表">
                <el-table
                        :data="students"
                        style="width: 100%">
                    <el-table-column
                            prop="name"
                            label="名称">
                    </el-table-column>
                    <el-table-column
                            prop="email"
                            label="邮箱">
                    </el-table-column>
                    <el-table-column
                            prop="created_at"
                            label="加入时间">
                    </el-table-column>
                    <el-table-column
                            prop="created_at"
                            label="加入时间">
                        <template >
                            <el-button @click="pushMessage()" type="text" size="small">发消息</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import { allTeacher, unsubscribe, subscribe } from '../../api/teacher'
    import { allStudent } from '../../api/student'
    import { mapGetters } from 'vuex'
    import { setToken } from '../../utils/auth'

    export default {
        name: "Home",
        data() {
            return {
                students: [],
                teachers: []
            }
        },
        methods: {
            pushMessage() {
                this.$router.push({name: 'PushMessage'})
            },
            //是否显示订阅按钮
            isShowSubscribe() {
                if (this.provider !== 'students') {
                    return false;
                }
                return true
            },
            //是否显示取消订阅按钮
            isShowUnsubscribe() {
                if (this.provider !== 'students') {
                    return false;
                }
                return true
            },
            //订阅
            subscribe(row) {
                subscribe(row.id).then(() => {
                    this.$notify({
                        title: "成功",
                        message: "关注成功",
                        type: "success"
                    })
                })
            },
            //取消订阅
            unsubscribe(row) {
                unsubscribe(row.id).then(() => {
                    this.$notify({
                        title: "成功",
                        message: "取消关注成功",
                        type: "success"
                    })
                })
            }
        },
        created() { //数据初始化
            let tokenStr = this.$route.query.token
            if (tokenStr) {
                let token = JSON.parse(tokenStr)
                this.$store.commit('SET_TOKEN', {token})
                setToken(token)
            }
            allTeacher().then(response => {
                this.teachers = response.data.data
            })
            allStudent().then(response => {
                this.students = response.data.data
            })
        },
        computed: {
            ...mapGetters([
                'provider'
            ]),
        }
    }
</script>

<style scoped>

</style>