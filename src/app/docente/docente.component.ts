import { Component } from '@angular/core';
import { Docente} from '../docente';
import { DOCENTE } from '../mock-docente';


@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent {
constructor(){

}



 docentes= DOCENTE;
 selectedDocente?:Docente;

onSelected(docente:Docente): void{
  this.selectedDocente = docente;

}
}
