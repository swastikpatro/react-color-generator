interface singleColorType {
  rgb: number[];
  alpha?: number;
  type: string;
  weight: number;
  hex: string;
}
interface stateType {
  colorInput: string;
  shadeInput: number;
  colorsList: singleColorType[];
}

interface actionType {
  targetName?: any;
  type: string;
  val?: number | string;
  nextList?: singleColorType[];
}

export type { singleColorType, stateType, actionType };
