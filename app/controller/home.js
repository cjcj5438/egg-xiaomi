'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('admin/index/home.nj', {
      username:
        'chenjing',
    });
    // this.ctx.bady = 'guanliyuan libiao';

    // const { ctx } = this;
    // ctx.body = 'hi, efrwetertgg';
  }
}

module.exports = HomeController;
