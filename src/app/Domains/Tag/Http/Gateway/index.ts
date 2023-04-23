import { Router } from 'express';
import { IRouteBase } from '../../../../../core/providers/interfaces/route-base.interface';
import { ValidationMiddleware } from '../../../../../core/infra/http/middleware/middleware';

// Request Signatures
import { TagCreateRequest } from '../Request/create.request';

// Controller
import TagController from '../Controllers';

export class TagGateway implements IRouteBase {
    router: Router;
    constructor(router: Router) {
        this.router = router;
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get('/', (req, res) => TagController.CaseRead.execute(req, res));
        this.router.get('/:id', (req, res) => TagController.CaseFind.execute(req, res));
        this.router.post('/', ValidationMiddleware(TagCreateRequest), (req, res) => TagController.CaseCreate.execute(req, res));
        this.router.put('/:id', (req, res) => TagController.CaseUpdate.execute(req, res));
        this.router.delete('/:id', (req, res) => TagController.CaseDelete.execute(req, res));
    }
}
