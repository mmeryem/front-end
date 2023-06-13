import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-navire',
  templateUrl: './create-navire.component.html',
  styleUrls: ['./create-navire.component.scss']
})
export class CreateNavireComponent {
  toppings = this.formBuilder.group({
    oui: false,
    
  });
  public navireForm!: FormGroup;
  public navireIdToUpdate!: number;
  //public isUpdateActive: boolean =false;


  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute ) {}

  ngOnInit() : void{
    this.navireForm = this.formBuilder.group({
      IdNavire : [''],
      Nomnavire: [''],
      Codenavire: [''],
      Callsign: [''],
      Nombredeguresabord: [''],
      Nlloyd: [''],
      Vitesse: [''],
      Jaugebrute: [''],
      Type: [''],
      Jaugenette: [''],
      Tonnageportenlourd: [''],
      Armateur: [''],
      TirantdEau: [''],
      Consignataire: [''],
      NavireRégulier: [''],
      Lignemaritime: [''],
      PortdAttache: [''],
      Pavillon: ['']
    })
  }
  Enregistrer(){
    console.log(this.navireForm.value);
  }
 

  
// fillFormToUpdate(navire:) {
//     this.navireForm.setValue({
//         Nomnavire:navire.Nomnavire,
//         Codenavire: navire.Codenavire,
//         Callsign: navire.Callsign,
//         Nombredeguresabord: navire.Nombredeguresabord,
//         Nlloyd:navire. Nlloyd,
//         Vitesse:navire.Vitesse,
//         Jaugebrute: navire.Jaugebrute,
//         Type: navire.Type,
//         Jaugenette: navire.Jaugenette,
//         Tonnageportenlourd: navire.Tonnageportenlourd,
//         Armateur: navire.Armateur,
//         TirantdEau: navire.TirantdEau,
//         Consignataire: navire.Consignataire,
//         NavireRégulier: navire. NavireRégulier,
//         Lignemaritime:navire.Lignemaritime,
//         PortdAttache: navire.PortdAttache,
//         Pavillon: navire.Pavillon
//     })


  }



