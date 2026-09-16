import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms"

type IncidentPriority = 'Baja' | 'Media' | 'Alta';


type IncidentStatus = 'Abierta' | 'En progreso' | 'Resuelta';


interface Incident {
  readonly id: number;
  title: string;
  description: string;
  priority: IncidentPriority;
  status: IncidentStatus;
}


@Component({
  imports: [FormsModule],
  selector: "app-root",
  styleUrl: "./app.css",
  templateUrl: "./app.html",
})
export class App {
  protected readonly appName: string = "HelpDesk TI";

  protected readonly description: string =
    "Soporte TI rapido, organizado y eficiente";



  protected newIncidentTitle: string = '';

  protected newIncidentDescription: string = '';

  protected newIncidentPriority:string = 'Media';

  protected newIncidentStatus:string = 'Abierta';




  protected clearForm(): void {
    this.newIncidentTitle = '';
    this.newIncidentDescription = '';
    this.newIncidentPriority = 'Media';
    this.newIncidentStatus = 'Abierta';
  }


  protected incidents: Incident[] = [
    {
      id: 1,
      title: 'Computador no enciende',
      description: 'El equipo de recepcion no responde al boton encendido',
      priority: 'Alta',
      status: 'Abierta',
    },
    {
      id: 2,
      title: 'Problemmas con impresora',
      description: 'La impresora de administracion no imprime documentos',
      priority: 'Media',
      status: 'En progreso',
    },
    {
      id: 3,
      title: 'Sin acceso al correo',
      description: 'El usuario no puede iniciar sesión en su correo institucional.',
      priority: 'Alta',
      status: 'Abierta',
    },
  ];


}
