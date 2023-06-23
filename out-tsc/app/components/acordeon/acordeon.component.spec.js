import { TestBed } from '@angular/core/testing';
import { AcordeonComponent } from './acordeon.component';
describe('AcordeonComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AcordeonComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AcordeonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=acordeon.component.spec.js.map