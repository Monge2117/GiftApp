import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result, Rickandmorty } from '../interface/gift.interface';

@Injectable({providedIn: 'root'})
export class GiftService {
  public giftList:Result[] =[];
  private _TagHistory:string[] = [];
private apikey:string ='dGMJW12nlHSz4603sy81BZFryoPshmUK';
//private serviceUrl:string = 'https://api.giphy.com/v1/gifs/search/';
private serviceUrl:string = 'https://rickandmortyapi.com/api/character/';
  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

get TagHistory(){
return [...this._TagHistory];
}
private saveLocalStorage(){
  localStorage.setItem('history',JSON.stringify(this._TagHistory));
}

private loadLocalStorage(){
  if(!localStorage.getItem('history'))return;

  this._TagHistory = JSON.parse(localStorage.getItem('history')!);
if(this._TagHistory.length === 0)return;
this.searchTag(this._TagHistory[0]);
}
private OrganizeHistory(tag:string){
tag = tag.toLowerCase();
if(this._TagHistory.includes(tag)){
this._TagHistory = this._TagHistory.filter((old) => old !== tag)
}
this._TagHistory.unshift(tag);
this._TagHistory = this._TagHistory.splice(0,10);
this.saveLocalStorage();
}

searchTag(tag:string):void{
  if(tag.length === 0) return ;
  this.OrganizeHistory(tag);

 /* const params = new HttpParams()
 .set('api_key',this.apikey)
 .set('limit','10')
 .set('q',tag) */

 const params = new HttpParams()
 .set('name',tag)
 .set('status','alive')

  // this.http.get(`${this.serviceUrl}/search`,{params})
  this.http.get<Rickandmorty>(`${this.serviceUrl}`,{params})
  .subscribe(resp =>{
    this.giftList = resp.results;
});
}

}

