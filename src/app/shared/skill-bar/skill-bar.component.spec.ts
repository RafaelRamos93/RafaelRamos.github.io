import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBar } from './skill-bar.component';

describe('SkillBar', () => {
  let component: SkillBar;
  let fixture: ComponentFixture<SkillBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillBar],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
