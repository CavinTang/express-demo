var config = {
    production:{
        servers:[
        {
            sshConfig: {
                host: '172.16.70.174',
                port: 22,
                username: 'admin',
                password: 'cavin@123',
                readyTimeout: 200000
            }
        },
        {
            sshConfig: {
                host: '172.16.70.173',
                port: 22,
                username: 'admin',
                password: 'cavin@123',
                readyTimeout: 200000
            }
        }]
    }
};

module.exports = config;