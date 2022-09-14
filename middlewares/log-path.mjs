const log_path = (req, res, next) => {
    console.log(req.path)
    next();
}

export {log_path}