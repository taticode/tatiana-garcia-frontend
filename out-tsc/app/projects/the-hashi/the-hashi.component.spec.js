import { TestBed } from '@angular/core/testing';
import { TheHashiComponent } from './the-hashi.component';
describe('TheHashiComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TheHashiComponent]
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
//# sourceMappingURL=the-hashi.component.spec.js.map