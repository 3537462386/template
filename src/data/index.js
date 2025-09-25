export const baseCardType = [
  // 基础牌（1-4）
  {
    label: '杀',
    value: 1,
    type: '基本',
    description: '对目标角色造成1点伤害'
  },
  {
    label: '闪',
    value: 2,
    type: '基本',
    description: '抵消目标杀的效果'
  },
  {
    label: '桃',
    value: 3,
    type: '基本',
    description: '回复1点体力，可在濒死状态时自救'
  },
  {
    label: '酒',
    value: 4,
    type: '基本',
    description: '本回合使用的下一张杀造成的伤害+1；濒死时使用可回复1点体力'
  },

  // 锦囊牌-普通锦囊（10-19）
  {
    label: '决斗',
    value: 10,
    type: '锦囊',
    description: '与目标角色轮流打出杀，未打出者受到1点伤害'
  },
  {
    label: '过河拆桥',
    value: 11,
    type: '锦囊',
    description: '弃置目标角色一张牌'
  },
  {
    label: '顺手牵羊',
    value: 12,
    type: '锦囊',
    description: '获得距离1以内目标角色的一张牌'
  },
  {
    label: '万箭齐发',
    value: 13,
    type: '锦囊',
    description: '所有其他角色需打出闪，否则受到1点伤害'
  },
  {
    label: '南蛮入侵',
    value: 14,
    type: '锦囊',
    description: '所有其他角色需打出杀，否则受到1点伤害'
  },
  {
    label: '无中生有',
    value: 15,
    type: '锦囊',
    description: '从牌堆摸两张牌'
  },
  {
    label: '五谷丰登',
    value: 16,
    type: '锦囊',
    description: '所有角色从牌堆展示的X张牌中选择一张（X为角色数）'
  },
  {
    label: '桃园结义',
    value: 17,
    type: '锦囊',
    description: '所有角色回复1点体力'
  },
  {
    label: '借刀杀人',
    value: 18,
    type: '锦囊',
    description: '令A角色对B角色使用杀，若未使用，获得A角色的武器'
  },
  {
    label: '火攻',
    value: 19,
    type: '锦囊',
    description: '展示目标角色一张手牌，若你能弃置一张与之同花色的牌，则对其造成1点火焰伤害'
  },

  // 锦囊牌-延时锦囊（20-22）
  {
    label: '乐不思蜀',
    value: 20,
    type: '延时锦囊',
    description: '延时锦囊，目标角色回合开始时进行判定，若不为红桃则跳过出牌阶段'
  },
  {
    label: '兵粮寸断',
    value: 21,
    type: '延时锦囊',
    description: '延时锦囊，目标角色回合开始时进行判定，若不为梅花则跳过摸牌阶段'
  },
  {
    label: '闪电',
    value: 22,
    type: '延时锦囊',
    description: '延时锦囊，从当前角色开始，回合开始时判定，若为黑桃2-9则受到3点伤害，否则移给下家'
  }
]
