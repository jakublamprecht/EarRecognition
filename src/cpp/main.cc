#include <nan.h>
#include <opencv2/opencv.hpp>

void showImg() {
  cv::Mat myMat;

  myMat = cv::imread("../../assets/img/450x650.png", 0);

  cv::namedWindow("My test window", 0);
  cv::imshow("My test window", myMat);

  cv::waitKey(0);
}

void Method(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::New("world").ToLocalChecked());
}

void Init(v8::Local<v8::Object> exports) {
  showImg();

  exports->Set(Nan::New("hello").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(Method)->GetFunction());
}

NODE_MODULE(earImgProcessing, Init)
