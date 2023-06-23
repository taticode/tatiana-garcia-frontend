import { TestBed } from '@angular/core/testing';
import { BbddService } from './bbdd.service';
describe('BbddService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BbddService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=bbdd.service.spec.js.map