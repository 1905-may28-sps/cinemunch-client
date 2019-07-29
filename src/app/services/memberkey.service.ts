import { Injectable } from '@angular/core';

@Injectable()
export class MemberkeyService {
  private memberKey: string;

  constructor() {
    this.memberKey = "";
  }

  public setMemberKey(val: string): void {
    this.memberKey = val;
}

public getMemberKey(): string {
    return this.memberKey;
}

}
