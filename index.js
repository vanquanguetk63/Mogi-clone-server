var express = require('express');
var app = express();
// var port = 8080;
// var authRoute = require('../server/routes/auth.route');
var userRoute = require('../server/routes/user.route');
var addressRoute = require('../server/routes/address.route');
var typeRoute = require('../server/routes/type.route');
var postRoute = require('../server/routes/post.route');
var buyRoute = require('../server/routes/buy.route');
var houseRoute = require('../server/routes/house.route');
var rentRoute = require('../server/routes/rent.route');
var searchRoute = require('../server/routes/search.route');
var adminRoute = require('../server/routes/admin.route');

const upload = require('./multer');
const cloundinary = require('./cloundinary');
const fs = require('fs');

// app.listen(port, function() {
//     console.log("server is opened At " + port );
// });
app.listen(process.env.PORT || 3000);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.use('/api/auth', authRoute);

app.use('/api/user', userRoute);

app.use('/api/address', addressRoute);

app.use('/api/type', typeRoute);

app.use('/api/post', postRoute);

app.use('/api/buy', buyRoute);

app.use('/api/house', houseRoute);

app.use('/api/rent', rentRoute);

app.use('/api/search', searchRoute);

app.use('/api/admin', adminRoute);


app.use('/upload-images', upload.array('image'), async (req, res) => {
  const uploader = async (path) => await cloundinary.uploads(path, 'Images');

  if (req.method === 'POST')
  {
    const urls = []

    const files = req.files

    for (const file of files) {
      const { path } = file
      const newPath = await uploader(path)
      urls.push(newPath)

      fs.unlinkSync(path)
    }
    
    res.status(200).json({
      message:'Upload thành công',
      data: urls
    })
  } else {
    res.status(405).json({
      err:'Upload không thành công'
    })
  }
})

