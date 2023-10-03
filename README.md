# Antimatter Dimensions: Quantum Panic v0.0.3: Accidental overflow
A mod of the original Antimatter Dimensions made by Hevipelle and more.
It is not required to have played vanilla (the original game) before this, but some things may be confusing if you haven't.

## Run

To run the game locally, you will need to install
[Node.js](https://nodejs.org/) (LTS suggested).

First, run the following command in your terminal (or command line) while being
inside the checked out repository:

```
npm ci
```

After all the packages are installed, start up the game:

```
npm run serve
```

This will make the game served via your localhost, and the playable link will
be displayed in your terminal. The server **doesn't** need to be restarted
after you've made changes - just reload the page. The server **can**
occasionally crash, so check your terminal from time to time and run `serve`
again if needed.
