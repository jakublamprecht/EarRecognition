{
  "targets": [{
    "target_name": "earImgProcessing",
    "include_dirs": [
      "<!(node -e \"require('nan')\")",
      "<(module_root_dir)/vendor/OpenCV/include",
      "<(module_root_dir)/vendor/OpenCV/include/opencv",
      "<(module_root_dir)/vendor/OpenCV/include/opencv2"
    ],
		"libraries": [
      "<(module_root_dir)/vendor/OpenCV/x64/vc14/lib/opencv_world320.lib"
    ],
    "sources": [
      "./src/cpp/main.cc"
    ]
  }]
}
