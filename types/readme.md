## How to configure esbuild loader

1. Copy `types.d.ts` to `src` folder of yor new app or lib.

Should be configured for each app and library to make possible importing files (.svg, .png, etc.)


Now you can import assets like this:
```ts
import telegramSvg from './assets/telegram.svg';
```
