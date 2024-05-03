import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWithFilterPipe',
  pure: false, // Set pure to false to recompute the pipe when the input changes
  standalone: true,
})
export class StartsWithFilterPipePipe implements PipeTransform {
  transform(value: string[], ...args: unknown[]): unknown {
    let correctStrings: string[] = [];
    value.forEach((element) => {
      if (element.startsWith(args[0] as string)) {
        correctStrings.push(element);
      }
    });
    return correctStrings.join(',');
  }
}
