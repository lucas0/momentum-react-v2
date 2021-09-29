import { Color, Elevation, ModalContainerRadius } from './ModalContainer.types';

const CLASS_PREFIX = 'md-modal-container';

const COLORS: Record<string, Color> = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  QUATERNARY: 'quaternary',
};

const ELEVATIONS: Record<number, Elevation> = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
};

const RADIUS: Record<number, ModalContainerRadius> = {
  0: 0,
  12: 12,
  24: 24,
};

const DEFAULTS = {
  COLOR: COLORS.PRIMARY,
  ELEVATION: ELEVATIONS[0],
  RADIUS: RADIUS[0],
};

const STYLE = {
  wrapper: `${CLASS_PREFIX}-wrapper`,
};

export { CLASS_PREFIX, COLORS, DEFAULTS, ELEVATIONS, STYLE, RADIUS };
