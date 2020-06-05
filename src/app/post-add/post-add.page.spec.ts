import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostAddPage } from './post-add.page';

describe('PostAddPage', () => {
  let component: PostAddPage;
  let fixture: ComponentFixture<PostAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
