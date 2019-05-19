class HttpResponse {
  static sendResponse(res, code, data) {
    return res.status(code).json({
      success: true,
      message: 'Request Successful 😃',
      data
    });
  }
}

export default HttpResponse;
