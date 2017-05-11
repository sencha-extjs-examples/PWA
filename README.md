# PWA

A demo of the Progressive Web App support in Ext JS 6.5 and Sencha Cmd 6.5.

## To run

You will need to download [Sencha Ext JS](https://www.sencha.com/products/extjs). We
recommend extracting Ext JS into a `"sencha-sdks"` folder in your home directory.

Once Ext JS is extracted, run these commands:

    cd client
    sencha app install ~/sencha-sdks
    sencha app build --dev
    cd ../server
    npm install
    npm start

On Windows the "~" part of the path will be replaced by something like "C:\Users\Me\".

You should now be able to point your browser to [http://localhost:8082/](http://localhost:8082/).

## Run Production Build

To run a production build, run these commands:

    cd client
    sencha app build
    cd ../server
    NODE_ENV=production npm start

This will run a production build and start the server with a path to the production build.
You should now be able to point your browser to [http://localhost:8082/](http://localhost:8082/).

## HTTPS

When the node server is started, it will check if there are any SSL certificates in the `certs`
directory. If not, a non-secure only server will be started. If there is, it will start both
a non-secure and a secure server. You can generate self-signed localhost certificates by running:

    cd server
    npm run ssl

This will prompt you a few questions, you can accept the defaults except for the **Common Name**
prompt. For this prompt, enter `localhost`. Once completed, there will be a `server.crt` and
`server.key` in the `certs` directory. Now when you run `npm start`, it will detect these and
start both servers. You can then point your browser to the [non-secure](http://localhost:8082/)
or [secure server](https://localhost:8082/).

**Note:** *Self signed certificates are not trusted and should not be used in production. The
browser will warn you of this and you must opt into allowing the self signed certificate.*
