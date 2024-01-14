import { color as Colors } from '@learnbase-ui/global/constant';
import { cva } from 'cva';

export const textFieldStyles = cva('flex items-center transition-all', {
  variants: {
    color: Colors,
    textSize: {
      xs: 'px-2 py-1 text-xs gap-1',
      sm: 'px-2 py-1 text-sm gap-1',
      md: 'px-3 py-1 text-md gap-1',
      lg: 'px-4 py-2 text-lg gap-2',
      xl: 'px-5 py-3 text-xl gap-2',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    iconPosition: {
      start: 'flex-row-reverse',
      end: 'flex-row',
    },
    labelPosition: {
      top: '',
      bottom: '',
    },
    fullWidth: {
      true: 'w-full',
    },
    borderWidth: {
      xs: 'border-[1px] font-thin',
      sm: 'border-2 font-normal',
      md: 'border-4 font-medium',
      lg: 'border-[6px] font-semibold',
      xl: 'border-8 font-black',
    },
    width: {
      sm: 'w-60',
      md: 'w-72',
      lg: 'w-96',
    },
  },
  defaultVariants: {
    borderWidth: 'sm',
    color: 'primary',
    fullWidth: false,
    iconPosition: 'end',
    labelPosition: 'top',
    rounded: 'md',
    textSize: 'md',
    width: 'md',
  },
});
