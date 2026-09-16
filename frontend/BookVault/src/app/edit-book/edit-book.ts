import { Component } from '@angular/core';
import { BookService } from '../services/BookService';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-book',
  imports: [FormsModule],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.css',
})
export class EditBook {

  newBook: any = {

    id:0,
    title: "",
    author:"",
    publicationDate: ""
  }

  constructor(private bookservice : BookService , private router : Router , private route : ActivatedRoute){}

 

  ngOnInit(){

     const id = Number(this.route.snapshot.paramMap.get("id"));

    this.bookservice.getBookById(id).subscribe({

      next:(data:any)=>{

        this.newBook = data
        this.newBook.publicationDate = this.newBook.publicationDate?.split("T")[0]
      },error : (error: any) => {

        console.error('An Error Occured:', error);
      }
    })

  }

  save(){

   this.bookservice.saveBook(this.newBook).subscribe({

    next:(data)=>{

      this.newBook = data
      this.router.navigate(["/dashboard"])
    },
    error:(error)=>{

      console.log("An error Occured", error)
    }

   })
  }

  
cancel(){

  this.router.navigate(["/dashboard"])
}

}
