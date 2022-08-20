import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-new-produits',
  templateUrl: './new-produits.component.html',
  styleUrls: ['./new-produits.component.css']
})
export class NewProduitsComponent implements OnInit {
  imageSrc!: string;
  bur!:Produit;
  fritte:boolean=true;
   myForm = new FormGroup({
    nom: new FormControl(),
    prix: new FormControl(),
    image: new FormControl(),
    fileSource: new FormControl()
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  get f(){
    return this.myForm.controls;
  }

  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.myForm.patchValue({
           fileSource: reader.result
        });
   
      };
   
    }
  }
   
  submit(){
      if (this.bur) {
        
      }
    // console.log(this.myForm.value);
    this.http.post('http://localhost:8000/api/burgers', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }

  fritteP(){
    this.fritte = false;
  }
  disabl(){
    this.fritte = true;
  }
}
