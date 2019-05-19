/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1557959673170_4390';

  // add session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 864000,
    httpOnly: true,
    encrypt: true,
    renew: true, //  延长会话有效期
  };

  // add your middleware config here
  config.middleware = [ 'adminauth' ];
  config.adminauth = { match: '/admin' };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 多模板引擎这么配置
  exports.view = {
    mapping: {
      '.html': 'ejs',
      '.nj': 'nunjucks',
    },
  };
  // 配置mongose连接mongodb数据库
  exports.mongoose = {
    client: {
      url: 'mongodb://47.104.64.78/eggcms',
      options: {},
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
