import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public fireservices:AngularFirestore) { }

  create_Newstudent(Record)
  {
    return this.fireservices.collection('Student').add(Record);
  }
}

