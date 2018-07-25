#include <napi.h>

Napi::Value invertColors(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if(info.Length() < 3) {
    Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
    return env.Null();
  }

  if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsTypedArray()) {
    Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
    return env.Null();
  }

  uint32_t width = info[0].As<Napi::Number>().Uint32Value();
  uint32_t height = info[1].As<Napi::Number>().Uint32Value();
  uint8_t* data = info[2].As<Napi::TypedArrayOf<uint8_t>>().Data();
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
