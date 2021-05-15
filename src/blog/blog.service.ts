import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BlogEntity } from './models/blog.entity';
import { Blog } from './models/blog.interface';

@Injectable()
export class BlogService {

    constructor(
        @InjectRepository(BlogEntity)
        private readonly blogRepository : Repository<BlogEntity>
    ){}

    createBlog(blog : Blog): Observable<Blog>{
        return from(this.blogRepository.save(blog));
    }

    findAllBlogs():Observable<Blog[]>{
        return from(this.blogRepository.find())
    }

    findOneBlog(id : number):Observable<Blog>{
        return from(this.blogRepository.findOne(id))
    }

    updateBlog(id: number, blog : Blog): Observable<UpdateResult>{
        return from(this.blogRepository.update(id,blog))
    }

    deleteBlog(id:number):Observable<DeleteResult>{
        return from(this.blogRepository.delete(id))
    }
}
