import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  countries: any[] = [];
  selectedCountry: string = '';
  projectName: string = '';

  private countriesApiUrl = 'https://countriesnow.space/api/v0.1/countries/states';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.countriesApiUrl).subscribe(data => {
        // map the data array to only get the country names
        this.countries = data.data.map((countryObj: { name: any; }) => countryObj.name);
    });
}


addProject(): void {
  // Validate that the selected country is within the list of countries.
  if (this.countries.includes(this.selectedCountry)) {
    // Send POST request to your backend with the projectName and selectedCountry.
    const projectPayload = {
      name: this.projectName,
      address: {
        countryName: this.selectedCountry
      }
    };

    this.http.post('https://localhost:44325/projects/Add', projectPayload).subscribe(
      (response: any) => {
        console.log('Project added successfully!', response);
      },
      error => {
        console.warn('Error adding project:', error);
      }
    );
  } else {
    console.warn("Invalid country selected!");
  }
}


}
