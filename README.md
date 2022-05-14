<img src="https://user-images.githubusercontent.com/16405300/154925743-1a508544-73ab-461b-81b4-c642d8d14b98.PNG" width="100" height="100"> 

# Truecaller Blog

## Sections
+   [Description](#description)
+   [Project Worflow](#project-workflow)
+   [Local Installation](#local-installtion)
+   [Demo Video](#demo-video)
+   [Misc](#misc)

## Description

This is blog website built on vue 3 which supports unit+e2e testing.
It incorporates usage of both options API and Composition API[Vue SFC has also been incorporated]

## Project workflow

This Projects consists of 2 routes:

  + Blog List/ Home page
  + Blog Detail View

The Home page incorporates pagination and gives user ability to select categories of blogs user wants to view.

## Local Installtion

_***NOTE: For application to work as expected please use the current deployed contract as the moralis cloud functions and the sync event is connected to the currently deployed contract on rinkeby test net._



Clone this repository and follow the steps mentioned below.

```
The project is also available on the following github url

   Ecommerce application          :   https://fictional-dollop-ca9c20ca.pages.github.io/vendor
   Report submission application  :   https://fictional-dollop-ca9c20ca.pages.github.io/expense
   
```
   
   
### Install Truffle

```
$ npm install -g truffle
```
*Note: To avoid any strange permissions errors, we recommend using [nvm](https://github.com/nvm-sh/nvm).*

### Install other dependancies

```
$ npm install
```

### Building UI

Please refer to :

   Ecommerce application          :   [commerce-client README](/commerce-client/README.md)
   
   Report submission application  :   [client README](/client/README.md)


### Environment Variables

Create a .env file in the root folder

List of required _environment variables_ :

```
MNEMONIC=
PROVIDERURL=
MATIC_PROJECT_ID=
INFURA_PROJECT_ID=
```

### Local Migration

**Migrated contracts** are already **saved** in the respective client and commerce client folders which relates to the _ecommerce application_ and _expense report application_ respectively.

In case you want to do a fresh migration on a different network or run it on your local ganache instance please use the following command

```
$ $NETWORK=rinkeby npm run migrate
```

List of valid values for $NETWORK are:

+  `ganache_local` : local ganache server
    +   Required env variables are :
        +   PROVIDER_URL
        +   MNEMONIC
    
+  `mumbai` : uses matic to create contracts on polygon mumbai test net
    +   Required env variables are :
        +   MATIC_PROJECT_ID
        +   MNEMONIC

+  `rinkeby` : uses infura to create contracts on rinkeby test net
    +   Required env variables are :
        +   INFURA_PROJECT_ID
        +   MNEMONIC

+  `goerli` : uses infura to create contracts on goerli test net
    +   Required env variables are :
        +   INFURA_PROJECT_ID
        +   MNEMONIC

Currently the latest contracts are deployed on _rinkeby testnet_.

## Demo Video
https://user-images.githubusercontent.com/16405300/154923382-f11e52c3-6262-45db-9a2d-e4b8cabb0760.mov

## Misc

### Deployed address and block explorer link

Deployed contract's rinkeby address : 0x35B3391e8DE195336CbC89aA01aa228069Dbd477

Please use this [link](https://rinkeby.etherscan.io/address/0x35B3391e8DE195336CbC89aA01aa228069Dbd477) to verify the transactions on [rinkeby etherscan](https://rinkeby.etherscan.io).

### Tools and Libraries used
   +  Truffle
   +  Moralis
   +  Metamask
   +  React
   +  Vue
   +  openzepplin/contracts
   +  Infura [for rinkeby and goerli test net connection]
   +  Matic [for polygon testnet connection]

### License

MIT
