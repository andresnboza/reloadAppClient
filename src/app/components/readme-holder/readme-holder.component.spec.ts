import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmeHolderComponent } from './readme-holder.component';

describe('ReadmeHolderComponent', () => {
  let component: ReadmeHolderComponent;
  let fixture: ComponentFixture<ReadmeHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadmeHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmeHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
