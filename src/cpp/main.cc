#include <napi.h>
#include <opencv2/opencv.hpp>
#include "ImageAdapter.h"

// move preprocessing and other stuff to other files?

Napi::Promise edgeDetection(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::Promise::Deferred deferred = Napi::Promise::Deferred::New(env);

  if(info.Length() != 1) {
    deferred.Reject(
      Napi::TypeError::New(env, "Wrong number of arguments").Value()
    );
  } else if (!info[0].IsObject()) {
    deferred.Reject(
      Napi::TypeError::New(env, "Argument is expected to be an Object").Value()
    );
  } else {
    Napi::Object canvasImageData= info[0].As<Napi::Object>();

    ImageAdapter image(canvasImageData);
    // do stuff here

    deferred.Resolve(image.toCanvasImageData(env));
  }

  return deferred.Promise();
}

// Boilerplate - just a test function

Napi::Promise invertColors(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::Promise::Deferred deferred = Napi::Promise::Deferred::New(env);

  if(info.Length() != 1) {
    deferred.Reject(
      Napi::TypeError::New(env, "Wrong number of arguments").Value()
    );
  } else if (!info[0].IsObject()) {
    deferred.Reject(
      Napi::TypeError::New(env, "Argument is expected to be an Object").Value()
    );
  } else {
    Napi::Object canvasImageData= info[0].As<Napi::Object>();

    ImageAdapter image(canvasImageData);
    image.invertColors();

    deferred.Resolve(image.toCanvasImageData(env));
  }

  return deferred.Promise();
}

Napi::String Method(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  return Napi::String::New(env, "world");
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "hello"),
              Napi::Function::New(env, Method));
  exports.Set(Napi::String::New(env, "invertColors"),
              Napi::Function::New(env, invertColors));
  return exports;
}

NODE_API_MODULE(earImgProcessing, Init)
