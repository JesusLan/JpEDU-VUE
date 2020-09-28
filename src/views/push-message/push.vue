<template>
    <div id="chart">
        <el-row>
            <el-col :span="16">
                <div class="chat-box">
                    <div v-for="(item, i)  in messages" :key="i">
                        <div class="clearfix">
                            <div class="chat-content">
                                <p class="content">{{item}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8" class="">
                <el-card class="box-card">
                    <div class="input-group">
                        <input id="btn-input" type="text" name="message" class="form-control input-sm" placeholder="在这里输入要发送的消息..." v-model="newMessage" @keyup.enter="sendMessage">

                        <span class="input-group-btn">
                            <button class="btn btn-primary btn-sm" id="btn-chat" @click="sendMessage">
                                发送
                            </button>
                        </span>
                    </div>
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>


<script>


    import http from '../../utils/http'
    import Echo from 'laravel-echo'


    export default {
        name: 'PushMessage',
        components: {
        },
        data () {
            return {
                messages: [],
                newMessage: '',
                message: ''
            }
        },
        created(){
            var _self = this;
            document.onkeydown = function(){
                if(window.event.keyCode === 13 && this.newMessage.length == 0){
                    _self.sendMessage();
                }
            }
        },
        methods: {

            sendMessage() {
                this.$emit('messagesent', {
                    message: this.newMessage
                });

                http.post('/api/push',{message: this.newMessage}).then(response => {
                    console.log(response.data);
                });

                this.newMessage = ''
            }

        },
        mounted: function() {
            window.Pusher = require('pusher-js');
            window.Echo = new Echo({
                broadcaster: 'pusher',
                key: 'be458db12f56d69b3913',
                cluster: 'mt1'
            });
            window.Echo.channel('push')
                .listen('PublicMessageEvent', (e) => {
                    let msg = e.message
                    this.messages.push(msg)
                })
        },
    }


</script>

<style scoped>
    .alarm {
        background-color: green;
        padding: 50px;
    }
    .warning {
        background-color: red;
        font-size: 18px;
    }

    .chat-box {
          border: 1px solid rgba(0, 0, 0, 0.4);
          border-radius: 5px;
          width: 90%;
          height: 80vh;
          background-color: rgba(255,128,0, 0.2);
          margin: 20px;
          overflow: auto
      }

    .box-card {
        margin-top: 20px;
        width: 90%;
    }
    .clearfix:after{
        content: '';
        display: block;
        clear: both;
        zoom: 1;
    }
    .chat-content {
        margin: 10px;
        padding: 5px;
    }
    .content {
          margin-left: 10px;
          width: 100%;
          background-color: #888;
          color: #fff;
          height: 35px;
          line-height: 35px;
          border-radius: 5px;
          padding-left: 10px;
    }

</style>