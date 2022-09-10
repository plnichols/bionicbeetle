import React, { ReactElement } from 'react';

interface Props {
  children: React.ReactNode;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

type SpacingProps = Omit<Props, 'children'>;
type SpacingPropsKeys = keyof SpacingProps;

interface StyleObj {
  [key: string]: string;
}

const Box = ({ children, ...rest }: Props): ReactElement => {
  let styleObj: StyleObj = {};

  // prettier-ignore
  const spacingProps: SpacingPropsKeys[] = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'];
  const componentProps = { ...rest };
  const componentPropsKeys = Object.keys(componentProps) as Array<keyof SpacingProps>;

  // check if the component was used with any spacing props
  const componentSpacingProps = componentPropsKeys.filter((key) => {
    return spacingProps.indexOf(key) >= 0;
  });

  const stylesMap = {
    m: { key: 'margin', value: '*' },
    mx: { key: 'margin', value: '0 *' },
    my: { key: 'margin', value: '* 0' },
    mt: { key: 'marginTop', value: '*' },
    mr: { key: 'marginRight', value: '*' },
    mb: { key: 'marginBottom', value: '*' },
    ml: { key: 'marginLeft', value: '*' },
    p: { key: 'padding', value: '*' },
    px: { key: 'padding', value: '0 *' },
    py: { key: 'padding', value: '* 0' },
    pt: { key: 'paddingTop', value: '*' },
    pr: { key: 'paddingRight', value: '*' },
    pb: { key: 'paddingBottom', value: '*' },
    pl: { key: 'paddingLeft', value: '*' },
  };

  componentSpacingProps.forEach((prop) => {
    styleObj[stylesMap[prop].key] = stylesMap[prop].value.replace('*', componentProps[prop] + 'px');
  });

  const { m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl, ...restProps } = rest;

  return (
    <div {...restProps} style={styleObj}>
      {children}
    </div>
  );
};

export default Box;
