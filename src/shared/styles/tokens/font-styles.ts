import { typography } from './typography';

export const fontStyles = {
  // Headline
  headline_lg_b: {
    fontSize: typography.fontSize.headlineLg,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.default,
  },
  headline_md_b: {
    fontSize: typography.fontSize.headlineMd,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.default,
  },
  headline_md_sb: {
    fontSize: typography.fontSize.headlineMd,
    fontWeight: typography.fontWeight.semiBold,
    lineHeight: typography.lineHeight.default,
  },

  // Title / Button
  title_sm_sb: {
    fontSize: typography.fontSize.titleSm,
    fontWeight: typography.fontWeight.semiBold,
    lineHeight: typography.lineHeight.default,
  },
  title_sm_m: {
    fontSize: typography.fontSize.titleSm,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.default,
  },

  // Body
  body_lg_sb: {
    fontSize: typography.fontSize.bodyLg,
    fontWeight: typography.fontWeight.semiBold,
    lineHeight: typography.lineHeight.default,
  },
  body_md_m: {
    fontSize: typography.fontSize.bodyMd,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.default,
  },
  body_tiny_m: {
    fontSize: typography.fontSize.bodyTiny,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.default,
  },
  body_tiny_s_m: {
    fontSize: typography.fontSize.bodyTinySmall,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.default,
  },
} as const;
