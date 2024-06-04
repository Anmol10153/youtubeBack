const asyncHandler = (fn) = async (req, res, next) =>{
  try {
    await fn(req, res, next)
  } catch (error) {
    console.log("facing error",error);
    res.status(error.code || 404).json({
      success: false,
      message: error.message
    })
  }
}


export { asyncHandler }
