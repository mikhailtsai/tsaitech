import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgroundZaebisComponent } from './background-zaebis.component';

describe('BackgroundZaebisComponent', () => {
  let component: BackgroundZaebisComponent;
  let fixture: ComponentFixture<BackgroundZaebisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundZaebisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundZaebisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
