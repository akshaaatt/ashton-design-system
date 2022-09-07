import React, { PropsWithChildren } from 'react'
import { Atoms } from '../../sprinkles.css'
import spacers from '../../themes/timbre/spacers'
import { composeWithAtoms } from '../../utils/compose'
import {
  autoGridLGColumnsStyle,
  autoGridMDColumnsStyle,
  autoGridSMColumnsStyle,
  autoGridStyle,
  AutoGridVariants,
  autoGridXGuttersStyle,
  autoGridXLColumnsStyle,
  autoGridXSColumnsStyle,
  autoGridXXLColumnsStyle,
  autoGridYGuttersStyle
} from './AutoGrid.css'

interface AutoGrid {
  atoms?: Atoms
  columns?: ColumnsBreakpoints
  equalHeight?: boolean
  guttersX?: keyof typeof spacers
  guttersY?: keyof typeof spacers
  // @ts-ignore
  horizontalAlign?: AutoGridVariants['horizontalAlign']
  // @ts-ignore
  verticalAlign?: AutoGridVariants['verticalAlign']
}

const AutoGrid: React.FC<PropsWithChildren<AutoGrid>> = (props) => {
  const {
    atoms: atomicProperties,
    children,
    columns,
    equalHeight = false,
    guttersX = 4,
    guttersY = 4,
    horizontalAlign,
    verticalAlign
  } = props

  const classes = composeWithAtoms(
    atomicProperties!,
    autoGridStyle({
      // @ts-ignore
      height: equalHeight ? 'equal' : null,
      horizontalAlign,
      verticalAlign
    }),
    // @ts-ignore
    autoGridXSColumnsStyle[columns?.xs],
    // @ts-ignore
    autoGridSMColumnsStyle[columns?.sm],
    // @ts-ignore
    autoGridMDColumnsStyle[columns?.md],
    // @ts-ignore
    autoGridLGColumnsStyle[columns?.lg],
    // @ts-ignore
    autoGridXLColumnsStyle[columns?.xl],
    // @ts-ignore
    autoGridXXLColumnsStyle[columns?.xxl],
    autoGridXGuttersStyle[guttersX],
    autoGridYGuttersStyle[guttersY]
  )

  return <div className={classes}>{children}</div>
}

export default AutoGrid
