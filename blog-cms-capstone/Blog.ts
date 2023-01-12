export class Blog { 
    constructor ( 
        public id: number,
        public title: string,
        public body: string,
        public author: string,
        public createdDate: Date,
        public updatedDate: Date
        
    ){ }
    }