import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peopleForm!: FormGroup
  teste: boolean = true
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleForm = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    })
  }

  handleSubmit(){
    return this.peopleService.createPeople(this.peopleForm.value).subscribe(() => console.log("Boa!"))
  }

}
