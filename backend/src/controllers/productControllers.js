import { sql } from "../db"

export const createProduct = async (req, res) => {
  try {
    const {name, image, price} = req.body

    if (!name || !image || !price)
    {
      return res.status(400).json({success: false, message: "Missing fields!"})
    }

  const exists = await sql.query(`SELECT * FROM products WHERE name = $1 AND image = $2 AND price = $3`, [name, image, price])
  const len = exists.length
  if (len > 0)
  {
    return res.status(400).json({success: false, message: "You've already added this product before!"})
  }

  const created = await sql.query(`INSERT INTO products(name, image, price) VALUES ($1, $2, $3)`, [name, image, price])

  return res.status(200).json({success: true, message: created})

  } catch(error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }

}

export const getAllProducts = async (req, res) => {
  try {

    const products = await sql.query(`SELECT * FROM products`)

    return res.status(200).json({success: true, message: products})

  } catch(error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }

}

export const getProduct = async (req, res) => {
  try {
    const {id} = req.params



  } catch(error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }

}

export const updateProduct = async (req, res) => {
  try {

  } catch(error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }

}

export const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params

    if (!id) {
      return res.status(400).json({success: false, message: "ID not provided"})
    }

    const exists = await sql.query()
    const len = exists.length
    if (len === 0)
    {
      return res.status(400).json({success: false, message: "Product not found"})
    }

    

  } catch(error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})

  }

}