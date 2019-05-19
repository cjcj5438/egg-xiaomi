'use strict';

const BaseController = require('./base.js');

class LoginController extends BaseController {
  async index() {
    await this.ctx.render('admin/login');
  }
  // 执行登录的方法  post
  async doLogin() {

    // 202cb962ac59075b964b07152d234b70
    const username = this.ctx.request.body.username;
    const password = await this.service.tools.md5(this.ctx.request.body.password);
    const code = this.ctx.request.body.code;
    console.log(typeof code);
    if (code.toUpperCase() === this.ctx.session.code.toUpperCase()) {
      const result = await this.ctx.model.Admin.find({ username, password });
      if (result.length > 0) {
        // 登录成功
        // 1、保存用户信息
        this.ctx.session.userinfo = result[0];
        // 2、跳转到用户中心
        this.ctx.redirect('/admin/manager');
      } else {
        await this.error('/admin/login', '用户密码不对');
      }
    } else {
      await this.error('/admin/login', '验证错误');
    }
    // await this.ctx.render('admin/index/home.nj', {
    //   ...this.ctx.request.body,
    // });
  }
  async loginOut() {
    this.ctx.session.userinfo = null;
    this.ctx.redirect('/admin/login');
  }
}

module.exports = LoginController;
