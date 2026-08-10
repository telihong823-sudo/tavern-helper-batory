export const Schema = z.object({
  莉奥娜: z.object({
    情欲值: z.coerce.number().describe('莉奥娜对<user>的性欲与沉沦程度，0~100').transform(v => _.clamp(v, 0, 100)).prefault(0),
    心声: z.string().describe('莉奥娜本轮内心独白，2~4句；不在场时为空字符串，按阶段情绪基调自由发挥').max(240).prefault(''),
  }).prefault({}),
  薇拉: z.object({
    依赖值: z.coerce.number().describe('薇拉对<user>的无意识依赖程度，0~100').transform(v => _.clamp(v, 0, 100)).prefault(0),
    心声: z.string().describe('薇拉本轮如实报告，2~4句；不在场时为空字符串，按阶段情绪基调自由发挥').max(240).prefault('')
  }).prefault({}),
});
export type Schema = z.output<typeof Schema>;
