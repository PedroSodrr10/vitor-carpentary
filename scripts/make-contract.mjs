import {site} from '../content/site.ts';
import {mkdirSync,writeFileSync} from 'node:fs';
mkdirSync('qa',{recursive:true});
writeFileSync('qa/contract.json',JSON.stringify({version:1,status:site.status,title:site.title,description:site.description,language:'en',h1:site.h1,requiredTexts:[site.h1,'Siding, roofing, trim, window and door installation for your home.',site.imageNote,'Every detail. Every part of home.',...site.services.flatMap(s=>[s.name,s.text]),'A home comes together in the details.','Let’s Talk About Your Next Project.',site.phone,site.email],requiredLinks:['#services','#details','#contact','#top',site.phoneHref,site.emailHref],sectionIds:['services','details','contact'],forbiddenTexts:['Licensed & Insured','Our Work','Testimonials']},null,2)+'\n');
