
export const enum CellType {
  Item,
  Header,
  Footer
}

export const enum NodeChange {
  NoChange,
  Position,
  Cell,
}

export interface Cell {
  i: number;
  index: number;
  value: any;
  type: CellType;
  height: number;
  reads: number;
  visible: boolean;
}

export interface VirtualNode {
  cell: Cell;
  top: number;
  change: NodeChange;
  d: boolean;
  visible: boolean;
}

export type HeaderFn = (item: any, index: number, items: any[]) => string | null;
export type ItemHeightFn = (item: any, index: number) => number;
export type ItemRenderFn = (el: HTMLElement | null, cell: Cell, domIndex: number) => HTMLElement;
export type DomRenderFn = (dom: VirtualNode[]) => void;
