const asyncHandler = (fn) => (req, res, next) => 
    Promise.resolve(fn(req,res,next)).catch(next);

module.exports = asyncHandler;

// This middleware is used to avoid repeating the try/catch block on each async middleware