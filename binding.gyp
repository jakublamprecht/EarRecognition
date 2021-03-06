{
  "targets": [{
    "target_name": "earImgProcessing",
    "dependencies": [
      "<!(node -p \"require('node-addon-api').gyp\")"
    ],
    "include_dirs": [
      "<!@(node -p \"require('node-addon-api').include\")",
      "<(module_root_dir)/vendor/OpenCV/include",
      "<(module_root_dir)/vendor/OpenCV/include/opencv",
      "<(module_root_dir)/vendor/OpenCV/include/opencv2"
    ],
    "libraries": [
      "<(module_root_dir)/vendor/OpenCV/x64/vc14/lib/opencv_world320.lib"
    ],
    "sources": [
      "<(module_root_dir)/src/cpp/main.cc",
      "<(module_root_dir)/src/cpp/ImageAdapter.cc"
    ],
    "defines": [
      "NAPI_DISABLE_CPP_EXCEPTIONS"
    ],
    "copies": [{
      "destination": "<(PRODUCT_DIR)",
      "files": [
        "<(module_root_dir)/vendor/OpenCV/x64/vc14/bin/opencv_world320.dll"
      ]
    }]
  }]
}
