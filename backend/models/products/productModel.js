const Product = require('./productSchema');

exports.getProducts = async (req, res) => {

  try {
    const data = await Product.find()
    res.status(200).json(data)
    console.log(data)
  }
  catch {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Something went wrong when fetching the products',
      err
    })
  }
}

exports.getProductById = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, product) => {

      if(err) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'You made a bad request'
        })
      }

      if(!product) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Oooops, the product does not exists'
      })
    }

    Product.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message || 'Internal server error'
      })
    })

  })
}

exports.createProduct = (req, res) => {
  

  Product.exists({ name: req.body.name }, (err, result) => {

    if(err) return res.status(500).json(err)

    if(result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'A product by that name already exists, please update product instead'
      })
    }

    Product.create({
      name: req.body.name,
      short: req.body.short,
      desc: req.body.desc,
      price: req.body.price,
      image: req.body.image,
      stock: req.body.stock
    })
    .then(data => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Product created successfully',
        data
      })
    })
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create product',
        err
      })
    })

  })
}

exports.updateProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {

    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(!result) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'Oooops, the product does not exist'
      })
    }

    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'You have updated the product successfully',
          data
        })
      })
      .catch(err => {
        if(err.code === 10000) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'A product by that name already exists',
            err
          })
        }

        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update the product',
          err
        })
      })

  })
}

exports.deleteProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {

    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(!result) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'Ooops, the product does not exist'
      })
    }

    Product.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'Product has been successfully deleted'
      })
    })
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to delete the product',
        err
      })
    })
  })
}