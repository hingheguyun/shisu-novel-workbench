/**
 * dsh-shisu —— 时素小说工作台（node 半区）。
 *
 * 当前是空骨架：只声明插件名，尚未注册任何服务、工具或界面。
 * 设计定稿后在这里接入：
 *   - 书库服务：~/.dsh/shisu/books/ 的索引与单本指向外部目录
 *   - 时间轴：节点、先后/并列/差异关系、稳定 id
 *   - 上下文供给：按当前节点组装世界切片
 */
export const name = 'dsh-shisu'

export async function apply(ctx) {
  // 骨架阶段不注册任何东西，保证插件能装载但不改变宿主行为。
  void ctx
}
