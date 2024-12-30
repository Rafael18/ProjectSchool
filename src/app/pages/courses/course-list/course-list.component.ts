import { Component, inject } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';
import { Course } from '@app/shared/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [ './course-list.component.scss' ]
})
export class CourseListComponent {
  public courseList : Course[] = [];
  private courseService = inject(CoursesService)

  ngOnInit(): void{
    this.getCourses();
  }

  public getCourses(): void{
    this.courseService.getCourses().subscribe((response: Course[]) => {
      this.courseList = response
    })
  }

}
