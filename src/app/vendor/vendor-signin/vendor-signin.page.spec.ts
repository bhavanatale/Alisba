import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorSigninPage } from './vendor-signin.page';

describe('VendorSigninPage', () => {
  let component: VendorSigninPage;
  let fixture: ComponentFixture<VendorSigninPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSigninPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorSigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
