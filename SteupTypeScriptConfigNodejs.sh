#!/bin/bash
echo 'Start TypeScript Dependence...';
sleep 3
yarn add --dev typescript
touch tsconfig.json

yarn add --dev @tsconfig/node18
yarn add --dev @types/node
yarn add --dev ts-node 
yarn add --dev eslint
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin