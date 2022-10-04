import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTempComponent } from './recipe-temp.component';

describe('RecipeTempComponent', () => {
  let component: RecipeTempComponent;
  let fixture: ComponentFixture<RecipeTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
