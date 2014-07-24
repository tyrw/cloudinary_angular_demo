1. clone repo
2. add file `app/js/config.js`:
```
$.cloudinary.config({
  cloud_name: 'YOURCLOUDNAME',
  api_key: 'YOURAPIKEY',
  upload_preset: "YOURUPLOADPRESET"
})
```
3. `npm install`
4. `cd app`
5. `bower install`
6. `cd ..`
7. `node server.js`
