import {Router} from "@angular/router";

export const routerStub: Partial<Router> = {
    navigate(commands: any[]): Promise<boolean> {
        return new Promise(() => true);
    }
};
