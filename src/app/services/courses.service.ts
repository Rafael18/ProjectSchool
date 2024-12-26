import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Course } from '@app/shared/models/course';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {}

  baseURL = `${environment.apiURL}courses`;
  private http = inject(HttpClient);

  public getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseURL}`)
  }

  public getCourseById(id: number): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseURL}/${id}`)
  }

  public postCourse(course: Course): Observable<Course[]>{
    return this.http.post<Course[]>(`${this.baseURL}`, course)
  }

  public putCourseById(id: number, course: Course): Observable<Course[]>{
    return this.http.put<Course[]>(`${this.baseURL}/${id}`, course)
  }

  public DeleteCourse(id: number): Observable<Course[]>{
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`)
  }
}
