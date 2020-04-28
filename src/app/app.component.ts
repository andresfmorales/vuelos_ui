import { Component } from "@angular/core";
import { VueloService } from "./services/services";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.translate.addLangs(["es", "en"]);
    this.translate.setDefaultLang("es");
    //this.translate.use("en");
  }

  ngOnInit(): void {}
}
