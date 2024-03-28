import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [ UserComponent ]
    // })
    // .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing html element list',()=>{
    const data=fixture.nativeElement
    expect(data.querySelector('.list'))
  })

  it('testing html element add',()=>{
    const data=fixture.nativeElement
    expect(data.querySelector('.add'))
  })

  it('testing html element edit',()=>{
    const data=fixture.nativeElement
    expect(data.querySelector('.edit'))
  })

});
