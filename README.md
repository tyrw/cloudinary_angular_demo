1. clone repo
2. `npm install`
3. `cd app`
4. `bower install`
5. add file `app/js/config.js`:

    $.cloudinary.config({
      cloud_name: 'YOURCLOUDNAME',
      api_key: 'YOURAPIKEY',
      upload_preset: "YOURUPLOADPRESET"
    })
