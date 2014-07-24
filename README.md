## Cloudinary demo for uploading and manipulating files

Allows you to run a local instance (via node.js) that will upload to your Cloudinary account and allow you to manipulate uploaded files.

1. clone repo
2. add file `app/js/config.js`:
```
$.cloudinary.config({
  cloud_name: 'YOURCLOUDNAME',
  api_key: 'YOURAPIKEY',
  upload_preset: "YOURUPLOADPRESET"
})
```
3) Install and run
```
npm install
cd app
bower install
cd ..
node server.js
```
