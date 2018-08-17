#ifndef IMAGE_ADAPTER_H
#define IMAGE_ADAPTER_H

#include <napi.h>
#include <opencv2/opencv.hpp>

// Class that helps connecting HTML Canvas with OpenCV Mat

class ImageAdapter {
    public:
        ImageAdapter();
        ImageAdapter(Napi::Object imageData);
        ~ImageAdapter();

        cv::Mat getMat();
        Napi::Uint8Array toCanvasImageData(Napi::Env env);

        void invertColors();
        void toGrayscale();

    protected:

    private:
        cv::Mat cvImg;
        uint8_t* data;
};

#endif
