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

We need a store front token.  First step is to create an Admin token with scope to manage tokens

#### Admin Token
Advanced Settings >> API Accounts

1. Click Create API Account >> Create V2/V3 API Token
2. Click Manage for Storefront API Tokens

#### Storefront Token
Use https://developer.bigcommerce.com/api-reference/store-management/tokens/api-token/createtoken

```$xslt
channel_id: 1,
expires_at: {some timestamp in the future},
allowed_cors_origins: [
    "http://nuxt.test"  <-- Note can't use localhost, or nuxt.dev:3000
]
```

Big commerce make headless really hard to develop because they don't work with standard nuxt development setups

So you can create a line in your hosts file (On mac /etc/hosts) like this
```$xslt
    127.0.0.1       nuxt.test
```

Then because you can't use that token for a port, you can set the port to 80.

But you have to run your as sudo.  This is a big no no, but yolo.