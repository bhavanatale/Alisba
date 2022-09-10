import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorSignupPage } from './vendor-signup.page';

describe('VendorSignupPage', () => {
  let component: VendorSignupPage;
  let fixture: ComponentFixture<VendorSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
