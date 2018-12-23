#include "ImageAdapter.h"
#include "typedef.h"
#include <math.h>

ImageAdapter::ImageAdapter() {

}

ImageAdapter::ImageAdapter(Napi::Object imageData) {
    uint32_t width = imageData.Get("width").As<Napi::Number>().Uint32Value();
    uint32_t height = imageData.Get("height").As<Napi::Number>().Uint32Value();
    uint8_t* data = imageData.Get("data").As<Napi::TypedArrayOf<uint8_t>>().Data();

    cv::Mat myImg(height, width, CV_8UC4, data);
    this->cvImg = myImg;

    this->toGrayscale();
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
        cv::Point currentPoint(x, y);

        Pixel pixel = this->cvImg.at<Pixel>(currentPoint);

        pixel = 255 - pixel;

        this->cvImg.at<Pixel>(currentPoint) = pixel;
      }
    }
}

void ImageAdapter::toGrayscale() {
    cv::Mat grayscale;
    cv::cvtColor(this->cvImg, grayscale, cv::COLOR_RGBA2GRAY);
    cv::cvtColor(grayscale, this->cvImg, cv::COLOR_GRAY2RGBA);
}

void ImageAdapter::contourCC() {
    for(int y=0; y<this->cvImg.rows; y++) {
      for(int x=0; x<this->cvImg.cols; x++) {
        cv::Mat window;
        cv::Point currentPoint(x, y);
        int size = 3;

        float mean = 0;
        float stdev = 0;

        window = this->getWindowForPixel(currentPoint, 3);

        mean = cv::sum(window);
        mean = mean / (size*size);

        for(int k=0; k<window.rows; k++) {
            for(int i=0; i<window.cols; i++) {
                cv::Point windowPoint(i, k);

                stdev += std::pow((window.at<Pixel>(windowPoint) - mean), 2);
            }
        }

        stdev = stdev / (size*size);
        stdev = std::sqrt(stdev);
      }
    }
}

cv::Mat ImageAdapter::getWindowForPixel(cv::Point pixel, int windowSize) {
    int offset = (windowSize - 1) / 2;
    cv::Point topLeftCorner(pixel.x - offset, pixel.y - offset);
    cv::Size size(windowSize, windowSize);

    cv::Mat windowRGBA(this->cvImg, cv::Rect(topLeftCorner, size)).clone();
    cv::Mat windowGray;

    cv::cvtColor(this->cvImg, windowGray, cv::COLOR_RGBA2GRAY);

    return windowGray;
}