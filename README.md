# custom-canvas-inheritance

The real intention of this repository is to share a safe, relatively non-verbose and scalable way of working with inheritances without having to modify the prototypes.


The code has the canvas element as an example. Specifically, CanvasRenderingContext2D. Where the objective was to somehow inherit all the methods available to him and at the same time to be able to create customizable methods.

If you run the code:

```sh
git clone https://github.com/gabrielmedeirossouza/custom-canvas-inheritance.git
cd custom-canvas-inheritance
npm install
npm run serve
```

Open http://localhost:3000/ and you should see this:

![Alt text](./hero.png?raw=true "Title")
