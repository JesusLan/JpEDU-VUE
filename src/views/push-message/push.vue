<template>
    <div>公共消息</div>
</template>

<script>
    import Echo from 'laravel-echo'
    import io from 'socket.io-client'

    export default {
        name: 'PushMessage',
        data () {
            return {
                isPlay: false,
                infos: []
            }
        },
        methods: {

        },
        mounted: function() {
            window.io = io;
            window.Echo = new Echo({
                broadcaster: 'socket.io',
                host: 'https://edujp-socketio.herokuapp.com/socket.io'
            });
            window.Echo.channel('push')
                .listen('PublicMessageEvent', (e) => {
                    alert('来了');
                    console.log(e);
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
</style>