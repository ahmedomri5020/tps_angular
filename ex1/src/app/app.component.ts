import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>app works!</h1><p>
 Length: 10</p>
 <p>
 Reversed: 
{{ getReversed(title) }}

 </p>
 `,
    styles: []
})
export class AppComponent {
    title = 'app works!';
    getReversed(str: string) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str.substring(i, i + 1);
        }
        return reversed;
    }
}