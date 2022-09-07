import React, { PropsWithChildren } from 'react'
import { Atoms } from '../../sprinkles.css'
import { composeWithAtoms } from '../../utils/compose'
import {
  columnStyle,
  lgColumnsStyle,
  mdColumnsStyle,
  smColumnsStyle,
  xlColumnsStyle,
  xsColumnsStyle,
  xxlColumnsStyle
} from './Column.css'

interface Column {
  atoms?: Atoms
  width?: ColumnsBreakpoints
}

const Column: React.FC<PropsWithChildren<Column>> = (props) => {
  const { atoms: atomicProperties, children, width } = props

  const classes = composeWithAtoms(
    atomicProperties!,
    columnStyle,
    // @ts-ignore
    xsColumnsStyle[width?.xs],
    // @ts-ignore
    smColumnsStyle[width?.sm],
    // @ts-ignore
    mdColumnsStyle[width?.md],
    // @ts-ignore
    lgColumnsStyle[width?.lg],
    // @ts-ignore
    xlColumnsStyle[width?.xl],
    // @ts-ignore
    xxlColumnsStyle[width?.xxl]
  )

  return <div className={classes}>{children}</div>
}

export default Column
