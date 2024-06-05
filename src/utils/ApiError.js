class ApiError extends Error{
  constructor(
    statusCode,
    message="Something went wrong",
    errors = [],
    stack=""
  ){
    super(message) //this should mandatoryly change
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false
    this.errors = errors

    if(stack){
      this.stack = stack
    } else{
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

// https://nodejs.org/api/errors.html

export {ApiError}
