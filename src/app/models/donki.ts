export interface allKpIndex {
  observedTime: string;
  kpIndex: number;
  source: string
}

export interface linkedEvents {
  activityID: string
}

export interface Donki {
    gstID: string;
    startTime: string;
    allKpIndex: allKpIndex[];
    linkedEvents: linkedEvents[];
    link: string;
}
