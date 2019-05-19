'use strict';
const md5 = require('md5');
const svgCaptcha = require('svg-captcha'); // 引入验证
const Service = require('egg').Service;

class ToolsService extends Service {
  async captcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 32,
      background: '#cc9966',
    });
    this.ctx.session.code = captcha.text;
    return captcha;
  }

  async md5(str) { return md5(str); }
  async getTime() {
    const d = new Date();
    return d.getTime();
  }
}

module.exports = ToolsService;
