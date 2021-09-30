import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: ` {{ text | summary: 10 }} `,
})
export class CoursesComponent {
  text = `
    this is intentionally a lot of text: asdfasdfsadfiosdadnvdvdsoivsdfhpasfdasdfhadpfaspfjasdiofahfqpiwqe9hqwfhdpifha8qwufhqp9hrwfh9ddiasf80qwefhd9cxf8efq89ewfhqwpuidhp9h89qe9pehphdihfijdfhasfhqufhqufhq9hfdjfhp9cuhahqp9ehfiudhfpqfhphkahpuefhqpu
  `;
}
