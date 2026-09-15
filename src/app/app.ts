import { Component } from "@angular/core";

@Component({
  imports: [],
  selector: "app-root",
  styleUrl: "./app.css",
  templateUrl: "./app.html",
})
export class App {
  protected readonly appName: string = "HelpDesk TI";

  protected readonly description: string =
    "Soporte TI rapido, organizado y eficiente";
}
