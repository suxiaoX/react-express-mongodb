/*
 * @Author: leo 
 * @Date: 2017-08-17 10:21:46 
 * @Last Modified by: leo
 * @Last Modified time: 2017-10-24 14:35:15
 */

// const crypto = require('crypto');

/*
// 加密
function encrypto(str, secret) {
    const cipher = crypto.createCipher('ase192', secret);
    let enc = cipher.update(str, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
}

// 解密 
function decrypto(str, secret) {
    const decipher = crypto.createDecipher('ase192', secret);
    let dec = decipher.update(str, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}
*/

 // 管理员权限
 const adminRequired = function (req, res, next) {
     if (!req.session.user) {
         return next();
     }
     if (!req.session.user.isAdmin) {
        return next()
     }
 }

 // 需要登录
 const loginRequired = function(req, res, next) {
     if (!req.session || !req.session.user || req.session.user._id) {
        return next()
     }
 }

 // 判断是否登录
 const authUser = async (req, res, next) => {
     let currUser = null;
     if (!req.session.user) {
        return next()
     } else {
        const cookie = req.cookies['user-token'];
        if (!cookie) {
            req.session.user = null;
            return next();
        } else {
            currUser = req.session.user;
            if (!currUser) {

            }
        }
     }
 }

 const noSession = (req, res) => {
    if(!req.session || req.session.user) {
       res.redirect('login');
       return;
    }
 }

 module.exports = {
    adminRequired: adminRequired,
    loginRequired: loginRequired,
    authUser: authUser,
    noSession: noSession
 }