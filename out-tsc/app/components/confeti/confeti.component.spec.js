import { TestBed } from '@angular/core/testing';
import { ConfetiComponent } from './confeti.component';
describe('ConfetiComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConfetiComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ConfetiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=confeti.component.spec.js.map