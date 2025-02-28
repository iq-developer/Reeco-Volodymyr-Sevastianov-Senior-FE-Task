# Reeco - Volodymyr Sevastianov - Senior FE Task

## Slider Component 1.1 (React, Next, Typescript, Tailwind)

Component that takes a list of objects and renders each one.
Slider supports “infinite” types of objects by DynamicComponent.
In this task I use 2 (Product card and Chip) as examples.

1. Navigation Arrows – when the slider is at the beginning or the end, only the opposite arrow is diplayed. Otherwise, both are displayed.
2. Support 2 slider movements:
   a. Move by item.
   b. Move by “X” pixels - currently only used when last card displays partially, then click on "Next" button moves it for the distance to show it fully.

   To develop advanced "Move by “X” pixels" feature, more details needed (what triggers this feature and how it should work). So it can be implemented in next version of the slider.

3. Support generic list of objectsh:
   a. Product card – a box displaying the product name, description and image.
   b. Chip – A chip contains the name of category: Fresh Produce, Beverage, etc.
4. Support switching between vertical and horizontal layout via prop.

Additional features:

- Responsiveness (even full width for horisontal orientation)
- Display many items (For horisontal orientation)
- Error handling (if some component object missed properties)
- Dark/Light theme support

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
