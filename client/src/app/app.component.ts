import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import * as moment from 'moment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	noteList:any
	newNote:any
	constructor(private _httpService: HttpService,){
		this.noteList = []
		this.newNote = {text:""}
	}
	ngOnInit(){
		this.getNotes()
	}
	getNotes(){
		this._httpService.getNotes().subscribe(data=>{
			this.noteList = data['data']
		})
	}
	onSubmit(){
		this._httpService.addNote(this.newNote).subscribe(data=>{
			this.newNote = {text:""}
			this.getNotes()
		})
	}
}
