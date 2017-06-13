# ng-sticky

Angular 4 Directive

## Check demo plunker
[Demo](https://embed.plnkr.co/zb2igm0xicoeKD9yzwhD/)

## Installation

To install this library, run:

```bash
$ npm install ng-sticky --save
```

## Consuming the library

Import library in any Angular 4 application by running:

```bash
$ npm install ng-sticky
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import NgStickyDirective
import { NgStickyDirective } from 'ng-sticky';

@NgModule({
  declarations: [
    AppComponent,
    NgStickyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the directive:

```xml
<div ng-sticky [offSet]="0" [addClass]="'is-sticky'">
  <div>menu</div>
</div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Jonas Medeiros](mailto:jonas.g.medeiros@gmail.com)
