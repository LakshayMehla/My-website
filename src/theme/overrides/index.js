import merge from 'lodash/merge';

import { card } from './components/card';
import { chip } from './components/chip';
import { list } from './components/list';
import { badge } from './components/badge';
import { paper } from './components/paper';
import { appBar } from './components/appbar';
import { avatar } from './components/avatar';
import { button } from './components/button';
import { defaultProps } from './default-props';
import { svgIcon } from './components/svg-icon';
import { progress } from './components/progress';
import { textField } from './components/textfield';
import { typography } from './components/typography';
import { cssBaseline } from './components/css-baseline';

// ----------------------------------------------------------------------

export function componentsOverrides(theme) {
  const components = merge(
    defaultProps(theme),
    //
    chip(theme),
    card(theme),
    list(theme),
    badge(theme),
    paper(theme),
    button(theme),
    appBar(theme),
    avatar(theme),
    svgIcon(theme),
    progress(theme),
    textField(theme),
    typography(theme),
    cssBaseline(theme)
  );

  return components;
}
