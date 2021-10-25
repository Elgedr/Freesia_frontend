export interface AllKpIndex {
  observedTime: string;
  kpIndex: number;
  source: string
}

export interface LinkedEvents {
  activityID: string
}

export interface Donki {
    gstID: string;
    startTime: string;
    allKpIndex: AllKpIndex[];
    linkedEvents: LinkedEvents[];
    link: string;
}
