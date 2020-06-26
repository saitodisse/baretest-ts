## Why this fork

- using tsc-watch for faster test feedback
- using yarn instead npm
- updated package.json dependencies
- using @types/baretest

# Watch

```shell
yarn clean:min && yarn run tsc-watch --onSuccess "node ./lib/sum.test.js"
yarn clean:min && yarn run tsc-watch --onSuccess "node ./lib/sub.test.js"
```