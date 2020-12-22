# bc-nuxt

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Setup Big Commerce

### Tokens, tokens, tokens

We need a storefront token.  First step is to create an Admin token with scope to manage tokens

#### Admin Token
Advanced Settings >> API Accounts

1. Click Create API Account >> Create V2/V3 API Token
2. Click Manage for Storefront API Tokens

#### Storefront Token and .env file
Use https://developer.bigcommerce.com/api-reference/store-management/tokens/api-token/createtoken

```$xslt
channel_id: 1,
expires_at: {some timestamp in the future},
allowed_cors_origins: [
    "http://nuxt.test"  <-- Note can't use localhost, or nuxt.dev:3000
]
```

Create an .env file in the root of the project and add a token.

```$xslt
token={Add the token here}
```


#### Using the token
Big commerce make headless hard to develop because they don't work with standard nuxt development setups

So you can create a line in your hosts file (On mac /etc/hosts) like this
```$xslt
    127.0.0.1       nuxt.test
```
To point a _domain_ to your localhost.

Then because you can't use that token for a port, you can set the port to 80.

But you have to run your as _sudo_.  This is a big no no, but yolo.