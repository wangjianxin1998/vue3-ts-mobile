import { Button, List, Cell, CellGroup } from 'vant';
export function vant(app:any) {
    app.use(Button);
    app.use(List)
    app.use(Cell);
    app.use(CellGroup);
}