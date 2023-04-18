import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHashiComponent } from './the-hashi.component';

describe('TheHashiComponent', () => {
  let component: TheHashiComponent;
  let fixture: ComponentFixture<TheHashiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheHashiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheHashiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
