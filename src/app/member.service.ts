import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Member } from './member';
import { MessageService } from './message.service';
import { MEMBERS } from './mock-members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private messageService: MessageService
  ) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add('MessageService:社員一覧データを取得しました');
    return of(MEMBERS);
  }
}
