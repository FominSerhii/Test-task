import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  modo(value: string){
	  switch(value) {
	    case "en":
	      this.switchLanguage('en');
	      break;
	    case "fr":
	    	this.switchLanguage('fr')
	      break;
	    case "ar":
	      this.switchLanguage('ar')
	      break;
	  }
	}

}
