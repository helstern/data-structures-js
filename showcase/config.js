var config = require('12factor-config');

var cfg = config({
    //redisUrl : {
    //    env      : 'REDIS_URL',
    //    type     : 'string', // default
    //    required : true
    //},
    logfile : {
        env      : 'KTIRIO_LOG_FILE',
        type     : 'string',
        default  : '/var/log/ktirio.log',
        required : false
    },
    port : {
        env      : 'KTIRIO_PORT',
        type     : 'integer',
        default  : '8000',
        required : true
    },
    debug : {
        env      : 'KTIRIO_DEBUG',
        type     : 'boolean',
        default  : false
    },
    env : {
        env      : 'NODE_ENV',
        type     : 'enum',
        values   : [ 'development', 'test', 'staging', 'production' ]
    }
});

module.exports = cfg;
