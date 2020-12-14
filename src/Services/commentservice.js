export class CommentService{
     url="https://jsonplaceholder.typicode.com/comments"
    getAllComents=()=>{
         return fetch(this.url)
             .then(value => value.json())
    }
    getCommentById=(id)=>{
         return fetch(this.url+"/"+id)
             .then(value => value.json())
    }

}