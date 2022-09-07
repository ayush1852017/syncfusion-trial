import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
registerLicense(
  'ORg4AjUWIQA/Gnt2VVhiQlFaclxJVHxKfkx0RWFbb1p6dl1MZV1BNQtUQF1hS35bdURjXXxbc3NdRGFZ'
);
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
