/**
 * Created by suxiao on 2017/7/19.
 */
const express = require('express');
const router = express.Router();

const Users = require('../model/users');
const Articles = require('../model/articles');

router.post('/', async (req, res, next) => {
  console.log(req.body);
  Users.find({}, (err, users) => {
    if (err) {
      console.log(err)
    } else {
      res.send('users')
      console.log(users);
    }
  })
  // res.json({
  //   status: '0',
  //   message: 'admin'
  // })
  next();
})

router.get('/users', async (req, res, next) => {
  try {
    Users.find({}, (err, users) => {
      if (err) {
        console.log(err)
      } else {
        res.json(users);
        // res.send('users')
        console.log('-------users----------');
        console.log(users);
      }
      // res.end();
      // next();
    })
  } catch (err) {
    console.log('-------users2222----------');
    next(err)
  }

})
// 获取文章
router.get('/article', async (req, res, next) => {
  try {
    Articles.find({}, (error, article) => {
      if (error) {
        console.log(error)
      } else {
        console.log(article);
      }
    })
  } catch(err) {
    next(err);
  }
})
// 新增文章
router.post('/article/add', async (req, res, next) => {
  const id = req.body._id;
  console.log('-----------article-----------');
  const newArtilce = new Articles(req.body);
  console.log(newArtilce);
  try {
    Articles.find({_id: id}, (err, article) => {
      if (err) {
        console.log(err)
      } else {
        if (article.length === 0) {
          newArtilce.save().then( ret => {
            console.log(ret);
            res.json(ret);
          }, error => {
            console.log(error);
            res.json(error)
          })
        }
      }
    })
  } catch(err) {
    next(err);
  }
})
// 更新文章
router.put('/article/update/:id', async (req, res, next) => {
  try {
    Articles.findOneAndUpdate({_id: req.params.id}, req.body, (error, article) => {
      if (error) {
        console.log(error)
      } else {
        res.json(article);
        console.log(article);
      }
    })
  } catch(err) {
    next(err);
  }
})

// 删除文章

router.post('/article/delete/:id', async (req, res, next) => {
  try {
    Articles.findOneAndRemove({_id: req.params.id}, req.body, (error, article) => {
      if (error) {
        console.log(error)
      } else {
        res.json(article);
        console.log(article);
      }
    })
  } catch(err) {
    next(err);
  }
})

module.exports = router;