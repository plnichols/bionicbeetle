import React from 'react';

export function WithSpacing(Component) {
  const withSpacing = ({ ...rest }) => {
    let styleObj = {};
    const spacingProps = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'];
    const componentProps = { ...rest };
    const componentPropsKeys = Object.keys({ ...rest });

    // check if HoC component was used with spacing props
    const componentSpacingProps = componentPropsKeys.filter(key => {
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
      pl: { key: 'paddingLeft', value: '*' }
    };

    componentSpacingProps.forEach(prop => {
      styleObj[stylesMap[prop].key] = stylesMap[prop].value.replace('*', componentProps[prop] + 'px');
    });

    return <Component {...rest} style={styleObj} />;
  };

  withSpacing.displayName = `withSpacing(${Component.displayName || Component.name || 'Component'})`;

  return withSpacing;
}
