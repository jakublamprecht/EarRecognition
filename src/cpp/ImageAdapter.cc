#include "ImageAdapter.h"

ImageAdapter::ImageAdapter() {

}

ImageAdapter::ImageAdapter(Napi::Object imageData) {
    uint32_t width = imageData.Get("width").As<Napi::Number>().Uint32Value();
    uint32_t height = imageData.Get("height").As<Napi::Number>().Uint32Value();
    uint8_t* data = imageData.Get("data").As<Napi::TypedArrayOf<uint8_t>>().Data();

    cv::Mat myImg(height, width, CV_8UC4, data);
    this->cvImg = myImg;
}

ImageAdapter::~ImageAdapter() {

}

cv::Mat ImageAdapter::getMat() {
    return this->cvImg;
}


Napi::Uint8Array ImageAdapter::toCanvasImageData(Napi::Env env) {
    uint32_t width = this->cvImg.cols;
    uint32_t height = this->cvImg.rows;

    Napi::ArrayBuffer arrayBuffer = Napi::ArrayBuffer::New(env, this->cvImg.data, width*height*4);
    Napi::Uint8Array canvasImageData = Napi::Uint8Array::New(env, width*height*4, arrayBuffer, 0, napi_uint8_clamped_array);

    return canvasImageData;
}

void ImageAdapter::invertColors() {
    for(int y=0; y<this->cvImg.rows; y++) {
      for(int x=0; x<this->cvImg.cols; x++) {
        cv::Vec<uint8_t, 4> pixel = this->cvImg.at<cv::Vec<uint8_t,4>>(cv::Point(x,y));

        pixel[0] = 255 - pixel[0];
        pixel[1] = 255 - pixel[1];
        pixel[2] = 255 - pixel[2];

        this->cvImg.at<cv::Vec<uint8_t,4>>(cv::Point(x,y)) = pixel;
      }
    }
}

void ImageAdapter::toGrayscale() {
    cv::Mat grayscale;
    cv::cvtColor(this->cvImg, grayscale, cv::COLOR_RGBA2GRAY);
    cv::cvtColor(grayscale, this->cvImg, cv::COLOR_GRAY2RGBA);
}
