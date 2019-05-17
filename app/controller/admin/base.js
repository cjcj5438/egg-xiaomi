// 父类基础类11
'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success() {
    this.ctx.body = '成功';
  }
}

module.exports = BaseController;
