class HttpError {
  static throwErrorIfNull(res) {
    return res.status(400).json({
      success: false,
      message: 'Not Found 😆'
    });
  }

  static sendErrorResponse(res, code) {
    return res.status(code).json({
      success: false,
      message: 'An error occurred. Could not finish processing 🤥'
    });
  }
}

export default HttpError;
