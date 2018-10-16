import logger from './core/logger/app-logger'
import config from './core/config/config.dev'

const port = config.serverPort;
logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

