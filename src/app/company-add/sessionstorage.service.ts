import { Injectable } from '@angular/core';

const STATUS_STORAGE_KEY = 'LIST_ORDER';

@Injectable({
  providedIn: 'root',
})
export class SessionstorageService {
  constructor() {}

  saveListDB(list: any[]): void {
    sessionStorage.setItem(
      STATUS_STORAGE_KEY,
      JSON.stringify(list)
    );
  }

  getOneDB(id: number): any | null {
    const list = this.getListDB();
    const item = list.find((listItem) => listItem.id == id) || null;
    return item;
  }

  getListDB(): any[] {
    return JSON.parse(
      sessionStorage.getItem(STATUS_STORAGE_KEY) || '[]'
    );
  }

  addItemDB(item: any): void {
    const list = this.getListDB();
    list.push(item);
    this.saveListDB(list);
  }

  removeItemDB(id: number): void {
    const list = this.getListDB();
    const newList = list.filter((listItem) => listItem.id != id);
    this.saveListDB(newList);
  }
}


  

