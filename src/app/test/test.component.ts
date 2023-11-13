
import { HttpClient, HttpEventType, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  formLogin!:FormGroup;
  constructor(private httpClient: HttpClient, private fb : FormBuilder) { }
  ngOnInit(): void {
    this.formLogin=this.fb.group({
      imageName :this.fb.control(""),
    })
    
  }

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName1: any;

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    alert(JSON.stringify(this.selectedFile))
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8081/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
     this.imageName1=this.formLogin.value.imageName;
    this.httpClient.get<any>('http://localhost:8081/image/get?imageName='+ this.imageName1)
      .subscribe({next : data => {
        this.retrieveResonse = data;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }}
    );
    }
  }
       
  
