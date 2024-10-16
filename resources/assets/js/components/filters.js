import { EffectOpType } from '@miru/image-editor'

export const filterEffects = [
    {
      name: '1984',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.5 },
        { type: EffectOpType.HUE_ROTATE, args: [-30] },
        { type: EffectOpType.ADJUST_COLOR, args: [0, 0, 0.4] },
      ],
    },
    {
      name: 'Azen',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.2 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.15, 0, 0.4] },
      ],
    },
    {
      name: 'Astairo',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.35 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.2, 0.1, 0.3] },
      ],
    },
    {
      name: 'Grasbee',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.5 },
        { type: EffectOpType.ADJUST_COLOR, args: [0, 0.2, 0.8] },
      ],
    },
    {
      name: 'Bookrun',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.4 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.1, 0.25, -0.1] },
        { type: EffectOpType.HUE_ROTATE, args: [-2] },
      ],
    },
    {
      name: 'Borough',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, 0.25, 0] },
        { type: EffectOpType.HUE_ROTATE, args: [5] },
      ],
    },
    {
      name: 'Farms',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, 0.25, 0.35] },
        { type: EffectOpType.HUE_ROTATE, args: [-5] },
      ],
    },
    {
      name: 'Hairsadone',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.15 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, 0.25, 0] },
        { type: EffectOpType.HUE_ROTATE, args: [5] },
      ],
    },
    {
      name: 'Cleana',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.5 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, 0.15, -0.1] },
        { type: EffectOpType.HUE_ROTATE, args: [-2] },
      ],
    },
    {
      name: 'Catpatch',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.35 },
        { type: EffectOpType.ADJUST_COLOR, args: [0, .5, 0.1] },
      ],
    },
    {
      name: 'Earlyworm',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, 0.15, -0.1] },
        { type: EffectOpType.HUE_ROTATE, args: [-5] },
      ],
    },
    {
      name: 'Plaid',
      ops: [{ type: EffectOpType.ADJUST_COLOR, args: [0.1, 0.1, 0] }],
    },
    {
      name: 'Kyo',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.2, 0.15, 0.35] },
        { type: EffectOpType.HUE_ROTATE, args: [-5] },
      ],
    },
    {
      name: 'Yefe',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.4 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.2, 0.5, 0.4] },
        { type: EffectOpType.HUE_ROTATE, args: [-10] },
      ],
    },
    {
      name: 'Godess',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.5 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.05, 0.05, 0.35] },
      ],
    },
    {
      name: 'Yards',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.2, 0.2, 0.05] },
        { type: EffectOpType.HUE_ROTATE, args: [-15] },
      ],
    },
    {
      name: 'Quill',
      ops: [{ type: EffectOpType.ADJUST_COLOR, args: [0.25, -0.15, -1] }],
    },
    {
      name: 'Juno',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.35 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.15, 0.15, 0.8] },
      ],
    },
    {
      name: 'Rankine',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.15 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.1, 0.5, 0] },
        { type: EffectOpType.HUE_ROTATE, args: [-10] },
      ],
    },
    {
      name: 'Mark',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.3, 0.2, 0.25] },
      ],
    },
    {
      name: 'Chill',
      ops: [{ type: EffectOpType.ADJUST_COLOR, args: [0, 0.5, 0.1] }],
    },
    {
      name: 'Van',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.05, 0.05, 1] },
      ],
    },
    {
      name: 'Apache',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.35 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.05, 0.05, 0.75] },
      ],
    },
    {
      name: 'May',
      ops: [{ type: EffectOpType.ADJUST_COLOR, args: [0.15, 0.1, 0.1] }],
    },
    {
      name: 'Ceres',
      ops: [
        { type: EffectOpType.ADJUST_COLOR, args: [0.4, -0.05, -1] },
        { type: EffectOpType.SEPIA, intensity: 0.35 },
      ],
    },
    {
      name: 'Knoxville',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [-0.1, 0.5, 0] },
        { type: EffectOpType.HUE_ROTATE, args: [-15] },
      ],
    },
    {
      name: 'Felicity',
      ops: [{ type: EffectOpType.ADJUST_COLOR, args: [0.25, 0.1, 0.1] }],
    },
    {
      name: 'Sandblast',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.15 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.2, 0, 0] },
      ],
    },
    {
      name: 'Daisy',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.75 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, -0.25, 0.4] },
      ],
    },
    {
      name: 'Elevate',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.2, 0.25, -0.1] },
      ],
    },
    {
      name: 'Nevada',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [-0.1, 0.5, 0] },
        { type: EffectOpType.HUE_ROTATE, args: [-15] },
      ],
    },
    {
      name: 'Futura',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.15 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, 0.25, 0.2] },
      ],
    },
    {
      name: 'Sleepy',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.15 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, 0.25, 0.2] },
      ],
    },
    {
      name: 'Steward',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.35 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, 0.1, 0.25] },
      ],
    },
    {
      name: 'Savoy',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.4 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.2, -0.1, 0.4] },
        { type: EffectOpType.HUE_ROTATE, args: [-10] },
      ],
    },
    {
      name: 'Blaze',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [-0.05, 0.5, 0] },
        { type: EffectOpType.HUE_ROTATE, args: [-15] },
      ],
    },
    {
      name: 'Apricot',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.25 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.1, 0.1, 0] },
      ],
    },
    {
      name: 'Gloming',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.35 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.15, 0.2, 0.3] },
      ],
    },
    {
      name: 'Walter',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.35 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.25, -0.2, 0.4] },
      ],
    },
    {
      name: 'Poplar',
      ops: [
        { type: EffectOpType.ADJUST_COLOR, args: [0.2, -0.15, -0.95] },
        { type: EffectOpType.SEPIA, intensity: 0.5 },
      ],
    },
    {
      name: 'Xenon',
      ops: [
        { type: EffectOpType.SEPIA, intensity: 0.45 },
        { type: EffectOpType.ADJUST_COLOR, args: [0.75, 0.25, 0.3] },
        { type: EffectOpType.HUE_ROTATE, args: [-5] },
      ],
    },
  ]
