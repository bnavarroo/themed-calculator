import { BreakpointEnum } from "~/core/enums/breakpoint/breakpoint.enum";

type BreakpointKeysType = {
  min: string,
  max?: string
};

export type BreakpointType = {
  [BreakpointEnum.Desktop]: BreakpointKeysType,
  [BreakpointEnum.DesktopSmall]: BreakpointKeysType,
  [BreakpointEnum.Tablet]: BreakpointKeysType,
  [BreakpointEnum.Mobile]: BreakpointKeysType,
};
