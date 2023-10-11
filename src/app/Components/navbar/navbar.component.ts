import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    @Output() renderPageEvent = new EventEmitter();

    renderPage(page:string){
        this.renderPageEvent.emit(page);
    }
}
