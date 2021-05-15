import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BlogService } from './blog.service';
import { Blog } from './models/blog.interface';

@Controller('blog')
export class BlogController {

    constructor(private blogService : BlogService){}
    
    @Post('create')
    create(@Body() blog: Blog): Observable<Blog>{
        return this.blogService.createBlog(blog);
    }

    @Get()
    findAll(): Observable<Blog[]>{
        return this.blogService.findAllBlogs();
    }

    @Get(':id')
    findOne(@Param('id') id : number) : Observable<Blog>{
        return this.blogService.findOneBlog(id);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() blog : Blog
    ):Observable<UpdateResult>{
        return this.blogService.updateBlog(id, blog)
    }

    @Delete(':id')
    delete( @Param('id') id: number):Observable<DeleteResult>{
        return this.blogService.deleteBlog(id)
    }


}
