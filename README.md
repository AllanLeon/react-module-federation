# React Module Federation + NPM Packages Demo

This is an example project focused on sharing code via NPM packages and Module Federation.

## Project Structure 

Even though this is a monorepo, the folders are meant to represent separate "repositories" with their own dependencies to simulate that scenario for learning purposes.

* `host-app` is the main host application (React) that loads modules from the micro-frontends.
* `mfe-1`, `mfe-2` and `mfe-3` are micro-frontend applications (React) that expose different modules that are loaded by the host app (and between the micro-frontends too).
* `libraries-workspace` represents a Nx workspace for libraries that are shared across the main app and micro-frontends. It also includes its own Verdaccio NPM registry.

## Setup

This project was developed with Node v20.9.0. Other versions may work, but v20.9.0 is the recommended version to avoid compatibility issues.

### Setting up the applications

Each application (host and micro-frontends) can be set up as a typical [create-react-app](https://github.com/facebook/create-react-app) application and they have the default instructions in their README files.

But, they expect a NPM registry running locally at `http://127.0.0.1:4873` (this is configured in the `.npmrc` file). Instructions to set up the registry are down below.

### Setting up the libraries workspace

This can be set up as a typical [Nx](https://github.com/nrwl/nx) workspace and it has the default instructions in its README file. It has some extra scripts in `package.json` to publish the libraries into a NPM registry running locally.

A little extra in `libraries-workspace` is the `verdaccio` directory that contains the necessary configuration to run a NPM registry locally with [Verdaccio](https://github.com/verdaccio/verdaccio). It also includes a Makefile so the registry can be started and stopped easily via the commands `make verdaccio-run` and `make verdaccio-stop`.

### NPM registry

The NPM registry can be started by running the command `make verdaccio-run` in the `./libraries-workspace/verdaccio` folder.

After starting the registry, a user should be created via `npm adduser --registry http://127.0.0.1:4873/` to publish the packages into the registry.