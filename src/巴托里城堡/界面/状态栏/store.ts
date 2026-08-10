import { defineMvuDataStore } from '@util/mvu';
import { Schema } from '../../schema';

/**
 * 数据源：优先当前楼层的消息变量；缺失时（如首楼尚未被引擎写入 stat_data）
 * 回退到聊天级变量（initvar 初始化时写入），保证首楼也能展示初始状态。
 */
function statDataSource(option: VariableOption): Record<string, unknown> {
  const message = _.get(getVariables(option), 'stat_data', {});
  if (!_.isEmpty(message)) {
    return message;
  }
  const chat = _.get(getVariables({ type: 'chat' }), 'stat_data', {});
  return _.isEmpty(chat) ? {} : chat;
}

export const useDataStore = defineMvuDataStore(
  Schema,
  { type: 'message', message_id: getCurrentMessageId() },
  undefined,
  statDataSource,
);
