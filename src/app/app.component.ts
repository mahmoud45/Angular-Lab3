import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular-Lab3';
    renderPage:string = 'Home';

    getPageName(pageName:string){
        this.renderPage = pageName;
    }
}
