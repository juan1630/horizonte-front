import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resulPosts = [];
    for (const post of value) {
      if (post.DESTINO.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        console.log('yeeeeeepaaa');
        resulPosts.push(post);
      };
    };
    return resulPosts;
  }

}
