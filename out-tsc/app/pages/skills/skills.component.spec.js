import { TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
describe('SkillsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SkillsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SkillsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=skills.component.spec.js.map