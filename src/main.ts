import { browserDynamicPlatform  } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

let platformRef = browserDynamicPlatform ()

platformRef.bootstrapModule(AppModule)
