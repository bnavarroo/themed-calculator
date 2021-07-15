import { BreakpointType } from "~/core/types/breakpoint/breakpoint.type";
import { BreakpointEnum } from "~/core/enums/breakpoint/breakpoint.enum";

export const defaultPadding: string = '.7rem';

export const breakpoints: BreakpointType = {
  [BreakpointEnum.Desktop]: { min: '1200px'},
  [BreakpointEnum.DesktopSmall]: { min: '1024px', max: '1199.98px'},
  [BreakpointEnum.Tablet]: { min: '640px', max: '1023.98px'},
  [BreakpointEnum.Mobile]: { min: '0px', max: '639.98px'},
}
