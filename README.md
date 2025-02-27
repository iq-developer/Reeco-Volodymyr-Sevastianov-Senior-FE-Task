# Reeco - Volodymyr Sevastianov - Senior FE Task

## Slider Component

Component that takes a list of objects and renders each one.
Slider supports “infinite” types of objects, in this task I use 2 as examples.

1. Navigation Arrows – when the slider is at the beginning or the end, show only the opposite arrow. Otherwise, show both.
2. Support 2 slider movements:
   a. Move by item.
   b. Move by “X” pixels - currently only used when last card displays partially, then click on "Next" button moves it for the distance to show it fully.
3. Support generic list of objectsh:
   a. Product card – a box displaying the product name, description and image.
   b. Chip – A chip contains the name of category: Fresh Produce, Beverage, etc.
4. Orientation – horizontal layout.

## Run project locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
