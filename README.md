# DynamicModuleTest

DynamicModuleTest is just a basic project to see if I can dynamically load components into a [ReactFlow](https://reactflow.dev/) graph from a directory.

## Project Structure

Everything is under `src`, following the usual web project layout.

### `App.tsx`

Just contains a basic [ReactFlow](https://reactflow.dev/) graph and the `ComponentGallery.tsx` component.

### `useComponentList.tsx`

Handles importing all components from `nodedirectory`.

### `ComponentGallery.tsx`

Maps each imported component to an entry with an "Add to Graph" button.

### `useFlowComponents.tsx`

Similar to `useComponentList.tsx`, but returns it in the `{ [componentName]: componentReference }` format used by ReactFlow to map custom nodes properly.

### `nodedirectory`

This is where all the components that get dynamically loaded into the ReactFlow graph are stored.

## Project Goal

Just wanted to test out whether I could dynamically define and import components from `nodedirectory` into a ReactFlow graph without hardcoding them.
