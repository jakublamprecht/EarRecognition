{
  "targets": [{
    "target_name": "earImgProcessing",
    "include_dirs" : [
      "<!(node -e \"require('nan')\")"
    ],
    "sources": [
      "./src/cpp/main.cc"
    ]
  }]
}
