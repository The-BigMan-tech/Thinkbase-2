import { services } from './src/data/services';
import * as CustomIcons from './src/components/CustomIcons';

console.log('Services:', services.map(s => ({ title: s.title, icon: s.icon })));
console.log('CustomIcons Exports:', Object.keys(CustomIcons));

services.forEach(s => {
  if (['Gears', 'AnalysisBoard'].includes(s.icon)) {
    if (CustomIcons[s.icon + 'Icon']) {
      console.log(`✅ ${s.title}: Icon '${s.icon}' matches export '${s.icon}Icon'`);
    } else {
      console.error(`❌ ${s.title}: Icon '${s.icon}' has no matching export in CustomIcons.tsx`);
    }
  }
});
