import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IdentificationService } from '../../services/identification.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Component({
  selector: 'app-identity-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './identity-search.component.html',
  styleUrl: './identity-search.component.css'
})
export class IdentitySearchComponent {
  imageData: string = 'assets/images/face.png';
  NIK: string;
  Name: string;
  DOB: string;
  activeTab: string = '';
  nikNumber: string = '';
  tokenValue: string = '';
  nikResValue: any = '';
  searchResult: SearchResult | null = null;
  demogs: _results | null = null;
  condition: boolean = false;


  constructor(private searchService: IdentificationService,private http: HttpClient) {
    this.activeTab = 'NIK';
    this.NIK = '';
    this.Name = '';
    this.DOB = '';
  }

  ngOnInit() {
   
    this.getImageBase64(this.imageData).subscribe(
      data => {
   //     this.imageData = data;
      },
      error => {
        console.error('Error reading image file:', error);
      }
    );
  }

  getImageBase64(filePath: string) {
    return this.http.get(filePath, { responseType: 'blob' })
      .pipe(map(blob => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
          reader.onerror = () => {
            reject('Unable to read file');
          };
        });
      }));
  }

  onActivatedTab(tabName: string) {
    this.activeTab = tabName;    
    console.log('Activating TAB in :', this.activeTab);
  }


  async onNIKSearch(arg0: any) {
    console.log('searching in :', this.activeTab);
    let statCode = '';
    let message = '';

    //Get URL status if its running or not.
    try {
      const responseTest = this.searchService.getStatus('LEWLITE');
      if (responseTest instanceof Promise) {
        // If resToken is a Promise, await its resolution
        this.tokenValue = await responseTest;
      } else {
        // If resToken is an Observable, subscribe to it to get the value
        this.tokenValue = await responseTest.toPromise();
      }
      console.log('GetStatus Log', this.tokenValue);

      if (this.tokenValue.includes("Up and Running")) {
        console.log('Up and Running');
      } else {
        console.log('Not running');
      }
    } catch (error) {
      message += (message.length > 0 ? '\n' : '') + error;
      alert("Error" + error);
    }


    if (this.activeTab.match("NIK")) {
      //Get SINGLE NIK record if its exist ot not.
      try {
        const resToken = this.searchService.getSingleNIK(this.nikNumber);

        if (resToken instanceof Promise) {
          // If resToken is a Promise, await its resolution
          this.nikResValue = await resToken;
        } else {
          // If resToken is an Observable, subscribe to it to get the value
          this.nikResValue = await resToken.toPromise();
        }
        this.searchResult = this.nikResValue.body;

        if (this.searchResult && this.searchResult.response) {
          const responseData = this.searchResult.response;

          this.condition = true;
          const data = JSON.parse((responseData) as unknown as string);
          this.demogs = data._results as _results;

          const base64ImageString = this.demogs.Face_data;
          this.imageData = `data:image/png;base64,${base64ImageString}`;

        } else {
          console.error('Response data is undefined or null');
        }

      } catch (error) {
        console.error('Error:', error);
      }
    }
    else if(this.activeTab.match("NAME"))
    {
      
    }





  }






}
export class SingleNIKRequest {
  NIK: string;

  constructor(nik: string) {
    this.NIK = nik;
  }
}



export interface SearchResult {
  Status: string;
  response: {
    _results: _results;
    _iris: {
      NIK: string;
      Left_iris_data: any; // Update types accordingly if you have them
      Right_iris_data: any; // Update types accordingly if you have them
    };
    _fingers: {
      NIK: string;
      Right_thumb_data: any; // Update types accordingly if you have them
      Right_index_data: any; // Update types accordingly if you have them
      Right_middle_data: any; // Update types accordingly if you have them
      Right_ring_data: any; // Update types accordingly if you have them
      Right_little_data: any; // Update types accordingly if you have them
      Left_thumb_data: any; // Update types accordingly if you have them
      Left_index_data: any; // Update types accordingly if you have them
      Left_middle_data: any; // Update types accordingly if you have them
      Left_ring_data: any; // Update types accordingly if you have them
      Left_little_data: any; // Update types accordingly if you have them
    };
    Status: any; // Update types accordingly if you have them
    ReturnCode: string;
  };
  Error: string | null;
}


export interface _results {
  Id: number;
  NIK: string;
  Score: number | null;
  Name: string;
  DOB: string;
  Gender: string;
  Prop: string;
  Kab: string;
  Kec: string;
  Kel: string;
  Tempat: string;
  Alamat: string;
  Agama: string;
  Statusperkawinan: string;
  Perkawinan: string;
  Berlaku: string;
  Face_data: string;
  Error: string | null;
}

export class MultiNIKRequest{
  constructor(private identitySearchService: IdentificationService) { }

  searchBulkNIK(): void {

    // You should replace these values with the actual data you want to send
   
    
  }

}

export interface MultiNIKResponse{
  
}