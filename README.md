1. clone repo
2. add file `app/js/config.js`:
```
$.cloudinary.config({
  cloud_name: 'YOURCLOUDNAME',
  api_key: 'YOURAPIKEY',
  upload_preset: "YOURUPLOADPRESET"
})
```
`npm install`
`cd app`
`bower install`
`cd ..`
`node server.js`
