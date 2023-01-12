import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { Blog } from 'Blog';
import { Blogger } from 'Blogger';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private title : string = ""
  private body : string = ""
  private author : string = ""
  private username : string | undefined
  private password : string = ""
  private createdDate : Date | undefined 
  private updatedDate : Date | undefined 
  private commentBody : string = ""
  private commentDate : Date | undefined


  
  private showLogin = true
  private showNewBlog = false
  private displayBlogs = false



  public allBlogs: Blog[] = []
  

  
  
  // public displayLogin: boolean = false;
  


  constructor(private http: HttpClient ) {
    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password")

        if(username !== null && password !== null){
          this.login(username, password)
        
     }
    
  }

  public getTitle() {
    return this.title
  }
  public getbody() {
    return this.body
  }
  public getAuthor() {
    return this.author
  }
  public getCreatedDate() {
    return this.createdDate
  }
  public getUpdatedDate() {
    return this.updatedDate
  }


  public getShowLogin(): boolean {
    return this.showLogin

  }

  public getShowNewBlog(): boolean {
    return this.showNewBlog

  }

  public getDisplayBlog(): boolean {
    return this.displayBlogs
  }

  public getUsername(): string | undefined {
    return this.username
  }

  // public startNewBlogs(): boolean {
  //   return this.displayNewBlog
  // }


  // public showLogin(): void {
  //   this.displayLogin = true;
  // }

  


  // public startRegister(): void {
  //   this.showLogin = false
  //   this.showRegister = true
  // }

  public startLogin(): void {
    this.showLogin = true
  }

  public startNewBlog(): void {
    this.showNewBlog = true
  }

  public loadBlogs(): void {
    this.displayBlogs
  }

  // private showError (message: string): void {
  //   this.snackBar.open(message, undefined, {
  //     duration: 2000
  //   })
  // }

  


public createBlog(title:string, body:string, author:string, createdDate: Date, updatedDate: Date ): void {
     this.http.post<Blog>('http://localhost:8080/blog', Blog) 
      .pipe(take(1))
      .subscribe ({
        next: () => { 
        this.newBlog(title, body, author, createdDate, updatedDate)},
        error: (err) => Error("Unable to post")
        
      })
}

public newBlog (title:string, body:string, author:string, createdDate: Date, updatedDate: Date ): void {
  this.title = title,
  this.body = body,
  this.author = author,
  this.createdDate = createdDate,
  this.updatedDate = updatedDate
}

public updateBlog(title:string, body:string, author:string, createdDate: Date, updatedDate: Date ): void {
    this.http.put(`http://localhost:8080/blog/${title}`, {
      title: title,
      body: this.body,
      author: author,
      createdDate: createdDate,
      updatedDate: this.updatedDate
    })
      .pipe(take(1))
      .subscribe({
        next: () => { this.displayBlogs},
        error: (err) => Error("Unable to update")
      })
}
  
public deleteBlog(title: string): void {
    this.http.delete('http://localhost:8080/blog/${title}')
        .pipe(take(1))
        .subscribe({
          next: () => {this.displayBlogs},
        error: (err) => {('Oops, something went wrong')
        }
      })
}

public getAllBlogs(): void {
  this.http.get<Blog[]>(`http://localhost:8080/blogs`)
  .pipe(take(1))
  .subscribe({
    next: () => {this.displayBlogs},
    error: (err) => {('Unable to get all')}
  })

}

public addComment(): void {
  this.http.post<Comment>('http://localhost:8080/comment', Comment)
  .pipe(take(1))
  .subscribe({
    next: () => {this.newComment},
    error: (err) => {('Unable to post')}
  })
}

public newComment(commentBody:string, commentDate: Date ): void {
  this.commentBody = commentBody,
  this.commentDate = commentDate
}

public register (username: string, password: string): void{
  this.http.post(`http://localhost:8080/blogger`, {
    id: null,
    username,
    password
  })
  .pipe(take(1))
  .subscribe({
    next: () => {
        this.login(username, password)
    },
    error: (err) => {
      Error('Failed to register')
    }
  })
}

public login (username: string, password: string): void {
  this.http.get<Blogger>(`http://localhost:8080/users?username=${username}&password=${password}`)
      .pipe(take(1))
      .subscribe({
        next: user => {
          this.loginSuccess(user)
        },
        error: (err) => {("Oops, something went wrong")}
      })
}

private loginSuccess (blogger: Blogger): void{
  this.showLogin = false
  this.username = blogger.username
  localStorage.setItem("username", blogger.username)
  localStorage.setItem("password", blogger.password)
  // this.displayBlogs
}

public logout(): void {
  this.showLogin = true
  this.username = undefined
  this.displayBlogs = false
  localStorage.clear()
}

}