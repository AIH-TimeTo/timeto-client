import { typography } from './typography';

export const fontStyles = {
  // Headline
  head_24_bold: {
    fontSize: typography.fontSize.headlineLg,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.default,
  },
  head_20_bold: {
    fontSize: typography.fontSize.headlineMd,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.default,
  },
  head_20_semibold: {
    fontSize: typography.fontSize.headlineMd,
    fontWeight: typography.fontWeight.semiBold,
    lineHeight: typography.lineHeight.default,
  },

  // Title / Button
  title_16_semibold: {
    fontSize: typography.fontSize.titleSm,
    fontWeight: typography.fontWeight.semiBold,
    lineHeight: typography.lineHeight.default,
  },
  title_16_medium: {
    fontSize: typography.fontSize.titleSm,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.default,
  },

  // Body
  body_14_semibold: {
    fontSize: typography.fontSize.bodyLg,
    fontWeight: typography.fontWeight.semiBold,
    lineHeight: typography.lineHeight.default,
  },
  body_14_medium: {
    fontSize: typography.fontSize.bodyMd,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.default,
  },
  body_12_medium: {
    fontSize: typography.fontSize.bodyTiny,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.default,
  },
  body_10_medium: {
    fontSize: typography.fontSize.bodyTinySmall,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.default,
  },
} as const;
