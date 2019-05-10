import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AnnonceService } from '../../services/annonce.service';
import { Annonce } from 'src/app/shared/models/annonce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-annonces',
  templateUrl: './add-annonces.component.html',
  styleUrls: ['./add-annonces.component.scss'],
})
export class AddAnnoncesComponent implements OnInit {
  addAnnonceForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private annonceService: AnnonceService
  ) {}

  ngOnInit() {
    this.addAnnonceForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      type: ['', [Validators.required]],
      //photos: '',
      city: '',
    });
  }

  onAdd() {
    this.annonceService
      .add(new Annonce(this.addAnnonceForm.value))
      .subscribe(response =>
        this.router.navigate(['annonces', 'details', response.id])
      );
  }
}
