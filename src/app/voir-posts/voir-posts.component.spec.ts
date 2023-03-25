import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirPostsComponent } from './voir-posts.component';

describe('VoirPostsComponent', () => {
  let component: VoirPostsComponent;
  let fixture: ComponentFixture<VoirPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
